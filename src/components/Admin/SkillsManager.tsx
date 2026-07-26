import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, DownloadCloud } from 'lucide-react';
import SkillFormModal from './SkillFormModal';

const oldSkills = [
  { name: 'Adobe Illustrator', image: '/assets/Photos/apps/ai.webp' },
  { name: 'Adobe Photoshop', image: '/assets/Photos/apps/ps.webp' },
  { name: 'Adobe InDesign', image: '/assets/Photos/apps/id.webp' },
  { name: 'Adobe After Effects', image: '/assets/Photos/apps/ae.webp' },
  { name: 'Adobe Premiere Pro', image: '/assets/Photos/apps/pr.webp' },
  { name: 'Canva', image: '/assets/Photos/apps/canva.webp' },
  { name: 'Miro', image: '/assets/Photos/apps/miro.webp' },
  { name: 'Adobe XD', image: '/assets/Photos/apps/xd.webp' },
  { name: 'Figma', image: '/assets/Photos/apps/figma.webp' },
  { name: 'HTML', image: '/assets/Photos/apps/html.webp' },
  { name: 'CSS', image: '/assets/Photos/apps/css.webp' },
  { name: 'JavaScript', image: '/assets/Photos/apps/js.webp' },
  { name: 'React', image: '/assets/Photos/apps/react.webp' },
];

const SkillsManager: React.FC = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skillToEdit, setSkillToEdit] = useState<any | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const fetchSkills = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error("Error fetching skills:", error);
    } else {
      setSkills(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      const { error } = await supabase.from('skills').delete().eq('id', id);
      if (error) {
        alert("Error deleting skill: " + error.message);
      } else {
        fetchSkills();
      }
    }
  };

  const handleImportOldSkills = async () => {
    if (!window.confirm("This will import all old static skills into Supabase. Proceed?")) return;
    
    setIsImporting(true);
    try {
      const { error } = await supabase.from('skills').insert(oldSkills);
      if (error) throw error;
      
      alert("Skills imported successfully!");
      fetchSkills();
    } catch (err: any) {
      alert("Error importing skills: " + err.message);
    } finally {
      setIsImporting(false);
    }
  };

  const openModal = (skill: any = null) => {
    setSkillToEdit(skill);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-main/40 backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">Skills & Tools</h2>
          <p className="text-gray-400 text-sm">Manage the sliding skill icons on your home page.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.length === 0 && (
            <button 
              onClick={handleImportOldSkills}
              disabled={isImporting}
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 text-sm"
            >
              <DownloadCloud size={18} /> {isImporting ? 'Importing...' : 'Import Old Skills'}
            </button>
          )}
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-main-dark shadow-lg shadow-accent/20 px-6 py-2.5 rounded-xl font-black transition-all hover:-translate-y-0.5 text-sm"
          >
            <Plus size={18} strokeWidth={3} /> Add New Skill
          </button>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-gray-400 font-medium">Loading skills...</div>
          </div>
        ) : skills.length === 0 ? (
          <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5 border-dashed m-4">
            <h3 className="text-xl font-bold text-white mb-2">No skills found</h3>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto text-sm">Add your tools and skills to show them off in the Marquee.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
            {skills.map(skill => (
              <div key={skill.id} className="group relative bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-colors">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img 
                    src={skill.image} 
                    alt={skill.name} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
                  />
                </div>
                <p className="font-bold text-white text-sm text-center truncate w-full">{skill.name}</p>
                
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openModal(skill)}
                    className="p-1.5 bg-blue-500/80 hover:bg-blue-500 text-white rounded-lg transition-all backdrop-blur-md"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button 
                    onClick={() => handleDelete(skill.id)}
                    className="p-1.5 bg-red-500/80 hover:bg-red-500 text-white rounded-lg transition-all backdrop-blur-md"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SkillFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        skillToEdit={skillToEdit}
        onSuccess={fetchSkills}
      />
    </div>
  );
};

export default SkillsManager;
