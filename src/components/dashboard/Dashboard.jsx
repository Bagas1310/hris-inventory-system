import React from 'react';
import { Users, Package, AlertTriangle, WalletCards, ArrowRight, Clock3 } from 'lucide-react';
import { useAppData } from '../../context/AppDataContext';
import StatCard from './StatCard';
import ActivityFeed from './ActivityFeed';
import DistributionChart from './DistributionChart';

const formatCurrency = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

export default function Dashboard({ onViewChange }) {
  const { employees, inventory, activities, stats } = useAppData();
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3"><div><p className="text-sm text-slate-500 dark:text-zinc-400">Selamat pagi, Alex! 👋</p><h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 mt-1">Ringkasan Operasional</h2></div><div className="flex items-center gap-2 text-xs text-slate-400 dark:text-zinc-500"><Clock3 className="w-4 h-4" /> Terakhir diperbarui: baru saja</div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"><StatCard title="Total Karyawan" value={stats.totalEmployees} icon={Users} trend={12.5} trendLabel="dari bulan lalu" progress={{ label: `${stats.activeEmployees} aktif`, value: Math.round((stats.activeEmployees / (stats.totalEmployees || 1)) * 100) }} /><StatCard title="Total Barang" value={`${stats.totalBarang} unit`} icon={Package} iconClass="bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400" trend={8.2} trendLabel="dari bulan lalu" progress={{ label: `${stats.totalSkus} SKU terdaftar`, value: 78 }} /><StatCard title="Stok Menipis" value={`${stats.stokMenipisCount} item`} icon={AlertTriangle} iconClass="bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400" trend={-4.1} trendLabel="dari minggu lalu" progress={{ label: `${stats.stokHabisCount} stok habis`, value: Math.min(stats.stokMenipisCount * 10, 100) }} /><StatCard title="Total Nilai Aset" value={formatCurrency(stats.totalNilaiAset)} icon={WalletCards} iconClass="bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400" trend={15.8} trendLabel="dari bulan lalu" progress={{ label: '78% dari target', value: 78 }} /></div>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-5"><div className="xl:col-span-3"><ActivityFeed activities={activities} /></div><div className="xl:col-span-2"><DistributionChart employees={employees} inventory={inventory} /></div></div>
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"><div><h3 className="font-bold text-lg">Kelola data dengan lebih efisien</h3><p className="text-indigo-100 text-sm mt-1">Akses manajemen karyawan dan inventaris melalui menu di samping.</p></div><div className="flex gap-2"><button onClick={() => onViewChange('employees')} className="px-4 py-2.5 bg-white/15 hover:bg-white/25 rounded-xl text-xs font-semibold transition-colors">Data Karyawan</button><button onClick={() => onViewChange('inventory')} className="px-4 py-2.5 bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1">Inventaris <ArrowRight className="w-3.5 h-3.5" /></button></div></div>
    </div>
  );
}
