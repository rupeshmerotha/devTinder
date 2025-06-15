const Card = ({ user }) => {
  return (
    <div className="card w-96 bg-gray-800 text-white shadow-2xl">
      <div className="card-body items-center">
        <h2 className="text-xl mb-4">Profile</h2>

        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-600 mb-4">
          <img src={user.photoUrl} alt="Profile" className="object-cover w-full h-full" />
        </div>

        <div className="text-center space-y-2">
          <div className="text-lg font-semibold">{user.firstName} {user.lastName}</div>
          <div className="text-sm text-gray-400">{user.age} years | {user.gender}</div>
          <div className="text-sm text-gray-300">{user.about}</div>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-blue-700 transition">
            Ignore ❎
          </button>
          <button className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-pink-800 transition">
            Interested ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
