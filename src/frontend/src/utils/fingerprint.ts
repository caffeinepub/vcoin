export function generateFingerprint(): string {
  const stored = localStorage.getItem('vcoin_fingerprint');
  if (stored) {
    return stored;
  }

  const components = [
    navigator.userAgent,
    navigator.language,
    new Date().getTimezoneOffset(),
    screen.width,
    screen.height,
    screen.colorDepth,
  ];

  const fingerprint = btoa(components.join('|')).substring(0, 32);
  localStorage.setItem('vcoin_fingerprint', fingerprint);
  return fingerprint;
}
