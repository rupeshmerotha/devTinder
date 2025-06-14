function App() {
  return (
    <div className="navbar bg-gray-900 text-white px-6 shadow-lg">
      <div className="flex-1 mx-4">
        <a className="text-2xl font-bold text-white hover:text-primary transition-all cursor-pointer flex items-center gap-2">🧑‍💻DevTinder</a>
      </div>

  <div className="flex-none gap-4 items-center">

    <div className="dropdown dropdown-end mx-4">
      <div tabIndex={0} role="button" className="btn btn-circle btn-ghost hover:bg-gray-800 transition">
        <div className="w-10 rounded-full border border-gray-700">
          <img
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-lg shadow-lg mt-3 w-52 p-2"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge badge-primary badge-sm">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
    </div>


  )
}

export default App
