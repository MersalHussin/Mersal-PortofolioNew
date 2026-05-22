import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Workshops from "./pages/Workshops";
import Courses from "./pages/Courses";
import Navbar from "./components/Navbar";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="text-center">
      <Navbar minimal={!isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
