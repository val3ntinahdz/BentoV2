import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
// Middleware
app.use(cors());
app.use(json());

const PORT = 3001;

let clients = [
  { 
    id: '1', 
    name: 'Juan Pérez', 
    company: 'Tech SA', 
    email: 'juan@tech.com', 
    phone: '951-123-4567', 
    project: 'Website Redesign' 
  },
  { 
    id: '2', 
    name: 'María López', 
    company: 'Design Studio', 
    email: 'maria@design.com', 
    phone: '951-234-5678', 
    project: 'Branding' 
  }
];

// Routes
app.get('/', (req, res) => {
	res.send('HELLO');
});

app.get('/clients', (req, res) => {
	res.json(clients);
    console.log(clients);
});

app.get('/health', (req, res) => {
	res.json({ status: "Server is correctly running!" });
});


app.get("/clients", (req, res) => {
    res.json(clients);
})

// // Error handler
// app.use((err, req, res, next) => {
// 	console.error(err);
// 	res.status(500).json({ error: 'Internal Server Error' });
// });

// Connect database
mongoose.connect('mongodb+srv://valentinaleon_db_user:C0xEv60CSdXErkcV@cluster0.6gvet0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log('Connected MongoDB database!');
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
  });

})
.catch((error) => console.log("Connection failed!", error.message));

