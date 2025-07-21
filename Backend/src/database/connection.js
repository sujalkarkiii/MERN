import mongoose from "mongoose"

export const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.BASE_URI);
         console.log("connecting to DataBase");
    }
    catch(error)
    {
        console.log("Error connecting to BataBase",error)
    }
}
