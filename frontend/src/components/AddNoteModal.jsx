import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import { categoryColors } from '../data/Notes';

// eslint-disable-next-line react/prop-types
const AddNoteModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic client-side validation
    if (!title || !category || !body) {
      toast.error('Please fill in all fields!');
      return;
    }
  
    const newNote = {
      title: title,
      category: category,
      slug: title.replace(" ", "-"),
      body: body
    };
  
    try {
      // Send the request with the note data
      const response = await axios.post('http://127.0.0.1:8000/notes', newNote)
      
      // Append the new note to the existing notes array (check if state is updating)
      console.log("New note response:", response.data);
  
       toast.success('Note added successfully!');
      onClose();
      setTitle('');
      setCategory('');
      setBody('');
      window.location.reload()

    window.location.href ="/";
    } catch (e) {
      console.error('Error details:', e.response || e);
      toast.error(`Failed to add note. ${e.message}`);
    }
  };
  
  useEffect(() => {
    
  }, []);
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Note</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Select a category</option>
              {Object.keys(categoryColors).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            ></textarea>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 hover:via-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNoteModal;
