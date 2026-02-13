import { Outlet } from '@tanstack/react-router';
import PublicHeader from '../nav/PublicHeader';
import PublicFooter from '../nav/PublicFooter';

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
