import { useState, useEffect, useMemo } from "react"
import { getClients } from "../../services/api"
import Button from "./Button"

import { EditIcon, Eye, SaveIcon, Trash } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/TableConfig"

import ClientForm from "./ClientForm"
import ConfirmationModal from "./ConfirmationModal"
import Spinner from "./Spinner"
import ClientDetailsSidebar from "./ClientDetailsSidebar"
import SearchInput from "./SearchInput"

export const ClientsTable = () => {
  const [ clients, setClients ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ isSearching, setIsSearching ] = useState(false);
  
  const [ showModal, setShowModal ] = useState(false);
  const [ showDeleteModal, setShowDeleteModal ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  
  const [ clientToEdit, setClientToEdit ] = useState(null);
  const [ clientToDelete, setClientToDelete ] = useState(null);
  const [ clientData, setClientData ] = useState(null);
  
  const [ detailsSidebar, setDetailsSidebar ] = useState(false);
  // See if the search input exists, if so, change the clients.map to searchResults.map (with condition);
  
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);
  
  // instead of storing the search results in the state, compute them using useMemo()
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return clients;
    
    // make the search term case insensitive
    const lowerCaseTerm = searchTerm.toLowerCase();
    const results = clients.filter(client =>
      client.name?.toLowerCase().includes(lowerCaseTerm) ||
      client.company?.toLowerCase().includes(lowerCaseTerm)
    )

    return results; 
  }, [clients, searchTerm]);

  // bring client data from api
  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const data = await getClients();
        console.log("Clients data: ", data);
        setClients(data);
        
      } catch (error) {
        setError(error.message);
        
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    <Spinner />
  }

  if (error) {
    console.error(error);
  }

  const handleEdit = (client) => {
    setIsEditing(true);
    setClientToEdit(client);
    setShowModal(true);
  }

  const handleCreate = () => {
    setIsEditing(false);
    setClientToEdit(null);
    setShowModal(true);
  }
  
  const handleDelete = (clientId) => {
    setShowDeleteModal(true);
    setClientToDelete(clientId);

    setClients(prevData => prevData.filter(item => item._id !== clientId));
  }

  const handleClientDetails = (client) => {
    console.log("You clicked the details btn");
    setClientData(client);
    console.log("View the details of the client: ", clientData);
    setDetailsSidebar(true);
  }

  const handleChanges = (clientChanged) => {
    if (!isEditing) {
      setClients([...clients, clientChanged]);
    } else {
      const clientUpdated = clients.map(c => {
        if (c._id === clientChanged._id) {
          return { ...c, ...clientChanged }; // this merges properties
        }

        return c;
      })
    
      setClients(clientUpdated);
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term);

    // convert term into boolean
    setIsSearching(!!term.trim());
  }

  const displayedClients = isSearching ? searchResults : clients; 

  return (
    <>
      <div className="w-full space-y-6 px-12 pb-10">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <SearchInput onSearch={handleSearch} />

          <Button
            onClick={handleCreate}
            id="create-client-button"
            disabled={false}
            className="bg-[#967be7] hover:bg-[#8a70da] active:bg-[#7d5fcf] text-white font-onest font-bold py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-[#967be7]/20 transition-all duration-200 whitespace-nowrap"
          >
            + Create Client
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-neutral-800 overflow-hidden bg-[#2a2a2a] shadow-xl">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-neutral-800 hover:bg-transparent">
                <TableHead className="text-neutral-400 font-semibold">Name</TableHead>
                <TableHead className="text-neutral-400 font-semibold">Company</TableHead>
                <TableHead className="text-neutral-400 font-semibold">Email</TableHead>
                <TableHead className="text-neutral-400 font-semibold">Phone</TableHead>
                <TableHead className="text-neutral-400 font-semibold">Status</TableHead>
                <TableHead className="text-neutral-400 font-semibold">Priority</TableHead>
                <TableHead className="text-neutral-400 font-semibold">Project</TableHead>
                <TableHead className="text-center text-neutral-400 font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            
            <TableBody>
              {displayedClients.map((client) => (
                <TableRow
                  key={client.id}
                  className="border-b border-neutral-800 hover:bg-neutral-800/30 transition-colors"
                >
                  <TableCell className="font-semibold text-white">
                    {client.name}
                  </TableCell>
                  <TableCell className="text-neutral-300">
                    {client.company}
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    {client.email}
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    {client.phone}
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    {client.status}
                  </TableCell>
                  <TableCell className="text-neutral-400">
                    {client.priority}
                  </TableCell>
                  <TableCell className="text-neutral-300">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#967be7]/20 text-[#967be7] border border-[#967be7]/30">
                      {client.project}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(client)}
                        className="p-2 rounded-lg bg-[#967be7]/10 text-[#967be7] hover:bg-[#967be7]/20 hover:scale-110 transition-all"
                        title="Edit"
                      >
                        <EditIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleClientDetails(client)}
                        className="p-2 rounded-lg bg-[#fbbf24]/10 text-[#fbbf24] hover:bg-[#fbbf24]/20 hover:scale-110 transition-all"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => alert(`Save ${client.name} PDF`)}
                        className="p-2 rounded-lg bg-[#C8E678]/10 text-[#C8E678] hover:bg-[#C8E678]/20 hover:scale-110 transition-all"
                        title="Save PDF"
                      >
                        <SaveIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(client._id)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:scale-110 transition-all"
                        title="Delete"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            
            <TableFooter>
              <TableRow className="border-t border-neutral-800 bg-neutral-800/30 hover:bg-neutral-900/50">
                <TableCell colSpan={7} className="font-bold text-neutral-300">
                  Total Clients: {clients.length}
                </TableCell>
                <TableCell className="text-center font-bold text-white">
                  {/* // to add total in sales */}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>

      {showModal && (
        <ClientForm 
          onClose={() => setShowModal(false)} 
          onClientChanged={(clientChanged) => handleChanges(clientChanged)}
          clientToEdit={clientToEdit}
          isEditing={isEditing}
        /> // ClientForm receives a prop called (OnClose) that closes the modal when clicking on the "X" button
      )}

      {showDeleteModal && (
        <ConfirmationModal 
          onClose={() => setShowDeleteModal(false)}
          clientId={clientToDelete}
        />
      )}


      {/* Open sidebar */}
      {detailsSidebar && (
        <ClientDetailsSidebar 
          isOpen={detailsSidebar}
          clientData={clientData}
          onClose={() => setDetailsSidebar(false)}
        /> 
      )}
    </>
  )
}