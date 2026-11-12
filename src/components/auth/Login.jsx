import React, { useState } from 'react';
import { BriefcaseBusiness, Eye, EyeOff, LockKeyhole, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fillDemo = () => {
    setEmail('admin@demo.com');
    setPassword('123456');
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const result = login(email, password);
      if (!result.success) setError(result.message);
      setLoading(false);
    }, 450);
  };

  return (
    <main className="flex min-h-screen bg-slate-50 dark:bg-zinc-950">
      <section className="relative hidden w-1/2 overflow-hidden bg-indigo-600 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-indigo-400/20"></div>
        <div className="absolute -bottom-48 -left-20 h-[30rem] w-[30rem] rounded-full border-[80px] border-indigo-500/30"></div>
        <div className="relative z-10 flex items-center gap-3 text-xl font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-lg"><BriefcaseBusiness size={22} /></span> Nexora <span className="font-normal text-indigo-200">Enterprise</span></div>
        <div className="relative z-10 max-w-lg">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">Unified management platform</p>
          <h1 className="text-5xl font-bold leading-tight">Kelola tim dan aset perusahaan dengan lebih cerdas.</h1>
          <p className="mt-6 max-w-md leading-relaxed text-indigo-100">Satu ruang kerja terintegrasi untuk memantau performa tim dan aset bisnis secara real-time.</p>
        </div>
        <p className="relative z-10 text-sm text-indigo-200">© 2024 Nexora Enterprise. All rights reserved.</p>
      </section>
      <section className="flex flex-1 items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden"><div className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-zinc-100"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white"><BriefcaseBusiness size={22} /></span> Nexora <span className="font-normal text-slate-400">Enterprise</span></div></div>
          <div className="mb-8"><h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">Selamat datang kembali</h2><p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">Masuk ke workspace enterprise Anda.</p></div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div><label className="mb-2 block text-sm font-medium text-slate-700 dark:text-zinc-300">Email bisnis</label><div className="relative"><Mail size={18} className="absolute left-3.5 top-3.5 text-slate-400" /><input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="nama@perusahaan.com" className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100" /></div></div>
            <div><div className="mb-2 flex items-center justify-between"><label className="block text-sm font-medium text-slate-700 dark:text-zinc-300">Password</label><button type="button" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">Lupa password?</button></div><div className="relative"><LockKeyhole size={18} className="absolute left-3.5 top-3.5 text-slate-400" /><input value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} required placeholder="Masukkan password" className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>
            {error && <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-600 dark:border-rose-800/50 dark:bg-rose-950/30 dark:text-rose-400">{error}</div>}
            <button disabled={loading} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">{loading ? 'Memproses...' : 'Masuk ke Dashboard'} {!loading && <ArrowRight size={17} />}</button>
          </form>
          <button onClick={fillDemo} className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 dark:border-indigo-900/60 dark:bg-indigo-950/30 dark:text-indigo-300 dark:hover:bg-indigo-950/60"><ShieldCheck size={17} /> Auto-fill Demo Credentials</button>
          <p className="mt-4 text-center text-xs text-slate-400">Demo: admin@demo.com / 123456</p>
          <p className="mt-10 text-center text-xs text-slate-400">Need help? <span className="font-medium text-indigo-600">Contact support</span></p>
        </div>
      </section>
    </main>
  );
}
