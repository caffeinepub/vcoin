import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from '../../hooks/useSession';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

export default function ReferralEarnings() {
  const { userProfile } = useSession();

  const handleCopyCode = () => {
    if (userProfile?.referralCode) {
      navigator.clipboard.writeText(userProfile.referralCode);
      toast.success('Referral code copied!');
    }
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/register?ref=${userProfile?.referralCode}`;
    navigator.clipboard.writeText(link);
    toast.success('Referral link copied!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Referral Earnings</h1>
        <p className="text-muted-foreground">Track your referral rewards and share your code</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Referral Code</CardTitle>
          <CardDescription>Share this code to earn up to 5 levels of rewards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-muted px-4 py-3 rounded text-lg font-mono">
              {userProfile?.referralCode || 'Loading...'}
            </code>
            <Button onClick={handleCopyCode} size="icon" variant="outline">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <Button onClick={handleCopyLink} variant="outline" className="w-full">
            Copy Referral Link
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Referral Rewards Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span className="font-medium">Direct Referral Bonus</span>
              <span className="text-primary font-bold">+10% VCN</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span>Level 1 (Direct)</span>
              <span className="font-bold">10%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span>Level 2</span>
              <span className="font-bold">5%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span>Level 3</span>
              <span className="font-bold">1%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span>Level 4</span>
              <span className="font-bold">0.5%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <span>Level 5</span>
              <span className="font-bold">0.5%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Earnings</CardTitle>
          <CardDescription>Your accumulated referral rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-4xl font-bold mb-2">0 VCN</div>
            <p className="text-sm text-muted-foreground">
              Start referring friends to earn rewards!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
