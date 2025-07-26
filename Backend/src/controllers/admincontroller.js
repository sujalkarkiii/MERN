import mongoose from "mongoose";
import add from "../models/addProduct.js";

export const adddata=async(req,res)=>{
    try{
        const {name,description,price}=req.body;
        const image =req.file;

        console.log(price)
        const responses= new add({
            name,
            description,
            price,
            image:image.path
        })
        responses.save();
        res.status(200).json({'message':'Succsfully saved the file'})

    }
    catch(error){
        console.log("Error while posting data",error);
        res.status(500).json({'message':'Error while posting data'})
    }
}