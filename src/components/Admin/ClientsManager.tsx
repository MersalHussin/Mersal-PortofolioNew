import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Edit2, Trash2, DownloadCloud, Link as LinkIcon } from 'lucide-react';
import ClientFormModal from './ClientFormModal';
import oldClients from '../../data/clients';

const ClientsManager: React.FC = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientToEdit, setClientToEdit] = useState<any | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const fetchClients = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) {
      console.error("Error fetching clients:", error);
    } else {
      setClients(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      const { error } = await supabase.from('clients').delete().eq('id', id);
      if (error) {
        alert("Error deleting client: " + error.message);
      } else {
        fetchClients();
      }
    }
  };

  const handleImportOldClients = async () => {
    if (!window.confirm("This will import all old static clients into Supabase. Proceed?")) return;
    
    setIsImporting(true);
    try {
      // Strip out the old numeric IDs so Supabase can generate new UUIDs
      const toImport = oldClients.map(({ id, ...rest }) => rest);
      const { error } = await supabase.from('clients').insert(toImport);
      if (error) throw error;
      
      alert("Clients imported successfully!");
      fetchClients();
    } catch (err: any) {
      alert("Error importing clients: " + err.message);
    } finally {
      setIsImporting(false);
    }
  };

  const openModal = (client: any = null) => {
    setClientToEdit(client);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-main/40 backdrop-blur-xl rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden">
      <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1 tracking-tight">Clients</h2>
          <p className="text-gray-400 text-sm">Manage the client logos shown in the Trusted By section.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {clients.length === 0 && (
            <button 
              onClick={handleImportOldClients}
              disabled={isImporting}
              className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 text-sm"
            >
              <DownloadCloud size={18} /> {isImporting ? 'Importing...' : 'Import Old Clients'}
            </button>
          )}
          <button 
            onClick={() => openModal()}
            className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-main-dark shadow-lg shadow-accent/20 px-6 py-2.5 rounded-xl font-black transition-all hover:-translate-y-0.5 text-sm"
          >
            <Plus size={18} strokeWidth={3} /> Add New Client
          </button>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-gray-400 font-medium">Loading clients...</div>
          </div>
        ) : clients.length === 0 ? (
          <div className="text-center py-20 bg-black/20 rounded-2xl border border-white/5 border-dashed m-4">
            <h3 className="text-xl font-bold text-white mb-2">No clients found</h3>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto text-sm">Add your clients to show them off in the Trusted By section.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
            {clients.map(client => (
              <div key={client.id} className="group relative bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-colors">
                {client.url && (
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="absolute top-3 left-3 text-accent/50 hover:text-accent transition-colors" title="External Link">
                    <LinkIcon size={14} />
                  </a>
                )}
                <div className="w-20 h-14 mb-4 flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" 
                  />
                </div>
                <p className="font-bold text-white text-sm text-center truncate w-full">{client.name}</p>
                
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openModal(client)}
                    className="p-1.5 bg-blue-500/80 hover:bg-blue-500 text-white rounded-lg transition-all backdrop-blur-md"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button 
                    onClick={() => handleDelete(client.id)}
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

      <ClientFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        clientToEdit={clientToEdit}
        onSuccess={fetchClients}
      />
    </div>
  );
};

export default ClientsManager;
