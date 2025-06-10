import { useContext, useState } from "react";
import Swal from "sweetalert2";
// Components
// import Logo from "../../Shared/Logo";
import MenuItem from "./Menuitem";
// import ToggleBtn from '../../Button/ToggleBtn'

// Icons
import { GrLogout } from "react-icons/gr";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { MdIncompleteCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useFetchTask from "../../../hooks/useFetchTask";
const Sidebar = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      logOut().then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message Send Successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "sweetalert-custom-popup",
            title: "sweetalert-custom-title", // Custom class for the title
            content: "sweetalert-custom-content", // Custom class for the content
            background: "sweetalert-custom-background",
          },
          backdrop: false,
        });
        navigate("/login");
      });
    }
  };

  const { data: todo } = useFetchTask("todo");
  const { data: ongoing } = useFetchTask("ongoing");
  const { data: complete } = useFetchTask("complete");

  //   const [toggle, setToggle] = useState(false)
  const [isActive, setActive] = useState(false);

  //   For guest/host menu item toggle button
  //   const toggleHandler = event => {
  //     setToggle(event.target.checked)
  //   }
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className=" text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold dark:text-gray-300">
            Logo
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none dark:text-gray-300 focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between dark:bg-gray-900 overflow-x-hidden bg-white  border-r-2 dark:border-gray-800  w-64 space-y-6 pl-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full  md:flex py-3 rounded-l-lg  items-center  bg-success mx-auto">
              <Link to="/" className="text-xl pl-4 font-semibold text-gray-100">
                Task Management
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}
            {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
            <nav>
              <MenuItem
                icon={MdOutlineDashboardCustomize}
                label="Dashboard"
                address="/dashboard"
              />

              <MenuItem
                icon={IoAddCircleOutline}
                label="New Task"
                address="/dashboard/new-task"
              />
              <MenuItem
                icon={CiBoxList}
                label="Todo List"
                address="/dashboard/todo-list"
                count={todo?.length}
              />
              <MenuItem
                icon={MdOutlineCallMissedOutgoing}
                label="Ongoing List"
                address="/dashboard/ongoing-list"
                count={ongoing?.length}
              />
              <MenuItem
                icon={MdIncompleteCircle}
                label="Complete List"
                address="/dashboard/complete-list"
                count={complete?.length}
              />
              <MenuItem
                icon={AiOutlineUserAdd}
                label="Profile"
                address="/dashboard/profile"
              />

              {/* Menu Items */}
            </nav>
          </div>
        </div>

        <div>
          <div className="dark:h-[3px] h-[2px] w-full bg-gray-200 dark:bg-gray-800"></div>
          <MenuItem
            icon={FcSettings}
            label="Settings"
            address="/dashboard/settings"
          />
          <button
            onClick={handleLogout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium dark:text-gray-300">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
