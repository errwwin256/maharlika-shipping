import { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NewsDetail from "./pages/NewsDetail";
import Review from "./pages/Review";
import Payment from "./pages/Payment";

export default function App() {
  const navbarRef = useRef(null); // Ref for Navbar
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    // Update on window resize
    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Pass ref to Navbar */}
        <Navbar ref={navbarRef} />

        {/* Main content with dynamic padding */}
        <main style={{ paddingTop: navbarHeight }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/review" element={<Review />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
