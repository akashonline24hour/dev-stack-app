import { useState } from "react";
import logo from "../assets/images/logo-text.png";
import hamburger from "../assets/images/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Technologies", href: "#" },
    { name: "Projects", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="border-b border-slate-200 sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        
        {/* Left Section: Hamburger (Mobile) / Logo + Links Wrapper (Desktop) */}
        <div className="flex items-center gap-6 lg:w-auto">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="lg:hidden p-1 focus:outline-none"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={hamburger} className="w-5 h-5" alt="Menu" />
          </button>

          {/* Desktop Logo (Hidden on mobile to keep 3-part mobile layout centered) */}
          <div className="hidden lg:block">
            <img src={logo} alt="Dev Stack" className="w-28 lg:w-32" />
          </div>
        </div>

        {/* Center Section: Mobile Logo / Desktop Nav Links */}
        <div className="flex items-center justify-center">
          {/* Mobile Logo (Centered on small screens) */}
          <div className="lg:hidden">
            <img src={logo} alt="Dev Stack" className="w-24 sm:w-28" />
          </div>

          {/* Desktop Links (Hidden on mobile) */}
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute top-full left-0 w-full flex-col gap-4 bg-white p-5 shadow-md border-b border-slate-100 font-medium text-[#475569] text-sm lg:static lg:flex lg:flex-row lg:gap-8 lg:p-0 lg:shadow-none lg:border-none`}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors hover:text-[#DB2777] ${
                    link.active ? "text-[#DB2777] font-semibold" : ""
                  }`}
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#DB2777] transition-colors"
            type="button"
          >
            Sign In
          </button>

          <button
            className="bg-[#DB2777] hover:bg-[#be185d] px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-white transition-colors"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;