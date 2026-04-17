import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b px-6 py-4">
        <span className="font-semibold text-lg">HoiDanIT Shop</span>
      </header>
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} HoiDanIT Shop
      </footer>
    </div>
  );
};
