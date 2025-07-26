import express from "express";
import upload from "../middleware/mullter.js";
import { adddata } from "../controllers/admincontroller.js";
const adminrouting=express.Router();


adminrouting.post('/data',upload.single("image"),adddata)
export default adminrouting;