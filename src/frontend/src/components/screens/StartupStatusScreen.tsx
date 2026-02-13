import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle } from 'lucide-react';

interface StartupStatusScreenProps {
  variant: 'loading' | 'error';
}

export default function StartupStatusScreen({ variant }: StartupStatusScreenProps) {
  const handleReload = () => {
    window.location.reload();
  };

  if (variant === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-lg text-foreground">Loading VCoin...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center max-w-md px-6">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Unable to Start</h2>
        <p className="text-muted-foreground mb-8">
          The application could not initialize properly. Please reload the page to try again.
        </p>
        <Button size="lg" onClick={handleReload}>
          Reload Page
        </Button>
      </div>
    </div>
  );
}
