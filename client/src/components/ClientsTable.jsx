import { useState, useEffect } from "react"
import { getClients } from "../../services/api"
import Button from "./Button"

import { EditIcon, Eye, SaveIcon, Search, Trash } from "lucide-react"

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


export const ClientsTable = () => {
  const [ clients, setClients ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ clientToEdit, setClientToEdit ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

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
    console.log("Loading...");
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

  return (
    <>
      <div className="w-full space-y-6 px-12 pb-10">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-x-5">
            <div className="relative w-full sm:w-64 md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-neutral-500" />
              </span>
              
              <input
                type="text"
                placeholder="Search clients..."
                className="w-full text-white py-2.5 px-6 pl-12 rounded-xl shadow-sm outline-none hidden md:block border border-neutral-800 focus:border-[#967be7] focus:ring-2 focus:ring-[#967be7]/20 transition-all bg-[#2a2a2a] font-onest placeholder:text-neutral-600"
              />
            </div>
          </div>

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
              {clients.map((client) => (
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
                        onClick={() => alert(`View ${client.name}`)}
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
                        onClick={() => {
                          if (confirm(`Delete ${client.name}?`)) {
                            alert("Deleted!")
                          }
                        }}
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
    </>
  )
}