import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { supabase } from '../../lib/supabase';

interface ProjectFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectToEdit: any | null;
  onSuccess: () => void;
}

const ProjectFormModal: React.FC<ProjectFormModalProps> = ({ isOpen, onClose, projectToEdit, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    link: '',
    category: 'Graphic Design',
    featured: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const categories = ["Graphic Design", "Web Development", "UI/UX Design", "Video Editing"];

  useEffect(() => {
    if (projectToEdit) {
      setFormData({
        name: projectToEdit.name,
        image: projectToEdit.image,
        link: projectToEdit.link,
        category: projectToEdit.category,
        featured: projectToEdit.featured
      });
    } else {
      setFormData({
        name: '',
        image: '',
        link: '',
        category: 'Graphic Design',
        featured: false
      });
    }
  }, [projectToEdit, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (projectToEdit) {
        const { error } = await supabase
          .from('projects')
          .update(formData)
          .eq('id', projectToEdit.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([formData]);
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
            {projectToEdit ? 'Edit Project' : 'New Project'}
          </h2>
          <p className="text-gray-400 text-sm">
            {projectToEdit ? 'Update your project details below.' : 'Add a new project to your portfolio.'}
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Project Name</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
              placeholder="e.g. Ausrah Identity"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Image URL</label>
            <input 
              required
              type="text" 
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
              placeholder="/assets/Photos/Gallery/..."
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Project Link</label>
            <input 
              required
              type="text" 
              value={formData.link}
              onChange={(e) => setFormData({...formData, link: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-gray-600"
              placeholder="https://behance.net/..."
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1.5 text-sm font-medium">Category</label>
            <select 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-accent focus:bg-main-dark focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer"
            >
              {categories.map(c => (
                <option key={c} value={c} className="bg-main-dark text-white">{c}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="w-5 h-5 appearance-none border-2 border-white/20 rounded md:rounded bg-black/40 checked:bg-accent checked:border-accent cursor-pointer transition-colors peer"
              />
              <svg className="absolute w-3.5 h-3.5 text-main-dark pointer-events-none opacity-0 peer-checked:opacity-100 left-[3px] top-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <label htmlFor="featured" className="text-gray-300 text-sm cursor-pointer select-none">
              Featured Project <span className="text-gray-500">(Shows on Home Page slider)</span>
            </label>
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
              {loading ? 'Saving...' : (projectToEdit ? 'Save Changes' : 'Create Project')}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ProjectFormModal;
