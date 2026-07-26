import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, DownloadCloud } from 'lucide-react';
import ProjectFormModal from './ProjectFormModal';
import { allProjects } from '../../data/projects';

const ProjectsManager: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState<any | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) {
        alert("Error deleting project: " + error.message);
      } else {
        fetchProjects();
      }
    }
  };

  const handleImportOldProjects = async () => {
    if (!window.confirm("This will import all old static projects into Supabase. Proceed?")) return;
    
    setIsImporting(true);
    try {
      const projectsToInsert = allProjects.map(p => ({
        name: p.name,
        image: p.image,
        link: p.link,
        category: p.category,
        featured: p.featured || false
      }));

      const { error } = await supabase.from('projects').insert(projectsToInsert);
      
      if (error) throw error;
      
      alert("Projects imported successfully!");
      fetchProjects();
    } catch (err: any) {
      alert("Error importing projects: " + err.message);
    } finally {
      setIsImporting(false);
    }
  };

  const openModal = (project: any = null) => {
    setProjectToEdit(project);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-main/40 backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">Projects</h2>
          <p className="text-gray-400 text-sm">Manage your portfolio projects and visibility.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {projects.length === 0 && (
            <button 
              onClick={handleImportOldProjects}
              disabled={isImporting}
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 text-sm"
            >
              <DownloadCloud size={18} /> {isImporting ? 'Importing...' : 'Import Old Projects'}
            </button>
          )}
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-main-dark shadow-lg shadow-accent/20 px-6 py-2.5 rounded-xl font-black transition-all hover:-translate-y-0.5 text-sm"
          >
            <Plus size={18} strokeWidth={3} /> Add New Project
          </button>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-gray-400 font-medium">Loading projects...</div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5 border-dashed m-4">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DownloadCloud className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto text-sm">Your database is empty. You can import your old static projects or create a new one.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/40 text-gray-400 text-xs uppercase tracking-wider">
                  <th className="p-5 font-bold rounded-tl-2xl w-24">Preview</th>
                  <th className="p-5 font-bold">Project Name</th>
                  <th className="p-5 font-bold">Category</th>
                  <th className="p-5 font-bold text-center">Status</th>
                  <th className="p-5 font-bold text-right rounded-tr-2xl">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.map(project => (
                  <tr key={project.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-5">
                      <div className="w-20 h-14 rounded-lg overflow-hidden border border-white/10 shadow-md">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                    </td>
                    <td className="p-5">
                      <p className="font-bold text-white text-base mb-0.5">{project.name}</p>
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:text-blue-300 transition-colors truncate max-w-[200px] inline-block">
                        View Link ↗
                      </a>
                    </td>
                    <td className="p-5">
                      <span className="bg-white/5 text-gray-300 border border-white/10 text-xs px-3 py-1.5 rounded-full font-medium">
                        {project.category}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      {project.featured ? (
                        <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-accent border border-green-500/20 text-xs px-3 py-1.5 rounded-full font-bold">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div> Featured
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 bg-gray-500/10 text-gray-400 border border-gray-500/20 text-xs px-3 py-1.5 rounded-full font-medium">
                          Normal
                        </span>
                      )}
                    </td>
                    <td className="p-5 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => openModal(project)}
                          className="p-2 bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white rounded-lg transition-all"
                          title="Edit"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button 
                          onClick={() => handleDelete(project.id)}
                          className="p-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white rounded-lg transition-all"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ProjectFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectToEdit={projectToEdit}
        onSuccess={fetchProjects}
      />
    </div>
  );
};

export default ProjectsManager;
