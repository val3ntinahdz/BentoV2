import { deleteClient, getClientById } from "../../services/api";

const ConfirmationModal = ({ onClose, clientId }) => {

    const handleClickAndDelete = async () => {
        const clientToDelete = await getClientById(clientId);
        const deletedClient = await deleteClient(clientToDelete._id);
        console.log("Deleted client: ", deletedClient);

        if (deletedClient) {
            setTimeout(() => onClose(), 2000);
        }
    } 

    return (
        <>
            {/* inset-[value]: A shorthand for setting all four sides (top, right, bottom, left) to the same value.  */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
                <div className="bg-[#2a2a2a] rounded-2xl border border-neutral-800 shadow-2xl p-5">
                    <div className="flex items-center">
                        <h1 className="font-onest text-3xl mb-2 text-white">Are you sure you want to delete this element?</h1>
                        <div>
                            <button 
                                onClick={handleClickAndDelete}
                                id="delete-btn"
                                className="bg-blue rounded-xl font-onest"
                                >
                                    Delete
                            </button>

                            <button 
                                onClick={onClose}
                                id="cancel-btn"
                                className="bg-blue rounded-xl font-onest">
                                    Cancel
                            </button> 

                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )

}

export default ConfirmationModal;