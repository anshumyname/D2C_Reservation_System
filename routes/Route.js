import express , {Router } from 'express';
import { updateData, getData } from '../controller/seats.js';


const route = express.Router();

route.post('/update', updateData);
route.get('/getseats', getData);


export default route;