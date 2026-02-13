import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar } from 'lucide-react';

export default function VestingProgress() {
  const launchYear = 2027;
  const currentYear = new Date().getFullYear();
  const isPreLaunch = currentYear < launchYear;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Vesting Progress</h1>
        <p className="text-muted-foreground">Track your token unlock schedule</p>
      </div>

      <Alert>
        <Calendar className="h-4 w-4" />
        <AlertDescription>
          {isPreLaunch ? (
            <>
              Token vesting will begin after the official launch in <strong>{launchYear}</strong>. Tokens will unlock
              monthly over a predetermined period to ensure price stability and prevent market dumps.
            </>
          ) : (
            <>Vesting is now active. Check your monthly unlock schedule below.</>
          )}
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Vesting Schedule</CardTitle>
          <CardDescription>
            {isPreLaunch
              ? `Vesting will start in ${launchYear}`
              : 'Your monthly token unlock schedule'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isPreLaunch ? (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Vesting schedule will be available after the {launchYear} launch.</p>
              <p className="text-sm mt-2">All tokens remain locked until then.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Your tokens will unlock monthly starting from the launch date. The exact schedule will be calculated
                based on your total holdings and the configured vesting parameters.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
