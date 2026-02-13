import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import PublicLayout from './components/layouts/PublicLayout';
import UserDashboardLayout from './components/layouts/UserDashboardLayout';
import AdminDashboardLayout from './components/layouts/AdminDashboardLayout';
import Home from './pages/public/Home';
import Whitepaper from './pages/public/Whitepaper';
import SmartContractArchitecture from './pages/public/SmartContractArchitecture';
import Roadmap from './pages/public/Roadmap';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UserHome from './pages/user/UserHome';
import BuyVCoin from './pages/user/BuyVCoin';
import DepositHistory from './pages/user/DepositHistory';
import TokenBalance from './pages/user/TokenBalance';
import VestingProgress from './pages/user/VestingProgress';
import ReferralEarnings from './pages/user/ReferralEarnings';
import ReferralNetworkTree from './pages/user/ReferralNetworkTree';
import AdminHome from './pages/admin/AdminHome';
import DepositsQueue from './pages/admin/DepositsQueue';
import UsersManagement from './pages/admin/UsersManagement';
import AdminSettings from './pages/admin/AdminSettings';
import Announcements from './pages/admin/Announcements';
import { UserGuard, AdminGuard } from './routes/routeGuards';

const rootRoute = createRootRoute({
  component: () => (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </ThemeProvider>
  ),
});

// Public routes
const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: PublicLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/',
  component: Home,
});

const whitepaperRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/whitepaper',
  component: Whitepaper,
});

const smartContractRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/smart-contract',
  component: SmartContractArchitecture,
});

const roadmapRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/roadmap',
  component: Roadmap,
});

// Auth routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: Register,
});

// User dashboard routes
const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/user',
  component: () => (
    <UserGuard>
      <UserDashboardLayout />
    </UserGuard>
  ),
});

const userHomeRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/',
  component: UserHome,
});

const buyVCoinRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/buy',
  component: BuyVCoin,
});

const depositHistoryRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/deposits',
  component: DepositHistory,
});

const tokenBalanceRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/balance',
  component: TokenBalance,
});

const vestingProgressRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/vesting',
  component: VestingProgress,
});

const referralEarningsRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/referrals',
  component: ReferralEarnings,
});

const referralTreeRoute = createRoute({
  getParentRoute: () => userRoute,
  path: '/referral-tree',
  component: ReferralNetworkTree,
});

// Admin dashboard routes
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: () => (
    <AdminGuard>
      <AdminDashboardLayout />
    </AdminGuard>
  ),
});

const adminHomeRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/',
  component: AdminHome,
});

const depositsQueueRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/deposits',
  component: DepositsQueue,
});

const usersManagementRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/users',
  component: UsersManagement,
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/settings',
  component: AdminSettings,
});

const announcementsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/announcements',
  component: Announcements,
});

const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([homeRoute, whitepaperRoute, smartContractRoute, roadmapRoute]),
  loginRoute,
  registerRoute,
  userRoute.addChildren([
    userHomeRoute,
    buyVCoinRoute,
    depositHistoryRoute,
    tokenBalanceRoute,
    vestingProgressRoute,
    referralEarningsRoute,
    referralTreeRoute,
  ]),
  adminRoute.addChildren([
    adminHomeRoute,
    depositsQueueRoute,
    usersManagementRoute,
    adminSettingsRoute,
    announcementsRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
