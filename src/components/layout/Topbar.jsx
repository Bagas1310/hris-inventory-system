import React, { useState } from 'react';
import { Menu, Sun, Moon, Bell, ChevronDown, LogOut, User, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

export default function Topbar({ onMenuClick, title, subtitle }) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="h-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg"><Menu className="w-5 h-5" /></button>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-800 dark:text-zinc-100">{title}</h1>
          {subtitle && <p className="hidden sm:block text-xs text-slate-400 dark:text-zinc-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="hidden sm:flex p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-xl transition-colors"><Search className="w-[18px] h-[18px]" /></button>
        <button onClick={toggleTheme} className="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-xl transition-colors" aria-label="Toggle tema">{theme === 'dark' ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}</button>
        <button className="relative p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-xl transition-colors"><Bell className="w-[18px] h-[18px]" /><span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full ring-2 ring-white dark:ring-zinc-900" /></button>
        <div className="h-8 w-px bg-slate-200 dark:bg-zinc-800 mx-1" />
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
            <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-lg object-cover" />
            <div className="hidden md:block text-left"><p className="text-xs font-bold text-slate-700 dark:text-zinc-200">{user?.name}</p><p className="text-[10px] text-slate-400 dark:text-zinc-500 mt-0.5">{user?.role}</p></div>
            <ChevronDown className="hidden md:block w-4 h-4 text-slate-400" />
          </button>
          {profileOpen && <><div className="fixed inset-0 z-10" onClick={() => setProfileOpen(false)} /><div className="absolute right-0 top-12 z-20 w-48 py-1 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl shadow-lg"><button className="w-full flex gap-2 items-center px-3 py-2.5 text-sm text-slate-600 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800"><User className="w-4 h-4" /> Profil Saya</button><button onClick={logout} className="w-full flex gap-2 items-center px-3 py-2.5 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"><LogOut className="w-4 h-4" /> Keluar</button></div></>}
        </div>
      </div>
    </header>
  );
}
