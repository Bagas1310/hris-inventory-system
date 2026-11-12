import React from 'react';
import { LayoutDashboard, Users, Package, X, ShieldCheck } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'employees', label: 'Karyawan', icon: Users },
  { id: 'inventory', label: 'Inventaris', icon: Package }
];

export default function Sidebar({ activeView, onViewChange, isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-slate-900/40 z-30 lg:hidden" onClick={onClose} />}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-zinc-900 border-r border-slate-200 dark:border-zinc-800 flex flex-col transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-sm"><ShieldCheck className="w-5 h-5" /></div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-zinc-100">NEXUS<span className="font-normal text-indigo-600">.HRIS</span></span>
          </div>
          <button onClick={onClose} className="lg:hidden text-slate-400"><X className="w-5 h-5" /></button>
        </div>
        <nav className="p-4 flex-1">
          <p className="px-3 mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">Menu Utama</p>
          <div className="space-y-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => { onViewChange(id); onClose(); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all ${activeView === id ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:text-slate-700 dark:hover:text-zinc-200'}`}>
                <Icon className={`w-[18px] h-[18px] ${activeView === id ? 'text-indigo-600 dark:text-indigo-400' : ''}`} />
                {label}
              </button>
            ))}
          </div>
        </nav>
        <div className="p-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/70 border border-slate-100 dark:border-zinc-800">
            <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300">Butuh bantuan?</p>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500 mt-1 leading-relaxed">Hubungi tim support kami jika Anda mengalami kendala.</p>
            <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-3 hover:underline">Hubungi Support →</button>
          </div>
        </div>
      </aside>
    </>
  );
}
