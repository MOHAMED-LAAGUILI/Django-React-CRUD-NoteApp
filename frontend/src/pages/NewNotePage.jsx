// NewNote.jsx
import { useState } from "react";
import Select from "react-select";

const NewNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you're handling the state or making an API request to save the note
    const newNote = { title, content, category };

    console.log("New Note:", newNote);
    // You can replace this with your API call to save the note.
  };

  const options = [
    { value: "Work", label: "Work" },
    { value: "Personal", label: "Personal" },
    { value: "Study", label: "Study" },
    { value: "Others", label: "Others" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "rgba(255, 255, 255, 0.9)",
      borderColor: state.isFocused ? "#38bdf8" : "#d1d5db",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(56, 189, 248, 0.5)" : "none",
      "&:hover": {
        borderColor: "#38bdf8",
      },
      borderRadius: "0.75rem",
      padding: "0.3rem",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 10,
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "#38bdf8" : "transparent",
      color: state.isFocused ? "#ffffff" : "#374151",
      cursor: "pointer",
      "&:active": {
        background: "#0284c7",
      },
    }),
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">Title</label>
          <input
            id="title"
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600">Content</label>
          <textarea
            id="content"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            rows="5"
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600">Category (optional)</label>
          <Select
  onChange={(selectedOption) => setCategory(selectedOption ? selectedOption.value : "")}
  options={options}
  defaultValue={options[0]}
  styles={customStyles}
  placeholder="Filter Notes..."
  className="text-gray-800"
  theme={(theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#dbeafe",
      primary: "#3b82f6",
    },
  })}
/>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default NewNote;
