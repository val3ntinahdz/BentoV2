import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// Router
import clientRouter from './routes/client.route.js';
const app = express();

// Middleware
app.use(cors());
app.use(json());

const PORT = 3000;

app.use('/clients', clientRouter);

// Routes
app.get('/', (req, res) => {
	res.send('HELLO');
});

app.get('/health', (req, res) => {
	res.json({ status: "Server is correctly running!" });
});

// TODO: Add error handler

// Connect MongoDB database
mongoose.connect('mongodb+srv://valentinaleon_db_user:C0xEv60CSdXErkcV@cluster0.6gvet0m.mongodb.net/bento_database?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  console.log('Connected MongoDB database!');
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
  });

})
.catch((error) => console.log("Connection failed!", error.message));

