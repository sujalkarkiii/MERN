import axios from "axios"
export const handleregister= async(responses)=>{
    try{
         const response=await axios.post("http://localhost:8000/api/register",responses,{
            withCredentials:true
        });
        console.log(response.data.message)
    }
    catch(error){
        console.log("Error while register",error);
    }
}
// export const handlelogin= async(responses)=>{
//     try{
//          await axios.post("http://localhost:8000/register",,{
//             withCredentials=true
//         });
//     }
//     catch(error){
//         console.log("Error while register",error);
//     }
// }