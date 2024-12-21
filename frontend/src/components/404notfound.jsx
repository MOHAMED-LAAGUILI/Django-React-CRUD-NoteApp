import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="inline-flex items-center bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 hover:via-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105"
      >
        <AiOutlineHome className="mr-2 text-2xl" />
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
