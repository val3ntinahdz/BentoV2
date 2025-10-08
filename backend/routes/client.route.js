import { Router } from 'express';
import { createClient, deleteClient, getClient, getClients, updateClient } from '../controllers/client.controller.js';

const clientRouter = Router();

clientRouter.get('/', getClients);
clientRouter.get('/:id', getClient);
clientRouter.post('/', createClient)
clientRouter.put('/:id', updateClient)
clientRouter.delete('/:id', deleteClient)

export default clientRouter;