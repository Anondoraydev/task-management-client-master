import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div>
        <h1 className="text-3xl dark:text-gray-400 font-semibold text-gray-600">
          Profile
        </h1>
      </div>
      <div className="flex text-center justify-center items-center h-[calc(100vh-210px)]">
        <div className="text-center">
          <div className="w-36 h-36 mx-auto" data-aos="zoom-in">
            <img
              className="rounded-full w-full h-full"
              src={user?.photoURL}
              alt="profileImage"
            />
          </div>
          <h1 className="text-2xl mt-4 dark:text-gray-300 font-semibold">
            Welcome, {user?.displayName} {/* Corrected typo in 'Welcome' */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
