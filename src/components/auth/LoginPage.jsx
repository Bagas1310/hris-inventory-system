import React, { useState } from 'react';
import { LogIn, Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const { login, loading, demoCredentials } = useAuth();
  const [email, setEmail] = useState('admin@demo.com');
  const [password, setPassword] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const autofill = () => {
    setEmail(demoCredentials.email);
    setPassword(demoCredentials.password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden transition-colors">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-slate-200 dark:border-zinc-800 overflow-hidden relative z-10">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-12 text-white">
          <div>
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight">NEXUS<span className="font-normal text-indigo-200">.HRIS</span></span>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight">Kelola aset &<br />talenta lebih mudah.</h1>
            <p className="mt-5 text-indigo-100 leading-relaxed max-w-sm">Satu platform terpadu untuk mengelola karyawan, inventaris, dan operasional perusahaan Anda.</p>
          </div>
          <div className="text-sm text-indigo-200">© 2024 Nexus HRIS · Enterprise Management</div>
        </div>

        <div className="p-8 sm:p-12 lg:p-14">
          <div className="lg:hidden flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white"><ShieldCheck className="w-6 h-6" /></div>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-zinc-100">NEXUS<span className="font-normal text-indigo-600">.HRIS</span></span>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 tracking-tight">Selamat datang kembali</h2>
            <p className="text-slate-500 dark:text-zinc-400 mt-2 text-sm">Masuk untuk melanjutkan ke dashboard Anda.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <div className="p-3 text-sm rounded-lg bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800">{error}</div>}
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-zinc-300">Email</span>
              <div className="relative mt-2">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all" placeholder="nama@perusahaan.com" />
              </div>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-zinc-300">Kata Sandi</span>
              <div className="relative mt-2">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type={showPassword ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200">{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
              </div>
            </label>
            <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm shadow-indigo-600/20">
              {loading ? 'Memverifikasi...' : <>Masuk ke Dashboard <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
          <button type="button" onClick={autofill} className="mt-5 w-full py-3 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-950/60 transition-colors flex items-center justify-center gap-2">
            <LogIn className="w-4 h-4" /> Auto-fill Demo Credentials
          </button>
          <p className="text-center text-xs text-slate-400 dark:text-zinc-500 mt-6">Demo: admin@demo.com · 123456</p>
        </div>
      </div>
    </div>
  );
}
