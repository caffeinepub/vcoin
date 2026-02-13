import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllUsers } from '../../hooks/useQueries';
import { Users, Coins, DollarSign, Clock } from 'lucide-react';

export default function AdminHome() {
  const { data: users } = useGetAllUsers();

  const totalUsers = users?.length || 0;
  const totalTokensSold = 0; // Calculate from approved deposits
  const totalUSDTCollected = 0; // Calculate from approved deposits
  const pendingVerifications = 0; // Count pending deposits

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of VCoin presale metrics</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">Registered accounts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tokens Sold</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTokensSold.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">VCN tokens</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">USDT Collected</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalUSDTCollected.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">From approved deposits</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Verifications</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingVerifications}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Presale Stage</CardTitle>
          <CardDescription>Active stage configuration</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Stage</div>
              <div className="text-2xl font-bold">1</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Price</div>
              <div className="text-2xl font-bold">$0.05</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Remaining</div>
              <div className="text-2xl font-bold">80M</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
