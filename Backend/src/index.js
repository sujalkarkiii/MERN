import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser"
import cors from "cors"

import { connectdb } from "./database/connection.js";
import Routing from "./routes/routing.js";



const app=express();
dotenv.config();
const port= process.env.PORT;

app.use(cookieparser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));

app.use("/api",Routing);

connectdb().then(()=>{
    console.log("Connecting....")
    app.listen(port,()=>{
        console.log("Connected to DataBase Succefully...")
    })
})