import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";

const ClientDetailsSidebar = ({ isOpen, clientData, onClose }) => {
    //const [ isOpen, setIsOpen ] = useState(false); // lift state up
    const [ clientDetails, setClientDetails ] = useState([]);
    console.log("Sidebar rendering", isOpen, clientData)

    // Update clientDetails when clientData changes
    useEffect(() => {
        setClientDetails(clientData || []);
    }, [clientData]);

    return (
       <>
            <AnimatePresence>
                {/* rendering client details here if isOpen is true */}
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed inset-y-0 right-0 w-full max-w-md z-50"
                        >
                            <div className="h-full bg-gradient-to-br from-[#2a2a2a] to-[#252525] border-l border-neutral-800 shadow-2xl">
                                <div className="p-9 border-b border-neutral-800">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-onest text-xl font-bold text-white">
                                            About this client
                                        </h2>
                                        <button
                                            onClick={onClose}
                                            className="text-neutral-400 hover:text-white transition-colors duration-200"
                                        >
                                            <XCircle />
                                        </button>
                                    </div>
                                </div>

                                
                                <div className="p-6 overflow-y-auto h-full">
                                    {clientDetails ? (
                                        <div className="space-y-6">
                                            {/* Client Info Card */}
                                            <div className="bg-neutral-800/30 rounded-xl p-4 border border-neutral-700/50">
                                                <h3 className="font-onest text-lg font-semibold text-white mb-3">
                                                    {clientDetails.name}
                                                </h3>
                                                <div className="space-y-2">
                                                    <p className="font-onest text-neutral-300 flex items-center gap-2">
                                                        🏢 {clientDetails.company}
                                                    </p>
                                                    
                                                    <p className="font-onest text-neutral-300 flex items-center gap-2">
                                                        📞 {clientDetails.phone}
                                                    </p>

                                                    <p className="font-onest text-neutral-300 flex items-center gap-2">
                                                        📧 {clientDetails.email}
                                                    </p>
                                                </div>
                                            </div>

                                            
                                            <div className="flex gap-2">
                                                <span className="bg-[#967be7]/20 text-[#967be7] border border-[#967be7]/30 px-3 py-1 rounded-full text-sm font-onest font-bold">
                                                    Status: {clientData.status}
                                                </span>
                                            </div>

                                            
                                            <div className="flex gap-3 pt-4">
                                                <button className="flex-1 bg-[#967be7] hover:bg-[#8a70da] text-white font-onest font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                                                    Edit
                                                </button>
                                                <button className="flex-1 bg-transparent border border-neutral-600 hover:border-neutral-400 text-neutral-300 hover:text-white font-onest font-semibold py-2 px-4 rounded-lg transition-all duration-200">
                                                    Message
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center text-neutral-400 font-onest">
                                            Loading client details...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
       </> 
    )
}
export default ClientDetailsSidebar;