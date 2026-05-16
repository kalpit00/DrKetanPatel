import { useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";

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
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-950 light:from-white light:via-emerald-50 light:to-white shadow-lg light:shadow-sm light:border-b light:border-slate-200 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <span
              className="cursor-pointer text-white light:text-slate-900 font-bold text-xl tracking-tight hover:text-green-300 light:hover:text-emerald-700 transition-colors duration-300"
              onClick={() => handleNavClick("header")}
            >
              Mona Eye Hospital
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={() => handleNavClick("about")}
              className="text-white light:text-slate-800 hover:text-green-300 light:hover:text-emerald-800 px-4 py-2 rounded-md text-sm font-medium light:font-semibold transition duration-300 tracking-wide cursor-pointer relative overflow-hidden group light:border light:border-transparent light:hover:border-emerald-300"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 light:from-emerald-100 light:via-emerald-50 light:to-emerald-100 opacity-0 group-hover:opacity-20 light:group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="text-white light:text-slate-800 hover:text-green-300 light:hover:text-emerald-800 px-4 py-2 rounded-md text-sm font-medium light:font-semibold transition duration-300 tracking-wide cursor-pointer relative overflow-hidden group light:border light:border-transparent light:hover:border-emerald-300"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 light:from-emerald-100 light:via-emerald-50 light:to-emerald-100 opacity-0 group-hover:opacity-20 light:group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-white light:text-slate-800 hover:text-green-300 light:hover:text-emerald-800 px-4 py-2 rounded-md text-sm font-medium light:font-semibold transition duration-300 tracking-wide cursor-pointer relative overflow-hidden group light:border light:border-transparent light:hover:border-emerald-300"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 light:from-emerald-100 light:via-emerald-50 light:to-emerald-100 opacity-0 group-hover:opacity-20 light:group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <ThemeToggle className="ml-2" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-white light:text-slate-800 hover:text-green-300 light:hover:text-emerald-700 focus:outline-none cursor-pointer p-1"
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
          <div className="md:hidden mt-2 py-2 bg-gradient-to-b from-black to-green-900 light:from-white light:to-slate-50 light:border light:border-slate-200 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              <button
                onClick={() => handleNavClick("about")}
                className="text-white light:text-slate-700 hover:text-green-300 light:hover:text-emerald-700 py-2 transition duration-300 cursor-pointer text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="text-white light:text-slate-700 hover:text-green-300 light:hover:text-emerald-700 py-2 transition duration-300 cursor-pointer text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-white light:text-slate-700 hover:text-green-300 light:hover:text-emerald-700 py-2 transition duration-300 cursor-pointer text-left"
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
