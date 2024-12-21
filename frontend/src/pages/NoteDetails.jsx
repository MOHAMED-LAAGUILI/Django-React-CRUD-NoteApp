import { useParams, useNavigate } from "react-router-dom";
import { categoryColors, categoryIcons } from "../data/Notes";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

export default function NoteDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedNote, setEditedNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/notes/${slug}`);
        setNote(response.data);
        setEditedNote(response.data);
        setLoading(false);
      } catch (e) {
        setError(`Failed to fetch the note ${e}`);
        setLoading(false);
        toast.error(`Failed to fetch the note ${e}`);
      }
    };

    fetchNote();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        <h2 className="text-2xl font-semibold">{error}</h2>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        <h2 className="text-2xl font-semibold">Note Not Found</h2>
        <p>The note you are looking for does not exist.</p>
      </div>
    );
  }

  const { title, category, body, created, updated } = note;
  const IconComponent = categoryIcons?.[category];

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/notes/${slug}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (e) {
      toast.error(`Failed to delete the note: ${e}`);
    }
    setShowDeleteConfirm(false);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:8000/notes/${slug}`, editedNote);
      setNote(response.data);
      setShowEditModal(false);
      toast.success("Note updated successfully!");
    } catch (e) {
      toast.error(`Failed to update the note: ${e}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
          <div className="flex items-center space-x-2">
            {IconComponent && (
              <span
                className={`inline-flex items-center text-white text-xs font-semibold py-1 px-3 rounded-full ${
                  categoryColors[category] || "bg-gray-300"
                }`}
              >
                <IconComponent className="mr-1" />
                <span>{category}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>

          <p className="text-gray-700 dark:text-gray-300">{body}</p>

          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            <p>
              Created:{" "}
              {new Date(created).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              Updated:{" "}
              {new Date(updated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={handleEdit}
              className="text-primary font-semibold py-2 px-4 border border-primary rounded-md hover:bg-primary hover:text-white"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 font-semibold py-2 px-4 border border-red-600 rounded-md hover:bg-red-600 hover:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Confirm Deletion
            </h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Are you sure you want to delete this note?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Edit Note
            </h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={editedNote.title}
                  onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  value={editedNote.category}
                  onChange={(e) => setEditedNote({ ...editedNote, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                >
                  {Object.keys(categoryColors).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Body
                </label>
                <textarea
                  id="body"
                  value={editedNote.body}
                  onChange={(e) => setEditedNote({ ...editedNote, body: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-black bg-green-300 rounded-md hover:bg-dark"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}