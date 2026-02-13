import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lock, Unlock } from 'lucide-react';

export default function TokenBalance() {
  // Mock data - in real implementation, fetch from backend
  const lockedBalance = 0;
  const unlockedBalance = 0;
  const totalBalance = lockedBalance + unlockedBalance;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Token Balance</h1>
        <p className="text-muted-foreground">View your VCN token holdings</p>
      </div>

      <Alert>
        <Lock className="h-4 w-4" />
        <AlertDescription>
          All tokens purchased during the presale are locked until the official launch in 2027. After launch, tokens
          will unlock monthly according to the vesting schedule.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Total Balance</CardDescription>
            <CardTitle className="text-3xl">{totalBalance.toLocaleString()} VCN</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <Lock className="h-5 w-5 text-muted-foreground mb-2" />
            <CardDescription>Locked Tokens</CardDescription>
            <CardTitle className="text-3xl">{lockedBalance.toLocaleString()} VCN</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Locked until 2027 launch</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Unlock className="h-5 w-5 text-muted-foreground mb-2" />
            <CardDescription>Unlocked Tokens</CardDescription>
            <CardTitle className="text-3xl">{unlockedBalance.toLocaleString()} VCN</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Available after launch</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
