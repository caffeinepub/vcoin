import { useState, useEffect } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useSession } from '../../hooks/useSession';
import { useSaveCallerUserProfile } from '../../hooks/useQueries';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { generateFingerprint } from '../../utils/fingerprint';
import { toast } from 'sonner';

export default function Register() {
  const { login, loginStatus } = useInternetIdentity();
  const { isAuthenticated, userProfile, isLoading } = useSession();
  const saveProfile = useSaveCallerUserProfile();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [step, setStep] = useState<'login' | 'profile'>('login');

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      if (userProfile) {
        navigate({ to: '/user' });
      } else {
        setStep('profile');
      }
    }
  }, [isAuthenticated, userProfile, isLoading, navigate]);

  const handleLogin = () => {
    login();
  };

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const fingerprint = generateFingerprint();
      const profile = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        referralCode: generateReferralCode(),
        referredBy: referralCode.trim() || undefined,
        registrationTimestamp: BigInt(Date.now() * 1000000),
        fingerprint,
        passwordChangeRequired: false,
      };

      await saveProfile.mutateAsync(profile);
      toast.success('Registration successful!');
      navigate({ to: '/user' });
    } catch (error: any) {
      console.error('Registration error:', error);
      if (error.message?.includes('already registered') || error.message?.includes('duplicate')) {
        toast.error('This email is already registered. Please use a different email.');
      } else if (error.message?.includes('rate limit') || error.message?.includes('too many')) {
        toast.error('Too many registration attempts. Please try again later.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen relative py-12"
      style={{
        backgroundImage: 'url(/assets/generated/vcoin-hero-bg.dim_1920x1080.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-md px-4">
        <Card>
          <CardHeader className="text-center">
            <img
              src="/assets/generated/vcoin-logo.dim_512x512.png"
              alt="VCoin"
              className="h-16 w-16 mx-auto mb-4"
            />
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>
              {step === 'login' ? 'First, authenticate with Internet Identity' : 'Complete your profile'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {step === 'login' ? (
              <>
                <Button
                  onClick={handleLogin}
                  disabled={loginStatus === 'logging-in'}
                  className="w-full"
                  size="lg"
                >
                  {loginStatus === 'logging-in' ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Authenticating...
                    </>
                  ) : (
                    'Continue with Internet Identity'
                  )}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline">
                    Login here
                  </Link>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmitProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                  <Input
                    id="referralCode"
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    placeholder="Enter referral code if you have one"
                  />
                </div>

                <Alert>
                  <AlertDescription className="text-xs">
                    By registering, you agree to our terms and conditions. Your email must be unique and will be used
                    for account identification.
                  </AlertDescription>
                </Alert>

                <Button type="submit" disabled={saveProfile.isPending} className="w-full" size="lg">
                  {saveProfile.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    'Complete Registration'
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
