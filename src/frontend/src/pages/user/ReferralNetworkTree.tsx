import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Network } from 'lucide-react';

export default function ReferralNetworkTree() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Referral Network Tree</h1>
        <p className="text-muted-foreground">Visualize your referral network up to 5 levels</p>
      </div>

      <Alert>
        <Network className="h-4 w-4" />
        <AlertDescription>
          Your referral network shows all users who joined using your referral code, up to 5 levels deep. Each level
          earns you a percentage of their purchases.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Your Network</CardTitle>
          <CardDescription>Expand levels to see your downline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Network className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No referrals yet.</p>
            <p className="text-sm mt-2">Share your referral code to start building your network!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
