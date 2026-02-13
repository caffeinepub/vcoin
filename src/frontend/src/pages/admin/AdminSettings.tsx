import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Settings</h1>
        <p className="text-muted-foreground">Configure presale parameters and system settings</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Settings changes will take effect immediately and be reflected across the platform.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Presale Configuration</CardTitle>
          <CardDescription>Manage presale stages and pricing</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Presale configuration controls coming soon.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Wallet Address</CardTitle>
          <CardDescription>Update the USDT receiving address</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Wallet address management coming soon.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vesting Configuration</CardTitle>
          <CardDescription>Configure launch date and vesting parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Vesting configuration coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
