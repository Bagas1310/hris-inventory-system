import React from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const iconMap = {
  success: <CheckCircle2 size={19} className="text-emerald-500" />,
  error: <AlertCircle size={19} className="text-rose-500" />,
  warning: <AlertTriangle size={19} className="text-amber-500" />,
  info: <Info size={19} className="text-indigo-500" />,
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex w-[calc(100%-2.5rem)] max-w-sm flex-col gap-3">
      {toasts.map(toast => (
        <div key={toast.id} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5 animate-in slide-in-from-right-4 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="mt-0.5">{iconMap[toast.type] || iconMap.info}</span>
          <p className="flex-1 text-sm font-medium text-slate-700 dark:text-zinc-200">{toast.message}</p>
          <button onClick={() => removeToast(toast.id)} className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"><X size={16} /></button>
        </div>
      ))}
    </div>
  );
}
