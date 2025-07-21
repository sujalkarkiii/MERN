import express from "express";
import { register,login } from "../controllers/authenticcation.js";
const Routing=express.Router();
Routing.post("/register",register)
Routing.post("/login",login)


export default Routing;