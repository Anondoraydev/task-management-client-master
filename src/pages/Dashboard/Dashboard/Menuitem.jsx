/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuItem = ({ label, address, icon: Icon, count }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-800    ${
          isActive
            ? "bg-gray-300 dark:bg-gray-800  text-gray-700 "
            : "text-gray-600  dark:text-gray-300 "
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
      {count && (
        <div className="bg-success p-2  rounded-full text-xs h-6 flex justify-center items-center font-semibold text-gray-200">
          {count}
        </div>
      )}
    </NavLink>
  );
};

export default MenuItem;
