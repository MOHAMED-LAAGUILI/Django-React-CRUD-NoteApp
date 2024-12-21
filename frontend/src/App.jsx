import NotFound from "./components/404notfound";
import MainLayout from "./layouts/mainLayout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewNote from "./pages/NewNotePage";
import NoteDetail from "./pages/NoteDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new-note" element={<NewNote />} /> 
          <Route path="/notes/:slug" element={<NoteDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>

    </>
  );
}
