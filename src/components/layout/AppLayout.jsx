import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ToastContainer from '../common/ToastContainer';

const viewMeta = {
  dashboard: ['Dashboard', 'Ringkasan performa sistem hari ini'],
  employees: ['Manajemen Karyawan', 'Kelola data dan informasi karyawan'],
  inventory: ['Manajemen Inventaris', 'Pantau dan kelola seluruh aset perusahaan']
};

export default function AppLayout({ activeView, onViewChange, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, subtitle] = viewMeta[activeView];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-zinc-950 transition-colors">
      <Sidebar activeView={activeView} onViewChange={onViewChange} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar onMenuClick={() => setSidebarOpen(true)} title={title} subtitle={subtitle} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">{children}</main>
      </div>
      <ToastContainer />
    </div>
  );
}
