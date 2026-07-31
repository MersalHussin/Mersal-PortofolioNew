import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import ProjectsManager from '../components/Admin/ProjectsManager';
import SkillsManager from '../components/Admin/SkillsManager';
import ClientsManager from '../components/Admin/ClientsManager';
import SettingsManager from '../components/Admin/SettingsManager';
import TestimonialsManager from '../components/Admin/TestimonialsManager';
import { LogOut } from 'lucide-react';

const Admin: React.FC = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'projects' | 'skills' | 'clients' | 'testimonials' | 'settings'>('projects');

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setAuthError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-main-dark text-white">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-main-dark px-4 py-20 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
        
        <div className="bg-main/50 backdrop-blur-xl w-full max-w-md p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative z-10">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20 transform rotate-3 transition-transform hover:rotate-6">
              <svg className="w-8 h-8 text-main-dark -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-gray-400">Sign in to your Admin Dashboard</p>
          </div>
          
          {authError && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6 text-center text-sm font-medium">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-gray-400 mb-2 text-sm font-medium">Email Address</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-main-dark/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="admin@mersal.top"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm font-medium">Password</label>
              <input 
                required
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-main-dark/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-main-dark font-black text-lg py-4 rounded-xl shadow-lg shadow-accent/20 hover:-translate-y-1 transition-all duration-300 !mt-8"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050f32] relative pb-20">
      {/* Top Gradient Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-accent via-blue-500 to-purple-500"></div>
      
      {/* Header */}
      <div className="bg-main/60 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
              <span className="text-main-dark font-black text-xl leading-none">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">Admin Workspace</h1>
              <p className="text-gray-400 text-xs mt-0.5">Mersal Portfolio Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              {session.user.email}
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/5 hover:bg-red-500/10 text-gray-300 hover:text-red-400 px-4 py-2.5 rounded-xl transition-all border border-white/5 hover:border-red-500/20 text-sm font-medium"
            >
              <LogOut size={16} /> <span className="max-sm:hidden">Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pt-10">
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'projects' ? 'bg-accent text-main-dark shadow-lg shadow-accent/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}`}
          >
            Manage Projects
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'skills' ? 'bg-accent text-main-dark shadow-lg shadow-accent/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}`}
          >
            Manage Skills
          </button>
          <button 
            onClick={() => setActiveTab('clients')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'clients' ? 'bg-accent text-main-dark shadow-lg shadow-accent/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}`}
          >
            Manage Clients
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'testimonials' ? 'bg-accent text-main-dark shadow-lg shadow-accent/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}`}
          >
            Testimonials
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'settings' ? 'bg-accent text-main-dark shadow-lg shadow-accent/20' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}`}
          >
            Settings (CV Link)
          </button>
        </div>

        {activeTab === 'projects' && <ProjectsManager />}
        {activeTab === 'skills' && <SkillsManager />}
        {activeTab === 'clients' && <ClientsManager />}
        {activeTab === 'testimonials' && <TestimonialsManager />}
        {activeTab === 'settings' && <SettingsManager />}
      </div>
    </div>
  );
};

export default Admin;
