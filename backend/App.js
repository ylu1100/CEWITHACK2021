import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import {Routes} from './Routers/Router';

const app = express(); 


require('dotenv').config(); // secret file for keys
const port = process.env.PORT || 4000;
const uri = process.env.ATLAS_URI;

// var corsOptions = {
//     origin: origin,
//     optionsSuccessStatus: 200,
//     credentials: true,
//   }

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors(corsOptions));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

mongoose.connect(uri, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connected to MongoDB database");
}).catch(err =>{
    console.log(`Error : ${err}`);
})

Routes(app);

app.listen(port, () =>{
        console.log(`Server started in port ${port}`);
    }
);



