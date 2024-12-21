import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 mb-4 lg:mb-0">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.X34xoRs53B-JXX22h_3WyAHaF7&pid=Api&P=0&h=180"
            className="h-12 w-12 rounded-full border border-white shadow-md"
            alt="Logo"
          />
          <span className="text-xl font-semibold text-gray-200 tracking-wider">TinyNotes</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 text-xl text-gray-400">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="hover:text-gray-300 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="hover:text-gray-300 transition-colors duration-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 lg:mt-0 text-gray-400 text-center lg:text-right">
          <p>&copy; {new Date().getFullYear()} TinyNotes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
