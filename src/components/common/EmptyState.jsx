import React from 'react';
import { SearchX } from 'lucide-react';

export default function EmptyState({ title = 'Tidak ada data ditemukan', description = 'Coba ubah kata kunci atau filter pencarian Anda.' }) {
  return (
    <div className="py-16 text-center">
      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4 text-slate-400 dark:text-zinc-500">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="text-sm font-semibold text-slate-700 dark:text-zinc-200">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-zinc-500 mt-1">{description}</p>
    </div>
  );
}
