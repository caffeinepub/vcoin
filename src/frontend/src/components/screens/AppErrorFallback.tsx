import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function AppErrorFallback() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-md px-6">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Something Went Wrong</h2>
        <p className="text-muted-foreground mb-8">
          We encountered an unexpected error. Please try reloading the page.
        </p>
        <Button size="lg" onClick={handleReload}>
          Reload Page
        </Button>
      </div>
    </div>
  );
}
