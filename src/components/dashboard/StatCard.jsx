import React from 'react';
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';

export default function StatCard({ title, value, subtitle, icon: Icon, iconClass = 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400', trend, trendLabel, progress }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5 hover:shadow-md hover:shadow-slate-200/40 dark:hover:shadow-black/20 transition-shadow">
      <div className="flex justify-between items-start">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconClass}`}><Icon className="w-5 h-5" /></div>
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300"><MoreHorizontal className="w-5 h-5" /></button>
      </div>
      <div className="mt-5"><p className="text-xs font-medium text-slate-500 dark:text-zinc-500">{title}</p><p className="text-2xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 mt-1">{value}</p></div>
      {progress ? <div className="mt-4"><div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5"><span>{progress.label}</span><span>{progress.value}%</span></div><div className="h-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden"><div className="h-full rounded-full bg-indigo-500" style={{ width: `${progress.value}%` }} /></div></div> : <div className="mt-4 flex items-center gap-1.5 text-xs"><span className={`inline-flex items-center gap-0.5 font-semibold ${trend >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{trend >= 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}{Math.abs(trend)}%</span><span className="text-slate-400">{trendLabel}</span></div>}
    </div>
  );
}
