import { ReactNode } from 'react';
import { useSession } from '../hooks/useSession';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import AccessDeniedScreen from '../components/screens/AccessDeniedScreen';
import InitErrorScreen from '../components/screens/InitErrorScreen';
import { Loader2 } from 'lucide-react';

export function UserGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, hasInitError, isInitializing } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !hasInitError && !isInitializing) {
      navigate({ to: '/login' });
    }
  }, [isAuthenticated, isLoading, hasInitError, isInitializing, navigate]);

  // Show error screen if initialization failed
  if (hasInitError) {
    return <InitErrorScreen />;
  }

  // Show visible loading state while actively resolving auth state
  if (isLoading || isInitializing) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show visible loading state while redirecting (avoid blank screen)
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Redirecting...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export function AdminGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isAdmin, isLoading, userProfile, hasInitError, isInitializing } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !hasInitError && !isInitializing) {
      navigate({ to: '/login' });
    }
  }, [isAuthenticated, isLoading, hasInitError, isInitializing, navigate]);

  // Show error screen if initialization failed
  if (hasInitError) {
    return <InitErrorScreen />;
  }

  // Show visible loading state while actively resolving auth state
  if (isLoading || isInitializing) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show access denied if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return <AccessDeniedScreen />;
  }

  // Check if password change is required
  if (userProfile?.passwordChangeRequired) {
    const currentPath = window.location.pathname;
    if (currentPath !== '/admin/settings') {
      navigate({ to: '/admin/settings' });
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Redirecting...</p>
          </div>
        </div>
      );
    }
  }

  return <>{children}</>;
}
