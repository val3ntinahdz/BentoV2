import Button from "../components/Button";
import { ClientsTable } from "../components/ClientsTable";


const Clients = () => {
    return (
        <>
            <div className="justify-start">
                <h1>Clients table coming soon!</h1>
                <div>
                    <Button onClick={() => alert("First button clicked")} 
                    id="create-client-button"
                    children={
                        "Create new client"
                    }
                    disabled={ false }

                    className="bg-[#967be7] hover:bg-[#8a70da] text-white font-onest font-bold py-2 px-4 rounded-2xl mb-7"
                    />
                </div>
                
                {/* TODO: ALIGN BUTTONS AND TABLE, ADD DELETE AND EDIT BUTTONS TO TABLE */}
                <ClientsTable />
            </div>
        </>
    )
}

export default Clients;