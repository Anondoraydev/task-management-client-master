import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* <h1>Main layout</h1> */}
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
