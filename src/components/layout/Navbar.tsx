import { useState } from "react";

interface NavbarProps {
  scrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black via-green-900 to-black shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <span
              className="cursor-pointer text-white font-bold text-xl tracking-tight hover:text-green-300 transition-colors duration-300"
              onClick={() => handleNavClick("header")}
            >
              Mona Eye Hospital
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick("about")}
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 tracking-wide cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 tracking-wide cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-white hover:text-green-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 tracking-wide cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-300 focus:outline-none cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 py-2 bg-gradient-to-b from-black to-green-900 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              <button
                onClick={() => handleNavClick("about")}
                className="text-white hover:text-green-300 py-2 transition duration-300 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="text-white hover:text-green-300 py-2 transition duration-300 cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-white hover:text-green-300 py-2 transition duration-300 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
