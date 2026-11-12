import React, { useEffect, useState } from 'react';
import Modal from '../common/Modal';
import { DEPARTMENTS } from '../../data/initialData';

const empty = { name: '', email: '', position: '', department: 'Engineering', status: 'Aktif', joinDate: '' };

export default function EmployeeModal({ isOpen, onClose, onSubmit, employee }) {
  const [form, setForm] = useState(empty);
  useEffect(() => { setForm(employee ? { ...employee } : empty); }, [employee, isOpen]);
  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const handleSubmit = e => { e.preventDefault(); onSubmit(form); };
  return <Modal isOpen={isOpen} onClose={onClose} title={employee ? 'Edit Karyawan' : 'Tambah Karyawan'}><form onSubmit={handleSubmit} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2"><Field label="Nama Lengkap" required value={form.name} onChange={v => update('name', v)} placeholder="Contoh: Budi Santoso" /><Field label="Email" type="email" required value={form.email} onChange={v => update('email', v)} placeholder="nama@company.com" /><Field label="Posisi" required value={form.position} onChange={v => update('position', v)} placeholder="Contoh: Software Engineer" /><Select label="Departemen" value={form.department} onChange={v => update('department', v)} options={DEPARTMENTS.slice(1)} /><Select label="Status" value={form.status} onChange={v => update('status', v)} options={['Aktif', 'Non-aktif']} /><Field label="Tanggal Bergabung" type="date" value={form.joinDate} onChange={v => update('joinDate', v)} /></div><div className="flex justify-end gap-3 border-t border-slate-100 pt-5 dark:border-zinc-800"><button type="button" onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">Batal</button><button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">{employee ? 'Simpan Perubahan' : 'Tambah Karyawan'}</button></div></form></Modal>;
}

function Field({ label, value, onChange, type = 'text', placeholder, required }) { return <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-zinc-300">{label} {required && <em className="text-rose-500">*</em>}</span><input type={type} value={value || ''} required={required} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100" /></label>; }
function Select({ label, value, onChange, options }) { return <label className="block"><span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-zinc-300">{label}</span><select value={value} onChange={e => onChange(e.target.value)} className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100">{options.map(o => <option key={o}>{o}</option>)}</select></label>; }
