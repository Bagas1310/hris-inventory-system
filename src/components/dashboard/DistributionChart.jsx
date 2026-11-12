import React from 'react';
import { PieChart, ArrowRight } from 'lucide-react';

export default function DistributionChart({ employees, inventory }) {
  const departments = [...new Set(employees.map(e => e.departemen))];
  const total = employees.length || 1;
  const colors = ['bg-indigo-500', 'bg-blue-400', 'bg-violet-400', 'bg-cyan-400', 'bg-amber-400', 'bg-emerald-400'];

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800 p-5">
      <div className="flex items-center justify-between mb-5"><div><h3 className="font-bold text-sm text-slate-800 dark:text-zinc-100">Distribusi Karyawan</h3><p className="text-xs text-slate-400 mt-1">Berdasarkan departemen</p></div><div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center"><PieChart className="w-4 h-4" /></div></div>
      <div className="space-y-4">{departments.map((dept, index) => { const count = employees.filter(e => e.departemen === dept).length; const percentage = Math.round((count / total) * 100); return <div key={dept}><div className="flex justify-between text-xs mb-1.5"><span className="font-medium text-slate-600 dark:text-zinc-300">{dept}</span><span className="text-slate-400">{count} orang</span></div><div className="h-2 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden"><div className={`h-full rounded-full ${colors[index % colors.length]}`} style={{ width: `${percentage}%` }} /></div></div>; })}</div>
      <button className="mt-6 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">Lihat laporan lengkap <ArrowRight className="w-3 h-3" /></button>
    </div>
  );
}
