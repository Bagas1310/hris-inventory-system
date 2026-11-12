import React from 'react';
import { Package, UserPlus, AlertTriangle, UserRound, ArrowRight } from 'lucide-react';

const typeMap = {
  inventory: { icon: Package, color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400' },
  employee: { icon: UserPlus, color: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400' },
  alert: { icon: AlertTriangle, color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400' },
  info: { icon: UserRound, color: 'bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400' }
};

export default function ActivityFeed({ activities }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5">
      <div className="flex items-center justify-between mb-5"><div><h3 className="font-bold text-sm text-slate-800 dark:text-zinc-100">Aktivitas Terbaru</h3><p className="text-xs text-slate-400 mt-1">Pembaruan terbaru dari sistem</p></div><button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">Lihat semua <ArrowRight className="w-3 h-3" /></button></div>
      <div className="space-y-5">
        {activities.slice(0, 5).map((activity) => { const item = typeMap[activity.tipe] || typeMap.info; const Icon = item.icon; return <div key={activity.id} className="flex gap-3"><div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}><Icon className="w-4 h-4" /></div><div className="min-w-0"><p className="text-xs font-medium text-slate-700 dark:text-zinc-300 leading-relaxed">{activity.deskripsi}</p><p className="text-[10px] text-slate-400 mt-1">{activity.waktu}</p></div></div>; })}
      </div>
    </div>
  );
}
