import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

function MainLayout() {

  return (
    <div className="min-h-screen bg-[#f7f7f7] dark:bg-gray-800">
      {/* AppNavbar */}
      <Navbar />

      {/* Main Content */}
      <div className="">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer className="mt-auto" />

      <ToastContainer/>
    </div>
  );
}

export default MainLayout;
