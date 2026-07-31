import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { X, Upload, CheckCircle2 } from 'lucide-react';

interface TestimonialFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonialToEdit: any | null;
  onSuccess: () => void;
}

const TestimonialFormModal: React.FC<TestimonialFormModalProps> = ({ isOpen, onClose, testimonialToEdit, onSuccess }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');

  useEffect(() => {
    if (testimonialToEdit) {
      setName(testimonialToEdit.name);
      setPosition(testimonialToEdit.position);
      setText(testimonialToEdit.text);
      setGender(testimonialToEdit.image?.includes('female') ? 'female' : 'male');
    } else {
      setName('');
      setPosition('');
      setText('');
      setGender('male');
    }
    setError('');
  }, [testimonialToEdit, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const testimonialData = {
        name,
        position,
        text,
        image: gender === 'female' ? '/assets/Photos/female.webp' : '/assets/Photos/male.webp',
      };

      if (testimonialToEdit) {
        const { error } = await supabase
          .from('testimonials')
          .update(testimonialData)
          .eq('id', testimonialToEdit.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert([testimonialData]);
        if (error) throw error;
      }

      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-main-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-main border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
          <h2 className="text-2xl font-bold text-white">
            {testimonialToEdit ? 'Edit Testimonial' : 'Add New Testimonial'}
          </h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 mb-2 text-sm font-medium">Name</label>
                <input 
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-main-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm font-medium">Position / Title</label>
                <input 
                  required
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full bg-main-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                  placeholder="e.g. CEO at Company"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm font-medium">Testimonial Text</label>
              <textarea 
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                className="w-full bg-main-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                placeholder="What did they say?"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 text-sm font-medium">Gender (for avatar)</label>
              <div className="flex gap-4">
                <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${gender === 'male' ? 'bg-accent/10 border-accent text-accent' : 'bg-main-dark/50 border-white/10 text-gray-400 hover:border-white/30'}`}>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    className="hidden"
                  />
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                    <img src="/assets/Photos/male.webp" alt="Male Avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold">Male</span>
                </label>
                
                <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${gender === 'female' ? 'bg-accent/10 border-accent text-accent' : 'bg-main-dark/50 border-white/10 text-gray-400 hover:border-white/30'}`}>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    className="hidden"
                  />
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                    <img src="/assets/Photos/female.webp" alt="Female Avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-bold">Female</span>
                </label>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-end gap-3">
              <button 
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-xl font-bold text-gray-300 hover:bg-white/5 transition-all"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-accent hover:bg-accent/90 text-main-dark px-8 py-3 rounded-xl font-black transition-all shadow-lg shadow-accent/20 disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting ? 'Saving...' : testimonialToEdit ? 'Save Changes' : 'Add Testimonial'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFormModal;
