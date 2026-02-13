import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Shield, TrendingUp, Users, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/generated/vcoin-hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="/assets/generated/vcoin-logo.dim_512x512.png"
              alt="VCoin"
              className="h-24 w-24 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to VCoin</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join the future of Web3 with our secure, transparent, and community-driven presale ecosystem. Early
              supporters get exclusive benefits and long-term value.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/register">
                <Button size="lg">Join Presale</Button>
              </Link>
              <Link to="/whitepaper">
                <Button size="lg" variant="outline">
                  Read Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VCoin?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manual verification process ensures every transaction is legitimate and secure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Vesting Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tokens locked until 2027 launch with monthly vesting to ensure price stability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Referral Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn up to 5 levels of referral bonuses. Build your network and grow together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lock className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get tokens at presale prices starting from $0.05 before the 2027 public launch.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Presale Stages */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Presale Stages</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Stage 1</CardTitle>
                <CardDescription>Early Bird Special</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$0.05</div>
                <div className="text-sm text-muted-foreground">80,000,000 VCN</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stage 2</CardTitle>
                <CardDescription>Growth Phase</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$0.08</div>
                <div className="text-sm text-muted-foreground">70,000,000 VCN</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stage 3</CardTitle>
                <CardDescription>Final Round</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">$0.12</div>
                <div className="text-sm text-muted-foreground">50,000,000 VCN</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of early supporters in the VCoin ecosystem.</p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
