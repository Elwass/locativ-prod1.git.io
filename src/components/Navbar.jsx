import logo from "../assets/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FAFAFA] text-gray-900 relative">

      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 md:px-6">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[48px] mt-2 md:h-[60px] md:mt-4 lg:h-[70px] lg:mt-[40px]"
          />
        </div>

        {/* Animated Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex flex-col justify-center items-center gap-1 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>

          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`h-[2px] w-6 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5 text-l font-medium lg:mr-[200px] lg:h-[70px] lg:mt-[40px]">
          <li><a href="#home" className="hover:text-blue-400">HOME</a></li>
          <li><a href="#services" className="hover:text-blue-400">LAYANAN</a></li>
          <li><a href="#projects" className="hover:text-blue-400">PORTOFOLIO</a></li>
          <li><a href="#reasons" className="hover:text-blue-400">PAKET</a></li>
          <li>
              <a href="https://wa.me/6288226853276">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 text-sm font-semibold ml-4">
                KONTAK
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Slide Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/40"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-[75%] max-w-sm h-full bg-gradient-to-b from-[#F5F5F5] via-[#D9D9D9] to-[#BDBDBD] text-gray-800 p-6 flex flex-col animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <ul className="mt-10 space-y-6 text-lg font-medium">
              <li className="border-b border-gray-400 pb-3">
                <a href="#home" onClick={() => setIsOpen(false)}>
                  HOME
                </a>
              </li>

              <li className="border-b border-gray-400 pb-3">
                <a href="#reasons" onClick={() => setIsOpen(false)}>
                  LAYANAN
                </a>
              </li>

              <li className="border-b border-gray-400 pb-3">
                <a href="#projects" onClick={() => setIsOpen(false)}>
                  PORTOFOLIO
                </a>
              </li>

              <li className="border-b border-gray-400 pb-3">
                <a href="#services" onClick={() => setIsOpen(false)}>
                  PAKET
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <button className="mt-4 bg-gray-800 text-white px-6 py-2">
                    KONTAK
                  </button>
                </a>
              </li>
            </ul>

          </div>
        </div>
      )}
    </nav>
  );
}
