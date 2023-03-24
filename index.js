const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv');
require('./config/conn');
require('dotenv').config();
//Creating an app from express
const app = express();
const route = require('./routes/userRoute');

//Using express.json to get request of json data
app.use(express.json());

//Configuring cookie-parser
app.use(cookieParser()); 

//Using routes
app.use('/api', route);
//listening to the server
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at ${process.env.PORT}`);
})
