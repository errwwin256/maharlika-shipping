import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Book Now", path: "/book" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = forwardRef((props, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      ref={ref} // attach ref here
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-ocean-light to-ocean-dark text-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Brand Name */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition"
        >
          <img
            src="/since1.png"
            alt="Maharlika Logo"
            className="h-18 w-18 object-cover rounded-full border-2 border-sand shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-logo tracking-wide">
            Maharlika Shipping Lines
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-sand font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-ocean-dark flex flex-col p-4 space-y-4 text-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-sand font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
});

export default Navbar;
