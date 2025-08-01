import express from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser"
import cors from "cors"
import adminrouting from "./routes/adminRoutin.js";
import { connectdb } from "./database/connection.js";
import Routing from "./routes/routing.js";
import {createServer} from "http"

const app=express();
dotenv.config();
const port= process.env.PORT;

const server = createServer(app);





app.use(cookieparser());
app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173','http://localhost:5124'],
    credentials:true
}));

app.use("/api",Routing);
app.use("/admin",adminrouting)

connectdb().then(()=>{
    console.log("Connecting....")
    server.listen(port,()=>{
        console.log("Connected to DataBase Succefully...")
    })
})