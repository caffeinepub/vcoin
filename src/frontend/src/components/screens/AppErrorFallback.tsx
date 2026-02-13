import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function AppErrorFallback() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="text-muted-foreground">
            We encountered an unexpected error. Please try reloading the page.
          </p>
        </div>

        <Button onClick={handleReload} size="lg" className="w-full">
          Reload Page
        </Button>
      </div>
    </div>
  );
}
