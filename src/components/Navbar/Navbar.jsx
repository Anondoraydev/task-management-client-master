import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 flex flex-col lg:flex-row dark:bg-gray-800 dark:text-gray-400">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost rounded-md text-xl">
            {" "}
            <div className="w-10 h-10">
              <img src={logo} alt="logo" />
            </div>
            Task Manager
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-lg font-semibold" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-lg font-semibold" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-lg font-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
