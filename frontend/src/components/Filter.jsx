import Select from "react-select";

// eslint-disable-next-line react/prop-types
const Filter = ({ onFilterChange }) => { // Accepting prop to handle filter change
  const options = [
    { value: "", label: "All Notes" },
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

  const handleChange = (selectedOption) => {
    onFilterChange(selectedOption.value); // Pass selected category value to parent
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      <Select
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
        onChange={handleChange} // Trigger filter change
      />
    </div>
  );
};

export default Filter;
