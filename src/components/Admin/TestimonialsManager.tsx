import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, DownloadCloud } from 'lucide-react';
import TestimonialFormModal from './TestimonialFormModal';
import { testimonials as defaultTestimonials } from '../Testimonials';

const TestimonialsManager: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonialToEdit, setTestimonialToEdit] = useState<any | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching testimonials:", error);
    } else {
      setTestimonials(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      const { error } = await supabase.from('testimonials').delete().eq('id', id);
      if (error) {
        alert("Error deleting testimonial: " + error.message);
      } else {
        fetchTestimonials();
      }
    }
  };

  const [isImporting, setIsImporting] = useState(false);

  const handleImportDefault = async () => {
    if (!window.confirm("This will import the default hardcoded testimonials into Supabase. Proceed?")) return;
    
    setIsImporting(true);
    try {
      const itemsToInsert = defaultTestimonials.map(t => ({
        name: t.name,
        position: t.position,
        text: t.text,
        image: t.image
      }));

      const { error } = await supabase.from('testimonials').insert(itemsToInsert);
      
      if (error) throw error;
      
      alert("Testimonials imported successfully!");
      fetchTestimonials();
    } catch (err: any) {
      alert("Error importing testimonials: " + err.message);
    } finally {
      setIsImporting(false);
    }
  };

  const openModal = (testimonial: any = null) => {
    setTestimonialToEdit(testimonial);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-main/40 backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">Testimonials</h2>
          <p className="text-gray-400 text-sm">Manage client testimonials on the dedicated page.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {testimonials.length === 0 && (
            <button 
              onClick={handleImportDefault}
              disabled={isImporting}
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 text-sm"
            >
              <DownloadCloud size={18} /> {isImporting ? 'Importing...' : 'Import Default Testimonials'}
            </button>
          )}
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-main-dark shadow-lg shadow-accent/20 px-6 py-2.5 rounded-xl font-black transition-all hover:-translate-y-0.5 text-sm"
          >
            <Plus size={18} strokeWidth={3} /> Add New Testimonial
          </button>
        </div>
      </div>

      <div className="p-8">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20 bg-main-dark/30 rounded-2xl border border-white/5">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No testimonials found</h3>
            <p className="text-gray-400 mb-6">Add your first testimonial to display it on the site.</p>
            <button 
              onClick={() => openModal()}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-xl transition-all font-medium text-sm border border-white/5"
            >
              Add Testimonial
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-main-dark/50 border border-white/10 rounded-2xl p-6 group hover:border-accent/50 transition-all flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/assets/Photos/male.webp'; }}
                  />
                  <div>
                    <h3 className="font-bold text-white leading-tight">{testimonial.name}</h3>
                    <p className="text-xs text-accent mt-0.5">{testimonial.position}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm line-clamp-4 flex-1 mb-6">"{testimonial.text}"</p>
                
                <div className="flex gap-2 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openModal(testimonial)}
                    className="flex-1 flex justify-center items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 py-2 rounded-lg transition-all text-xs font-bold border border-blue-500/20"
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(testimonial.id)}
                    className="flex-1 flex justify-center items-center gap-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 py-2 rounded-lg transition-all text-xs font-bold border border-red-500/20"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <TestimonialFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        testimonialToEdit={testimonialToEdit}
        onSuccess={fetchTestimonials}
      />
    </div>
  );
};

export default TestimonialsManager;
