import { ReactNode } from 'react';
import { useSession } from '../hooks/useSession';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import AccessDeniedScreen from '../components/screens/AccessDeniedScreen';
import InitErrorScreen from '../components/screens/InitErrorScreen';

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

  // Show loading only while actively resolving auth state
  if (isLoading || isInitializing) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render anything while redirecting
  if (!isAuthenticated) {
    return null;
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

  // Show loading only while actively resolving auth state
  if (isLoading || isInitializing) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
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
      return null;
    }
  }

  return <>{children}</>;
}
