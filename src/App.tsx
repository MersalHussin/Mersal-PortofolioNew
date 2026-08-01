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

import TestimonialsPage from "./pages/TestimonialsPage";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        // Wait for Supabase session to initialize
        await supabase.auth.getSession();
        
        // Start fade out almost immediately after auth checks
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setLoading(false);
          }, 500); // 500ms fade out transition
        }, 100); 
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
      {loading && (
        <div className={`fixed inset-0 z-[9999] transition-opacity duration-500 pointer-events-none ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
          <Loader />
        </div>
      )}
      <div className={`text-center ${loading && !isFadingOut ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar minimal={!isHome} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
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
