import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function SmartContractArchitecture() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Smart Contract Architecture</h1>

      <Alert className="mb-6">
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Important Notice:</strong> This page describes the planned smart contract architecture for VCoin. The
          current presale system is managed manually off-chain for security and flexibility. On-chain smart contracts
          will be deployed closer to the 2027 launch date.
        </AlertDescription>
      </Alert>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>1. Token Contract (VCN TRC-20 / ERC-20)</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>The main token contract will implement:</p>
          <ul>
            <li>Fixed total supply minted at deployment (1,000,000,000 VCN)</li>
            <li>Transfer lock mechanism until launch activation</li>
            <li>Vesting contract integration</li>
            <li>Ownership & admin control safeguards</li>
            <li>Standard ERC-20/TRC-20 interface compliance</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>2. Presale Contract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>The presale contract will handle:</p>
          <ul>
            <li>Stage-based dynamic pricing</li>
            <li>Referral reward distribution logic</li>
            <li>Purchase tracking per wallet</li>
            <li>Emergency pause & admin override</li>
            <li>USDT payment processing</li>
            <li>Automatic token allocation</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>3. Vesting Contract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>The vesting contract will manage:</p>
          <ul>
            <li>Monthly unlock scheduler</li>
            <li>Wallet-specific allocation mapping</li>
            <li>Claim function enabled post-launch</li>
            <li>Immutable vesting timeline</li>
            <li>Anti-dump protection mechanisms</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>4. Liquidity Lock Contract</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>The liquidity lock contract will provide:</p>
          <ul>
            <li>DEX liquidity time-lock</li>
            <li>Anti-rug security mechanism</li>
            <li>Transparent unlock timestamp</li>
            <li>Multi-signature requirements</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Implementation</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            The current VCoin presale platform operates as a secure Web2-style management system. All transactions are
            manually verified by administrators to ensure maximum security during the presale phase. This approach
            allows for:
          </p>
          <ul>
            <li>Flexible presale stage management</li>
            <li>Manual verification of all deposits</li>
            <li>Fraud prevention through human oversight</li>
            <li>Easy adjustment of parameters as needed</li>
          </ul>
          <p>
            Smart contracts will be developed, audited, and deployed as we approach the 2027 launch date, ensuring the
            highest level of security and functionality.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
