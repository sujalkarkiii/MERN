import { useState } from "react"
import { hadlelogin } from "../configuration/Api"
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const hadlesubmit=(e)=>{
    e.preventDefault();
    try{
      const response={email,password};
      hadlelogin(response);
    }
    catch(error){
      console.log("Error while register",error);
    }
  }



  return (
    <>
      <section>
        <div>
          <form onSubmit={hadlesubmit}>
            <div>
              <label htmlFor="email">Enter Email</label>
              <input type="gmail"
                value={email}
                name="email"
                onChange={e => setemail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Enter Password</label>
              <input type="text"
                value={password}
                name="password"
                onChange={e => setpassword(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          
        </div>
      </section>
      <div>
    <Link to="/register">Register</Link>
      </div>
    </>
  )
}

export default LoginPage
