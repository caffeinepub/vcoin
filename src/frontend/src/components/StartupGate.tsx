import { ReactNode, useState, useEffect } from 'react';
import StartupStatusScreen from './screens/StartupStatusScreen';

interface StartupGateProps {
  children: ReactNode;
}

export default function StartupGate({ children }: StartupGateProps) {
  const [startupState, setStartupState] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    // Minimal startup check - just ensure the app can initialize
    const initializeApp = async () => {
      try {
        // Give a brief moment for critical resources to load
        await new Promise(resolve => setTimeout(resolve, 100));
        setStartupState('ready');
      } catch (error) {
        console.error('Startup initialization failed:', error);
        setStartupState('error');
      }
    };

    initializeApp();
  }, []);

  if (startupState === 'loading') {
    return <StartupStatusScreen variant="loading" />;
  }

  if (startupState === 'error') {
    return <StartupStatusScreen variant="error" />;
  }

  return <>{children}</>;
}
