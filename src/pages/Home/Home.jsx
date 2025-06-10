import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Use from "../../components/Use/Use";
const Home = () => {
  return (
    <div>
      <div className="flex h-[calc(100vh-70px)] justify-center dark:bg-gray-900 items-center text-center">
        <div className="space-y-4">
          <div className="w-36 mx-auto" data-aos="zoom-in">
            <img className="h-full  w-full mx-auto" src={logo} alt="logo" />
          </div>
          <h1 className="text-3xl dark:text-gray-400 font-bold">
            Task Management
          </h1>
          <div>
            <Link to="/dashboard">
              <button className="btn btn-md  btn-primary">
                <span>Let’s Explore</span>
                <FaLongArrowAltRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Use />
    </div>
  );
};

export default Home;
