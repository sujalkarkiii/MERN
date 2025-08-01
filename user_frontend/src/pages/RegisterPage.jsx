import { useState } from "react";
import { handleregister } from "../configuration/Api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
const navigate= useNavigate();



  const hadleClick= async(e)=>{
    e.preventDefault();
    try{

      const responses={email:useremail,
        username:username,
        password:userpassword};
       handleregister(responses);
       navigate('/')
    }
    catch(error)
    {
      console.log("Error while  Register",error)
    }
  }




  return (
<section className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <form className="space-y-5">
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Enter Your Name
        </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="useremail"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Enter Your Email
        </label>
        <input
          type="email"
          name="useremail"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="userpass"
          className="block mb-2 text-sm font-semibold text-gray-700"
        >
          Enter Your Password
        </label>
        <input
          type="password"
          name="userpass"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your password"
        />
      </div>

      <div>
        <button
          type="button"
          onClick={hadleClick}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>

  );
};

export default RegisterPage;
