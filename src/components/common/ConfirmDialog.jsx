import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import Modal from './Modal';

export default function ConfirmDialog({ isOpen, onClose, onConfirm, title = 'Hapus data?', message = 'Data yang dihapus tidak dapat dikembalikan.' }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Konfirmasi" size="sm">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
          <AlertTriangle size={24} />
        </div>
        <h3 className="text-base font-semibold text-slate-900 dark:text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">{message}</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">Batal</button>
          <button onClick={() => { onConfirm(); onClose(); }} className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-700">Hapus</button>
        </div>
      </div>
    </Modal>
  );
}
