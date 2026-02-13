import { Outlet } from '@tanstack/react-router';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../nav/AdminSidebar';
import DashboardHeader from '../nav/DashboardHeader';

export default function AdminDashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
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
