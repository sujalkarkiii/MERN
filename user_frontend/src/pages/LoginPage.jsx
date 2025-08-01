import { useState } from "react"
import { hadlelogin } from "../configuration/Api"
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const hadlesubmit = (e) => {
    e.preventDefault();
    try {
      const response = { email, password };
      hadlelogin(response);
    }
    catch (error) {
      console.log("Error while register", error);
    }
  }



  return (
  
  <>
  <section className="flex flex-col items-center justify-center min-h-screen px-4">
    <div
      className="
        max-w-md w-full bg-cyan-50 rounded-lg shadow-md font-sans
        sm:max-w-lg sm:px-6
        md:max-w-xl md:px-8
        lg:max-w-2xl lg:px-10
        py-6
      "
    >
      <form
        onSubmit={hadlesubmit}
        className="
          space-y-5
          sm:space-y-6
          md:space-y-7
        "
      >
        <div>
          <label
            htmlFor="email"
            className="
              block mb-1 text-sm font-semibold text-gray-700
              sm:text-base
              md:text-lg
            "
          >
            Enter Email
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="you@example.com"
            className="
              w-full px-3 py-2 border border-gray-300 rounded-md
              text-sm
              sm:text-base
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="
              block mb-1 text-sm font-semibold text-gray-700
              sm:text-base
              md:text-lg
            "
          >
            Enter Password
          </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Your password"
            className="
              w-full px-3 py-2 border border-gray-300 rounded-md
              text-sm
              sm:text-base
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full bg-indigo-500 text-white font-bold py-2 rounded-md
            text-sm
            sm:text-base
            hover:bg-indigo-600 transition-colors
          "
        >
          Submit
        </button>
      </form>
    </div>

    <div
className="
  max-w-md w-full mt-4 
  sm:max-w-lg
  md:max-w-xl
"
    >
      <Link
        to="/register"
  className="text-white font-semibold text-sm sm:text-base border bg-indigo-500 p-2 rounded-md hover:bg-indigo-600"
      >
        Register
      </Link>
    </div>
  </section>
</>

  
  )
}

export default LoginPage
