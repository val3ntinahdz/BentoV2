import { deleteClient, getClientById } from "../../services/api";

import { TriangleAlert } from "lucide-react";

const ConfirmationModal = ({ onClose, clientId }) => {

    const handleClickAndDelete = async () => {
        const clientToDelete = await getClientById(clientId);
        const deletedClient = await deleteClient(clientToDelete._id);
        console.log("Deleted client: ", deletedClient);

        if (deletedClient) {
            setTimeout(() => onClose(), 2000);
            // TODO: add loader for UX optimization
            // TODO: implement error handling for edge cases
        }
    } 

    return (
        <>
            {/* inset-[value]: A shorthand for setting all four sides (top, right, bottom, left) to the same value.  */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-[#2a2a2a] rounded-2xl border border-neutral-800 shadow-2xl p-9 w-90 h-auto">
                    <div className="items-center">
                        <TriangleAlert className="text-white text-center text-3xl"/> 
                        <h1 className="font-onest text-3xl mb-2 text-white text-center">Are you sure?</h1>
                        <p className="font-onest text-md text-neutral-400 text-center">This action can't be undone. Please confirm if you want to proceed.</p>  
                        <div className="flex gap-x-10 mt-7 justify-between">
                            <button 
                                onClick={onClose}
                                id="cancel-btn"
                                className="bg-transparent hover:bg-[#8a70da] border border-[#967be7] transition-all duration-200 rounded-xl font-onest font-bold text-[#967be7] hover:text-white p-3 w-full">
                                    Cancel
                            </button>
                             
                            <button 
                                onClick={handleClickAndDelete}
                                id="delete-btn"
                                className="bg-[#967be7] hover:bg-[#8a70da] shadow-md hover:shadow-lg hover:shadow-[#967be7]/20 transition-all duration-200 rounded-xl font-onest font-bold text-white p-3 w-full"
                                >
                                    Delete
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}

export default ConfirmationModal;