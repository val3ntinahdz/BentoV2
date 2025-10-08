import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Import Client model
import Client from './models/client.model.js';

const app = express();
// Middleware
app.use(cors());
app.use(json());

const PORT = 3001;

// Routes
app.get('/', (req, res) => {
	res.send('HELLO');
});

// Get all the clients
app.get('/clients', async (req, res) => {
	try {
        const clients = await Client.find({});
        console.log("All clients", clients)
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Save data in the database
app.post('/clients/new', async (req, res) => {
    try {
        console.log("Received data", req.body);
        const client = await Client.create(req.body);
        res.status(200).json(client);

    } catch (error) {
        console.log("Full error", error);
        res.status(500).json({ message: error.message });
        
    }
})

app.get('/health', (req, res) => {
	res.json({ status: "Server is correctly running!" });
});

// Add error handler

// Connect database
mongoose.connect('mongodb+srv://valentinaleon_db_user:C0xEv60CSdXErkcV@cluster0.6gvet0m.mongodb.net/bento_database?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log('Connected MongoDB database!');
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
  });

})
.catch((error) => console.log("Connection failed!", error.message));

