import axios from "axios"
export const hadleaddproduct= async(responses)=>{
    try{
         const response=await axios.post("http://localhost:8000/admin/data",responses,{
            withCredentials:true
        });
        console.log(response.data.message)
        alert(response.data.message)
    }
    catch(error){
        console.log("Error while register",error);
    }
}