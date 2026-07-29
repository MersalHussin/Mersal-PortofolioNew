import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../../lib/supabase';

interface ClientFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientToEdit: any | null;
  onSuccess: () => void;
}

const ClientFormModal: React.FC<ClientFormModalProps> = ({ isOpen, onClose, clientToEdit, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    url: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (clientToEdit) {
      setFormData({
        name: clientToEdit.name || '',
        logo: clientToEdit.logo || '',
        url: clientToEdit.url || ''
      });
    } else {
      setFormData({
        name: '',
        logo: '',
        url: ''
      });
    }
  }, [clientToEdit, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Filter out empty URL so it can be null if they don't provide one
    const submissionData = {
      ...formData,
      url: formData.url.trim() === '' ? null : formData.url.trim()
    };

    try {
      if (clientToEdit) {
        const { error } = await supabase
          .from('clients')
          .update(submissionData)
          .eq('id', clientToEdit.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('clients')
          .insert([submissionData]);
        if (error) throw error;
      }
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#050f32]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="bg-main/90 backdrop-blur-xl w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[32px] p-8 sm:p-10 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.7)] relative z-10 transform transition-all shadow-accent/5 no-scrollbar">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
        >
          ✕
        </button>
        
        <div className="mb-8 pr-12">
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">
            {clientToEdit ? 'Edit Client' : 'New Client'}
          </h2>
          <p className="text-gray-400 text-sm">
            {clientToEdit ? 'Update client details below.' : 'Add a new client logo to the Trusted By section.'}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Client Name</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
              placeholder="e.g. Google"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Logo URL</label>
            <input 
              required
              type="text" 
              value={formData.logo}
              onChange={(e) => setFormData({...formData, logo: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
              placeholder="/assets/Photos/Clients/google.svg or https://..."
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Website URL (Optional)</label>
            <input 
              type="text" 
              value={formData.url}
              onChange={(e) => setFormData({...formData, url: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
              placeholder="https://google.com"
            />
          </div>

          <div className="pt-6 flex flex-col-reverse sm:flex-row gap-3">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-white/5 hover:bg-white/10 text-white rounded-xl py-4 font-bold transition-all border border-white/10"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={loading}
              className="flex-[2] bg-accent hover:bg-accent/90 text-main-dark font-black rounded-xl py-4 transition-all disabled:opacity-50 shadow-lg shadow-accent/20 hover:-translate-y-0.5"
            >
              {loading ? 'Saving...' : (clientToEdit ? 'Save Changes' : 'Add Client')}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ClientFormModal;
