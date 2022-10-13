import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs/:id" element={<Blog />} />

        <Route path="not-found" element={<p>NOT FOUND</p>} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer />
      {/* Same as */}
    </>
  );
}

export default App;
