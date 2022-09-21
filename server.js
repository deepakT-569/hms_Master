// imported module 
const express = require("express");
const cors = require("cors");
const app = express();   
const bodyParser = require("body-parser");


const  Router =require("./Router/router");

const path = require("path");
const PORT = process.env.PORT || 2000;

//Middlewares

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/",Router);

app.listen(PORT,()=>{
    console.log(`Server is connected to ${PORT}`);
})