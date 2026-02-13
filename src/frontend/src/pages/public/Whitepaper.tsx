import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Whitepaper() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">VCoin Whitepaper</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            <strong>Project Name:</strong> VCoin
          </p>
          <p>
            <strong>Symbol:</strong> VCN
          </p>
          <p>
            <strong>Total Supply:</strong> 1,000,000,000 VCN
          </p>
          <p>
            <strong>Official Launch Target:</strong> 2027
          </p>
          <p>
            VCoin is a long-term Web3 utility-driven ecosystem token focused on early community participation,
            transparent multi-level referral rewards, vesting-based token stability, and secure post-launch liquidity.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Vision & Mission</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <h3>Vision</h3>
          <p>
            To build a secure, transparent, community-governed Web3 reward ecosystem at a global level where early
            supporters receive sustainable long-term value.
          </p>
          <h3>Mission</h3>
          <ul>
            <li>Enable low-entry presale participation</li>
            <li>Build a strong international community</li>
            <li>Maintain dump prevention & price stability through vesting mechanisms</li>
            <li>Deploy a full-scale Web3 utility platform by 2030</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Token Economics</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <h3>Total Supply: 1,000,000,000 VCN</h3>
          <h3>Allocation Distribution</h3>
          <ul>
            <li>Presale → 20% (200,000,000 VCN)</li>
            <li>Ecosystem Rewards → 25%</li>
            <li>Liquidity → 15%</li>
            <li>Team → 10%</li>
            <li>Marketing → 20%</li>
            <li>Reserve → 10%</li>
          </ul>
          <h3>Presale Structure</h3>
          <ul>
            <li>
              <strong>Stage 1:</strong> $0.05 per VCN - 80M VCN available
            </li>
            <li>
              <strong>Stage 2:</strong> $0.08 per VCN - 70M VCN available
            </li>
            <li>
              <strong>Stage 3:</strong> $0.12 per VCN - 50M VCN available
            </li>
          </ul>
          <p>
            <strong>Projected Launch Range (2027):</strong> $0.50 – $1.00 (market-dependent, not guaranteed)
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Referral & MLM Reward Model</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <h3>Direct Referral</h3>
          <p>Users earn 10% extra VCN tokens on every direct referral purchase.</p>
          <h3>Multi-Level Rewards (5 Levels)</h3>
          <ul>
            <li>Level 1 → 10%</li>
            <li>Level 2 → 5%</li>
            <li>Level 3 → 1%</li>
            <li>Level 4 → 0.5%</li>
            <li>Level 5 → 0.5%</li>
          </ul>
          <h3>Reward Conditions</h3>
          <ul>
            <li>Rewards are distributed in VCN tokens</li>
            <li>Fully locked until 2027 launch</li>
            <li>Monthly vesting unlock after launch</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Token Lock & Vesting Logic</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <h3>Pre-Launch Phase (2025-2027)</h3>
          <ul>
            <li>Withdrawal → Disabled</li>
            <li>Transfer → Disabled</li>
            <li>Selling → Disabled</li>
            <li>Dashboard balance → Visible but locked</li>
          </ul>
          <h3>Post-Launch Phase (2027)</h3>
          <ul>
            <li>Monthly vesting release</li>
            <li>Anti-dump protection</li>
            <li>Liquidity stability support</li>
            <li>Investor protection model</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Security & Transparency</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <ul>
            <li>Manual verification of all deposits</li>
            <li>Locked liquidity after launch</li>
            <li>Vesting-controlled circulating supply</li>
            <li>Community governance roadmap</li>
            <li>Third-party smart contract audit (planned)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Legal & Risk Disclosure</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            VCoin is a utility-focused Web3 project in development stage. The cryptocurrency market is volatile. Users
            should have a clear understanding of their risk before participating. This is not financial advice. Please
            do your own research.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
