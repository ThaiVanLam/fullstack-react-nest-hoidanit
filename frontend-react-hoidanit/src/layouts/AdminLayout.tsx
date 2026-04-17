import { Outlet } from 'react-router';

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r bg-gray-50 px-4 py-6">
        <span className="font-semibold">Admin Panel</span>
      </aside>
      <main className="flex-1 px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
};
