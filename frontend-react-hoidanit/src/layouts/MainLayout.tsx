import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - add <Header /> here when shared/components/layout is built */}
      <header className="border-b border-gray-200 px-4 py-3">
        <div className="mx-auto max-w-7xl">
          <span className="font-bold text-gray-900">HoiDanIT Shop</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>

      {/* Footer - add <Footer /> here when built */}
    </div>
  );
};
