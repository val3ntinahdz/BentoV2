import Client from "../models/client.model.js";

const getClients = async (req, res ) => {
    try {
        const clients = await Client.find({});
        console.log("All clients", clients)
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findById(id);
        console.log("Found client by Id:", client);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createClient = async (req, res) => {
     try {
        console.log("Received data", req.body);
        const client = await Client.create(req.body);
        res.status(200).json(client);

    } catch (error) {
        console.log("Full error", error);
        res.status(500).json({ message: error.message });
        
    }
}

const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByIdAndUpdate(id, req.body);

        if (!client) {
            return res.status(404).json({ message: "Client not found" })
        }
        
        const updatedClient = await Client.findById(id);
        console.log(updatedClient);
        res.status(200).json(updatedClient);

    } catch (error) {
        console.log("Full error", error);
        res.status(500).json({ message: error.message });
        
    }
}

const deleteClient = async (req, res) => {
     try {
        const { id } = req.params;
        const client = await Client.findByIdAndDelete(id)
        console.log("Client to delete", client);

        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({ message: "Client deleted succesfully" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });  
    }
}

export { 
    getClients,
    getClient, 
    createClient,
    updateClient,
    deleteClient,
}