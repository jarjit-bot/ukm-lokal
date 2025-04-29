import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 scroll-smooth">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo + Nama Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/images/logo4.png"
            alt="Logo"
            className="w-14 h-14 object-contain bg-white"
          />
          <span className="text-xl sm:text-2xl font-bold text-green-700 leading-tight">
            Traditional Snack
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["home", "about", "products", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-green-700 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle Button Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu (Dropdown from Top - Right Aligned) */}
        <div
          className={`absolute top-full right-4 mt-2 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out w-48 ${
            menuOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"
          }`}
        >
          <ul className="flex flex-col py-4 px-4 space-y-4 text-gray-700 font-medium">
            {["home", "about", "products", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="hover:text-green-700 transition-colors duration-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
