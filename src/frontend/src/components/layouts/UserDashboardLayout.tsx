import { Outlet } from '@tanstack/react-router';
import { SidebarProvider } from '@/components/ui/sidebar';
import UserSidebar from '../nav/UserSidebar';
import DashboardHeader from '../nav/DashboardHeader';

export default function UserDashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <UserSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6 bg-muted/30">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
