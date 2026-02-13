import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Roadmap() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">VCoin Roadmap (2025-2030)</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2025 — Foundation Phase</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ul>
              <li>Website launch</li>
              <li>Community onboarding</li>
              <li>Private presale activation</li>
              <li>Initial marketing campaigns</li>
              <li>Social media presence establishment</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2026 — Development Phase</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ul>
              <li>Smart contract engineering</li>
              <li>Security testing & audits</li>
              <li>Strategic partnerships</li>
              <li>Community growth initiatives</li>
              <li>Beta testing of core features</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2027 — Official Launch</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ul>
              <li>Token Generation Event (TGE)</li>
              <li>DEX liquidity deployment</li>
              <li>Vesting unlock initiation</li>
              <li>Public trading begins</li>
              <li>Major marketing push</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2028 — Expansion</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ul>
              <li>Mobile Web3 reward application</li>
              <li>Global marketing scale</li>
              <li>Additional exchange listings</li>
              <li>Partnership expansions</li>
              <li>Community events and rewards</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2029 — Utility Growth</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ul>
              <li>DeFi staking & earning pools</li>
              <li>Major exchange listings</li>
              <li>NFT ecosystem integration</li>
              <li>Cross-chain bridge development</li>
              <li>Enhanced utility features</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2030 — Full Ecosystem</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm dark:prose-invert max-w-none">
            <ul>
              <li>DAO governance activation</li>
              <li>Real-world integrations</li>
              <li>Complete Web3 platform maturity</li>
              <li>Global adoption initiatives</li>
              <li>Long-term sustainability measures</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
