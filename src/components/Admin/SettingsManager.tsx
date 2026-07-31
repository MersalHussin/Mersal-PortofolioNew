import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const SettingsManager: React.FC = () => {
  const [cvUrl, setCvUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('settings')
        .select('value')
        .eq('key', 'cv_url')
        .single();
      
      if (data) {
        setCvUrl(data.value);
      }
      if (error && error.code !== 'PGRST116') { // Ignore row not found error
        console.error('Error fetching settings:', error);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      // Upsert the cv_url setting
      const { error } = await supabase
        .from('settings')
        .upsert({ key: 'cv_url', value: cvUrl }, { onConflict: 'key' });

      if (error) throw error;
      setMessage('CV Link updated successfully!');
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      console.error('Error saving CV Link:', err);
      setMessage('Error updating CV Link. Make sure settings table exists.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-white text-center py-10">Loading settings...</div>;
  }

  return (
    <div className="bg-main/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-white">General Settings</h2>
        <p className="text-gray-400 mt-1">Manage global website configurations like your CV link.</p>
      </div>

      {message && (
        <div className={`p-4 rounded-xl mb-6 ${message.includes('Error') ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
          {message}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2 font-medium">CV Link (Google Drive, Dropbox, etc.)</label>
          <input 
            type="text" 
            value={cvUrl}
            onChange={(e) => setCvUrl(e.target.value)}
            placeholder="https://..."
            className="w-full bg-main-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all"
          />
          <p className="text-gray-500 text-sm mt-2">
            This link will be used when visitors click "Download CV" in the About section.
            Make sure the link is public.
          </p>
        </div>

        <button 
          onClick={handleSave}
          disabled={saving}
          className="w-full bg-accent hover:bg-accent/90 text-main-dark font-black text-lg py-3 rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
        <h3 className="text-blue-400 font-bold mb-2">⚠️ Database Requirement</h3>
        <p className="text-gray-300 text-sm">
          To use this feature, you must have a table named <code className="text-accent bg-black/30 px-1 py-0.5 rounded">settings</code> in your Supabase database with columns:
          <br/>- <code className="text-white">id</code> (UUID or int, primary key)
          <br/>- <code className="text-white">key</code> (Text, unique)
          <br/>- <code className="text-white">value</code> (Text)
        </p>
      </div>
    </div>
  );
};

export default SettingsManager;
