import Button from "../components/Button";
import { ClientsTable } from "../components/ClientsTable";


const Clients = () => {
    const [ clientCreated, setClientCreated ] = useState({});
    
    return (
        <>
            <div className="justify-start">
                <ClientsTable />
            </div>
        </>
    )
}

export default Clients;