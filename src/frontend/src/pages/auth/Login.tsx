import { useState, useEffect } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useSession } from '../../hooks/useSession';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function Login() {
  const { login, loginStatus, loginError } = useInternetIdentity();
  const { isAuthenticated, isAdmin, isLoading } = useSession();
  const navigate = useNavigate();
  const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      if (isAdmin) {
        navigate({ to: '/admin' });
      } else {
        navigate({ to: '/user' });
      }
    }
  }, [isAuthenticated, isAdmin, isLoading, navigate]);

  const handleLogin = () => {
    setHasAttemptedLogin(true);
    login();
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
      className="flex items-center justify-center min-h-screen relative"
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
            <CardTitle className="text-2xl">Welcome to VCoin</CardTitle>
            <CardDescription>Sign in to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {loginError && hasAttemptedLogin && (
              <Alert variant="destructive">
                <AlertDescription>{loginError.message}</AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleLogin}
              disabled={loginStatus === 'logging-in'}
              className="w-full"
              size="lg"
            >
              {loginStatus === 'logging-in' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login with Internet Identity'
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
