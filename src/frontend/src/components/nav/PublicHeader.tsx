import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/generated/vcoin-logo.dim_512x512.png" alt="VCoin" className="h-10 w-10" />
          <span className="text-2xl font-bold">VCoin</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/whitepaper" className="text-sm font-medium hover:text-primary transition-colors">
            Whitepaper
          </Link>
          <Link to="/smart-contract" className="text-sm font-medium hover:text-primary transition-colors">
            Smart Contract
          </Link>
          <Link to="/roadmap" className="text-sm font-medium hover:text-primary transition-colors">
            Roadmap
          </Link>
          <Link to="/login">
            <Button>Get Started</Button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-3">
          <Link
            to="/whitepaper"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Whitepaper
          </Link>
          <Link
            to="/smart-contract"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Smart Contract
          </Link>
          <Link
            to="/roadmap"
            className="block text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Roadmap
          </Link>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
