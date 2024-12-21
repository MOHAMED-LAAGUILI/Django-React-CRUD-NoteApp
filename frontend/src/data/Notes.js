import { FaBriefcase, FaBook, FaUserAlt, FaRegFolder } from "react-icons/fa";
{/* Test Data */}
export const notes = [
  {
    title: "My First Note",
    body: "This is the content of the first note. It's a simple demo note, but the design is important.",
    slug: "my-first-note",
    category: "Work",
    created: "2024-01-01T10:30:00Z",
    updated: "2024-01-05T14:45:00Z",
  },
  {
    title: "Study Notes",
    body: "Here are some study notes for the week. Reviewing key concepts and preparing for exams.",
    slug: "study-notes",
    category: "Study",
    created: "2024-02-01T12:00:00Z",
    updated: "2024-02-02T16:15:00Z",
  },
  {
    title: "Personal Journal",
    body: "Reflecting on personal growth and life experiences. This journal helps track progress.",
    slug: "personal-journal",
    category: "Others",
    created: "2024-03-01T14:30:00Z",
    updated: "2024-03-02T18:25:00Z",
  },
  {
    title: "Meeting Notes",
    body: "Notes from our last meeting. We discussed upcoming tasks and deadlines for the project.",
    slug: "meeting-notes",
    category: "Work",
    created: "2024-04-01T11:15:00Z",
    updated: "2024-04-01T16:00:00Z",
  },
  {
    title: "Weekend Plan",
    body: "Planning my weekend getaway. Exploring new places and activities to do during the break.",
    slug: "weekend-plan",
    category: "Personal",
    created: "2024-05-10T09:00:00Z",
    updated: "2024-05-10T11:00:00Z",
  },
];

{/* category Colors Data */}

export const categoryColors = {
  Work: "bg-blue-500",
  Study: "bg-green-500",
  Personal: "bg-yellow-500",
  Others: "bg-gray-500",
};


{/* category Icons Data */}

export const categoryIcons = {
  Work: FaBriefcase,
  Study: FaBook,
  Personal: FaUserAlt,
  Others: FaRegFolder,
};
