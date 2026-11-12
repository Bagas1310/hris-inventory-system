import React from 'react';

const statusStyles = {
  Aktif: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800',
  'Non-aktif': 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700',
  Tersedia: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800',
  Menipis: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800',
  Habis: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800'
};

export default function Badge({ children, dot = false }) {
  const style = statusStyles[children] || 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700';
  const dotStyle = ['Aktif', 'Tersedia'].includes(children) ? 'bg-emerald-500' : children === 'Menipis' ? 'bg-amber-500' : children === 'Habis' ? 'bg-rose-500' : 'bg-slate-400';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${style}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotStyle}`} />}
      {children}
    </span>
  );
}
