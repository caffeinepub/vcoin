import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSession } from '../../hooks/useSession';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ShoppingCart, Wallet, Users } from 'lucide-react';

export default function UserHome() {
  const { userProfile } = useSession();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, {userProfile?.name}!</h1>
        <p className="text-muted-foreground">Manage your VCoin presale participation from your dashboard.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <ShoppingCart className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Buy VCoin</CardTitle>
            <CardDescription>Purchase VCN tokens at presale prices</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/user/buy">
              <Button className="w-full">Start Buying</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Wallet className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Token Balance</CardTitle>
            <CardDescription>View your locked and unlocked tokens</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/user/balance">
              <Button variant="outline" className="w-full">
                View Balance
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Referral Program</CardTitle>
            <CardDescription>Earn rewards by inviting others</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/user/referrals">
              <Button variant="outline" className="w-full">
                View Referrals
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Referral Code</CardTitle>
          <CardDescription>Share this code to earn referral bonuses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <code className="flex-1 bg-muted px-4 py-2 rounded text-lg font-mono">
              {userProfile?.referralCode || 'Loading...'}
            </code>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(userProfile?.referralCode || '');
              }}
            >
              Copy Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
