import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import  {addUser}  from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant"

const Login = () =>{

    const [email , setEmail] = useState("tapu@gmail.com");
    const [password , setPassword] = useState("Tapu@123");
    const [error , setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = async() =>{
      
      try{
        const res = await axios.post(BASE_URL+"/login",{
            email , password
        },{
          withCredentials:true
        })
        dispatch(addUser(res.data))
        return navigate("/")
      }
      catch(err){
        setError(err?.response?.data || "Something went wrong")
        console.error(err);
        
      }
    }

    return (
  <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="card w-96 bg-gray-800 text-white shadow-2xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-4">Welcome Back 👋</h2>

        <div className="flex flex-col gap-4">
          <label className="input input-bordered flex items-center gap-2 bg-gray-700 text-white border-none focus-within:ring-2 focus-within:ring-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
            </svg>
            <input type="email" value={email} className="grow bg-transparent text-white placeholder-gray-400" 
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email" />
          </label>

          <label className="input input-bordered flex items-center gap-2 bg-gray-700 text-white border-none focus-within:ring-2 focus-within:ring-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd"/>
            </svg>
            <input type="password" value={password} className="grow bg-transparent text-white placeholder-gray-400"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
          </label>
        </div>
        <p className="text-red-500">{error}</p>
        <div className="card-actions mt-6">
          <button className="btn btn-primary w-full"
           onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  </div>
)

}

export default Login