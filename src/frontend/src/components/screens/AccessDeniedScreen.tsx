import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';

export default function AccessDeniedScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-md px-6">
        <ShieldAlert className="w-20 h-20 text-destructive mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-muted-foreground mb-8">
          You don't have permission to access this area. Please log in with the appropriate credentials.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate({ to: '/login' })}>Go to Login</Button>
          <Button variant="outline" onClick={() => navigate({ to: '/' })}>
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
