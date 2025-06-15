import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age: Number(age), about, gender, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-900 gap-10 p-10">

      {/* Edit Profile Form */}
      <div className="card w-96 bg-gray-800 text-white shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-4 text-center">Edit Profile 🖋️</h2>

          <div className="flex flex-col gap-4">
            <InputField label="First Name" value={firstName} onChange={setFirstName} />
            <InputField label="Last Name" value={lastName} onChange={setLastName} />
            <InputField label="Age" value={age} onChange={setAge} type="number" />
            <InputField label="Gender" value={gender} onChange={setGender} />
            <InputField label="Photo URL" value={photoUrl} onChange={setPhotoUrl} />
            <InputField label="About" value={about} onChange={setAbout} />
          </div>

          <div className="card-actions mt-6">
            <button onClick={saveProfile} className="btn btn-primary w-full">Save Profile</button>
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="flex flex-col items-center"> {/* Add this wrapper */}
  <div className="card w-96 bg-gray-800 text-white shadow-2xl">
    <div className="card-body items-center">
      <h2 className="text-xl mb-4">Live Preview</h2>
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-600 mb-4">
        <img src={photoUrl} alt="Profile" className="object-cover w-full h-full" />
      </div>
      <div className="text-center space-y-2">
        <div className="text-lg font-semibold">{firstName} {lastName}</div>
        <div className="text-sm text-gray-400">{age} years | {gender}</div>
        <div className="text-sm text-gray-300">{about}</div>
      </div>
    </div>
  </div>

  {/* Success Alert - will appear directly below */}
  {success && (
    <div role="alert" className="alert alert-success mt-4 w-full max-w-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Your profile is updated successfully!</span> 
    </div>
  )}
</div>

    </div>
  );
};

const InputField = ({ label, value, onChange, type = "text" }) => (
  <label className="input input-bordered flex items-center gap-2 bg-gray-700 text-white border-none focus-within:ring-2 focus-within:ring-primary">
    <input
      type={type}
      value={value}
      className="grow bg-transparent text-white placeholder-gray-400"
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
    />
  </label>
);

export default EditProfile;
