import React, { useMemo, useState } from 'react';
import { Plus, Search, Filter, Users, Download } from 'lucide-react';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { DEPARTMENTS } from '../../data/initialData';
import Modal from '../common/Modal';
import ConfirmDialog from '../common/ConfirmDialog';
import Pagination from '../common/Pagination';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';

const LIMIT = 5;
export default function EmployeesPage() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useAppData(); const { showToast } = useToast();
  const [query, setQuery] = useState(''); const [department, setDepartment] = useState(DEPARTMENTS[0]); const [page, setPage] = useState(1); const [modal, setModal] = useState(false); const [editing, setEditing] = useState(null); const [deleting, setDeleting] = useState(null);
  const filtered = useMemo(() => employees.filter(e => { const search = `${e.nama} ${e.email} ${e.posisi}`.toLowerCase().includes(query.toLowerCase()); return search && (department === DEPARTMENTS[0] || e.departemen === department); }), [employees, query, department]);
  const pages = Math.ceil(filtered.length / LIMIT) || 1; const current = filtered.slice((page - 1) * LIMIT, page * LIMIT);
  const openAdd = () => { setEditing(null); setModal(true); }; const openEdit = (item) => { setEditing(item); setModal(true); };
  const save = (data) => { editing ? (updateEmployee(editing.id, data), showToast('Data karyawan berhasil diperbarui.')) : (addEmployee(data), showToast('Karyawan baru berhasil ditambahkan.')); setModal(false); };
  const confirmDelete = () => { deleteEmployee(deleting.id); showToast('Data karyawan berhasil dihapus.', 'info'); setDeleting(null); };
  return <div className="max-w-[1600px] mx-auto space-y-5"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h2 className="text-xl font-bold text-slate-800 dark:text-zinc-100">Daftar Karyawan</h2><p className="text-sm text-slate-400 mt-1">Total {employees.length} karyawan terdaftar di sistem.</p></div><button onClick={openAdd} className="btn-primary"><Plus className="w-4 h-4" /> Tambah Karyawan</button></div><div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-zinc-800"><div className="p-4 flex flex-col sm:flex-row gap-3 justify-between border-b border-slate-100 dark:border-zinc-800"><div className="relative flex-1 max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder="Cari nama, email, atau posisi..." className="search-input" /></div><div className="flex gap-2"><div className="relative"><Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><select value={department} onChange={e => { setDepartment(e.target.value); setPage(1); }} className="filter-select pl-9">{DEPARTMENTS.map(d => <option key={d}>{d}</option>)}</select></div><button className="hidden sm:flex items-center gap-2 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800"><Download className="w-4 h-4" /> Export</button></div></div><EmployeeTable employees={current} onEdit={openEdit} onDelete={setDeleting} /><div className="p-4 flex items-center justify-between border-t border-slate-100 dark:border-zinc-800"><p className="text-xs text-slate-400">Menampilkan <span className="font-semibold text-slate-600 dark:text-zinc-300">{filtered.length ? (page - 1) * LIMIT + 1 : 0}-{Math.min(page * LIMIT, filtered.length)}</span> dari {filtered.length} data</p><Pagination currentPage={page} totalPages={pages} onPageChange={setPage} /></div></div><Modal isOpen={modal} onClose={() => setModal(false)} title={editing ? 'Edit Data Karyawan' : 'Tambah Karyawan'}><EmployeeForm employee={editing} onSubmit={save} onCancel={() => setModal(false)} /></Modal><ConfirmDialog isOpen={!!deleting} onClose={() => setDeleting(null)} onConfirm={confirmDelete} message={`Data ${deleting?.nama || 'karyawan'} akan dihapus permanen.`} /></div>;
}
