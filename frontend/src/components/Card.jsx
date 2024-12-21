import { Link } from "react-router-dom";
import { categoryColors, categoryIcons } from "../data/Notes";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { toast } from "react-toastify";
import Filter from "./Filter"; // Importing Filter component

export default function Card() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Store selected category

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/notes");
        setNotes(res.data);
        setFilteredNotes(res.data); // Initially display all notes
        toast("Notes fetched");
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(
            `Failed to load notes. Please try again later. ${err.message}`
          );
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Filter notes when category is selected
  useEffect(() => {
    if (selectedCategory) {
      setFilteredNotes(
        notes.filter((note) => note.category === selectedCategory)
      );
    } else {
      setFilteredNotes(notes); // Show all notes if no category selected
    }
  }, [selectedCategory, notes]);

  return (
    <main className="min-h-screen w-[100%]">
      {/* Page Header */}
      <div className="px-4 sm:px-6 lg:px-8 ">
        {/* Filter Component */}
        <Filter onFilterChange={setSelectedCategory} /> {/* Pass setSelectedCategory to Filter */}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        )}

        {/* Error State */}
        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        {/* Notes Grid */}
        {!loading && !error && filteredNotes.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {filteredNotes.map((note) => {
              const IconComponent =
                categoryIcons[note.category] || (() => null);
              return (
                <Link
                  to={`/notes/${note.slug}`}
                  key={note.slug || note.id}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                    {/* Header Accent */}
                    <div
                      className="h-2"
                      style={{
                        backgroundColor:
                          categoryColors[note.category]?.replace("bg-", "") ||
                          "#ccc",
                      }}
                    ></div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      {/* Note Title */}
                      <h2
                        className={`text-lg font-semibold text-gray-900 dark:text-white border-l-4 pl-4`}
                        style={{
                          borderColor:
                            categoryColors[note.category]?.replace("bg-", "") ||
                            "#ccc",
                        }}
                      >
                        {note.title}
                      </h2>

                      {/* Note Body (Limited to 100 characters) */}
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {note.body.length > 100
                          ? `${note.body.slice(0, 100)}...`
                          : note.body}
                      </p>

                      {/* Note Metadata */}
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                        <p>
                          Created:{" "}
                          {new Date(note.created).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p>
                          Updated:{" "}
                          {new Date(note.updated).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-6 pb-6">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center text-white text-xs font-semibold py-1 px-3 rounded-full ${
                            categoryColors[note.category] || "bg-gray-500"
                          }`}
                        >
                          <IconComponent className="mr-1" />
                          <span>{note.category}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* No Notes State */}
        {!loading && !error && filteredNotes.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No notes available.</p>
        )}
      </div>
    </main>
  );
}
