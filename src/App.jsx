import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Dashboard from './components/dashboard/Dashboard';
import Employees from './components/management/Employees';
import Inventory from './components/management/Inventory';
import Login from './components/auth/Login';
import ToastContainer from './components/common/Toast';

function ProtectedApp() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const views = { dashboard: <Dashboard setActiveView={setActiveView} />, employees: <Employees />, inventory: <Inventory /> };
  return <div className="flex min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-zinc-950 dark:text-zinc-100"><Sidebar activeView={activeView} setActiveView={setActiveView} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} /><div className="flex min-w-0 flex-1 flex-col"><Topbar onMenuClick={() => setSidebarOpen(true)} /><main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8"><div className="mx-auto max-w-[1440px]">{views[activeView]}</div></main><footer className="border-t border-slate-200 bg-white px-6 py-3 text-center text-xs text-slate-400 dark:border-zinc-800 dark:bg-zinc-900">Nexora Enterprise Platform <span className="mx-1">•</span> v1.0.0</footer></div><ToastContainer /></div>;
}

export default function App() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <ProtectedApp /> : <Login />;
}
