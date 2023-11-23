import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import "../assets/styles/profile.css";
import { db } from "../firebase";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  function onLogout() {
    auth.signOut();
    navigate("/sign-in");
  }

  function onChange(e) {
    const { id, value } = e.target;
    // console.log("onChange triggered:", id, value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update name in firebase authentication
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        //update name in firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name: name,
        });
      }
      toast.success("Profile details Updated");
    } catch (error) {
      toast.error("Could not update the profile");
    }
  }

  return (
    <div className="profile-container ">
      <h1 className="pf-heading text-3xl font-semibold text-center my-7">
        Profile
      </h1>
      <form className="pf-form flex flex-col gap-4">
        <input
          type="text"
          id="name"
          value={name}
          disabled={!changeDetail}
          onChange={onChange}
          className={`profile-input ${changeDetail && "edit-change"}`}
        />
        <input
          type="email"
          value={email}
          id="email"
          disabled
          className="profile-input border p-3 rounded-lg"
        />

        <span
          onClick={() => {
            changeDetail && onSubmit();
            setChangeDetail((prevState) => !prevState);
          }}
          className="pf-update-btn"
        >
          {changeDetail ? "Apply changes" : "Edit"}
        </span>
      </form>
      <div className="pf-op flex justify-between mt-5">
        <span
          onClick={onLogout}
          className="pf-signout-btn text-red-700 cursor-pointer"
        >
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
