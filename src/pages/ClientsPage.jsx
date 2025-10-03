import Button from "../components/Button";
import { ClientsTable } from "../components/ClientsTable";


const Clients = () => {
    return (
        <>
            <div className="justify-start">
                {/* TODO: ALIGN BUTTONS AND TABLE, ADD DELETE AND EDIT BUTTONS TO TABLE */}
                <ClientsTable />
            </div>
        </>
    )
}

export default Clients;