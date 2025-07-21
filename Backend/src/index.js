import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./database/connection.js";
const app=express();
dotenv.config();
const port= process.env.PORT;




connectdb().then(()=>{
    console.log("Connecting....")
    app.listen(port,()=>{
        console.log("Connected to DataBase Succefully...")
    })
})