import { ReactNode } from 'react';
import { useSession } from '../hooks/useSession';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import AccessDeniedScreen from '../components/screens/AccessDeniedScreen';

export function UserGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: '/login' });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}

export function AdminGuard({ children }: { children: ReactNode }) {
  const { isAuthenticated, isAdmin, isLoading, userProfile } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: '/login' });
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

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
