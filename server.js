import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Route from './routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config()
const app = express()



const PORT = process.env.PORT || 8000;



const username = process.env.MONG_USERNAME;
const password = process.env.MONG_PASSWORD;


const URl = 'mongodb://'+username+':'+password + '@bookingapp-shard-00-00.nkciw.mongodb.net:27017,bookingapp-shard-00-01.nkciw.mongodb.net:27017,bookingapp-shard-00-02.nkciw.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-h2xbfy-shard-0&authSource=admin&retryWrites=true&w=majority'


Connection(process.env.MONGODB_URI || URl)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('reservation/build'))
}

app.listen(PORT,() => console.log('Server is runnign on port '+ PORT ));
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Route);  