import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constant"
import axios from "axios"
import { removeUser } from "../utils/userSlice"

const Navbar = () =>{
    const user = useSelector((store)=>store.user)  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout= async()=>{
      await axios.post(BASE_URL+"/logout",{}, {withCredentials:"true"})
      dispatch(removeUser())
      return navigate("/login")
    }
     return (
    <div className="navbar bg-gray-850 bg-opacity-80 backdrop-blur-md text-white px-6 shadow-lg border-b border-gray-700">
      <div className="flex-1 mx-4">
        <Link to="/" className="text-2xl font-bold text-white hover:text-primary transition-all cursor-pointer flex items-center gap-2">🧑‍💻DevTinder</Link>
      </div>

  <div className="flex-none gap-4 items-center">

    {user && (
  <div className="dropdown dropdown-end mx-4">
    <div tabIndex={0} role="button" className="btn btn-circle btn-ghost hover:bg-gray-800 transition">
      <div className="w-12 h-12 rounded-full border border-gray-700 overflow-hidden">
        <img
          alt="User Photo"
          src={user.photoUrl}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-lg shadow-lg mt-3 w-52 p-2"
    >
      <li>
        <Link to="/profile" className="justify-between">
          Profile
        </Link>
      </li>
      <li><a>Settings</a></li>
      <li><a onClick={handleLogout}>Logout</a></li>
    </ul>
  </div>
)}

  </div>
    </div>


  )
}

export default Navbar