import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Workshops from "./pages/Workshops";
import Courses from "./pages/Courses";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { supabase } from "./lib/supabase";
import { useState, useEffect } from "react";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      try {
        // Wait for Supabase session to initialize
        await supabase.auth.getSession();
        
        // Add a slight delay for smooth transition and logo visibility
        // Wait a bit longer to allow components to mount and fetch data
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      } catch (error) {
        console.error("Error initializing app:", error);
        setLoading(false);
      }
    };
    initApp();
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div className={`text-center transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <Navbar minimal={!isHome} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
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
