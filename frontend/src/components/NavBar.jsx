import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import AddNoteModal from './AddNoteModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md dark:bg-gray-700 dark:backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.X34xoRs53B-JXX22h_3WyAHaF7&pid=Api&P=0&h=180"
            className="h-14 w-14 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            alt="Logo" />
          <span className=" text-2xl font-extrabold text-gray-800 dark:text-white tracking-wider hover:text-gray-600 transition-colors duration-300">
            TinyNotes
          </span>
        </Link>

       
        {/* Add Note Button and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={openModal}
            className="inline-flex items-center bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 hover:via-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 hover:scale-105"
            aria-label="Add new note"
          >
            <AiOutlinePlus className="mr-2 text-2xl" />
            Add Note
          </button>
        </div>
      </div>

      {/* Add Note Modal */}
      <AddNoteModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;

