import { Outlet } from '@tanstack/react-router';
import PublicHeader from '../nav/PublicHeader';
import PublicFooter from '../nav/PublicFooter';
import { useSession } from '../../hooks/useSession';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function PublicLayout() {
  const { hasInitError } = useSession();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      {hasInitError && (
        <div className="container py-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between">
              <span>Authentication system initialization failed. Some features may be unavailable.</span>
              <Button variant="outline" size="sm" onClick={handleReload} className="ml-4">
                Reload
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
