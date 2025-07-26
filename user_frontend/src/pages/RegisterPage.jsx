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
    <section>
      <div>
        <form>
          <div>
            <label htmlFor="username">Enter Your Name</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="useremail">Enter Your Email</label>
            <input
              type="email"
              name="useremail"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="userpass">Enter Your Password</label>
            <input
              type="text"
              name="userpass"
              value={userpassword}
              onChange={(e) => setUserpassword(e.target.value)}
            />
          </div>
          <div className="div">
            <button onClick={hadleClick}>Submit</button>
          </div>



        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
