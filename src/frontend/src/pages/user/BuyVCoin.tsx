import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useGetPresaleStage, useGetWalletAddress, useCreateDepositIntent } from '../../hooks/useQueries';
import { Loader2, Copy, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from '@tanstack/react-router';

export default function BuyVCoin() {
  const { data: stageData, isLoading: stageLoading } = useGetPresaleStage();
  const { data: walletAddress, isLoading: walletLoading } = useGetWalletAddress();
  const createIntent = useCreateDepositIntent();
  const navigate = useNavigate();

  const [vcnAmount, setVcnAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('0.00');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (stageData && vcnAmount) {
      const amount = parseFloat(vcnAmount);
      if (!isNaN(amount) && amount > 0) {
        const usdt = amount * stageData.price;
        setUsdtAmount(usdt.toFixed(2));
      } else {
        setUsdtAmount('0.00');
      }
    }
  }, [vcnAmount, stageData]);

  const handleCopyAddress = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      toast.success('Wallet address copied!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleProceed = async () => {
    const amount = parseFloat(vcnAmount);
    if (!amount || amount <= 0) {
      toast.error('Please enter a valid VCN amount');
      return;
    }

    if (!stageData) {
      toast.error('Presale stage data not available');
      return;
    }

    const remaining = Number(stageData.remainingSupply);
    if (amount > remaining) {
      toast.error(`Only ${remaining.toLocaleString()} VCN remaining in this stage`);
      return;
    }

    try {
      const intent = JSON.stringify({
        vcnAmount: amount,
        usdtAmount: parseFloat(usdtAmount),
        price: stageData.price,
        stage: Number(stageData.stage),
        timestamp: Date.now(),
      });

      await createIntent.mutateAsync(intent);
      toast.success('Purchase intent created! Please submit your payment proof.');
      navigate({ to: '/user/deposits' });
    } catch (error) {
      console.error('Error creating intent:', error);
      toast.error('Failed to create purchase intent');
    }
  };

  if (stageLoading || walletLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Buy VCoin</h1>
        <p className="text-muted-foreground">Purchase VCN tokens at current presale prices</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Presale Stage</CardTitle>
          <CardDescription>Stage {stageData ? Number(stageData.stage) : '-'}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Price per VCN</div>
              <div className="text-2xl font-bold">${stageData?.price.toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Remaining Supply</div>
              <div className="text-2xl font-bold">
                {stageData ? Number(stageData.remainingSupply).toLocaleString() : '-'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calculate Your Purchase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vcnAmount">VCN Amount</Label>
            <Input
              id="vcnAmount"
              type="number"
              value={vcnAmount}
              onChange={(e) => setVcnAmount(e.target.value)}
              placeholder="Enter VCN amount"
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label>USDT Required</Label>
            <div className="text-3xl font-bold text-primary">${usdtAmount}</div>
          </div>

          <Alert>
            <AlertDescription>
              You will need to send exactly <strong>${usdtAmount} USDT</strong> to the wallet address below.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Address</CardTitle>
          <CardDescription>Send USDT (TRC-20) to this address</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <code className="flex-1 bg-muted px-4 py-3 rounded text-sm break-all">
              {walletAddress || 'Loading...'}
            </code>
            <Button onClick={handleCopyAddress} size="icon" variant="outline">
              {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>

          <Alert>
            <AlertDescription className="text-xs">
              After sending the payment, you will need to submit your transaction hash and payment screenshot for
              verification.
            </AlertDescription>
          </Alert>

          <Button onClick={handleProceed} disabled={createIntent.isPending || !vcnAmount} className="w-full" size="lg">
            {createIntent.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Proceed to Payment Submission'
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
