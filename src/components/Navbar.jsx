import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { assets } from "../assets/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-md text-white sticky top-0 z-50">

      <div className="h-16 flex items-center justify-between px-4 md:px-10">

        <Link to="/" className="flex items-center">
          <img
  src={assets.quick_logo}
  alt="Quick Logo"
  className="h-12 md:h-30 w-auto object-contain"
 />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/blog" className="hover:text-white">Blogs</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
          <Link to="/pricing" className="hover:text-white">Pricing</Link>
          <Link to="/track" className="hover:text-white">Tracking</Link>
          <Link
            to="/signin"
            className="ml-4 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-white/10 transition z-[60] relative"
        >
          {isOpen ? (
            <IoCloseSharp className="text-white text-3xl" />
          ) : (
            <IoMenu className="text-white text-3xl" />
          )}
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu — slides in from right */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-60 z-50 
          bg-gradient-to-b from-blue-600 via-cyan-500 to-emerald-500
          shadow-2xl transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button inside panel */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/20">
          <span className="font-semibold text-white text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <IoCloseSharp className="text-white text-3xl" />
          </button>
        </div>

        <div className="px-6 pt-4 pb-8 flex flex-col">
          <Link to="/"        className="block py-3 text-white font-medium border-b border-white/10 hover:text-amber-400 transition">Home</Link>
          <Link to="/about"   className="block py-3 text-white font-medium border-b border-white/10 hover:text-amber-400 transition">About</Link>
          <Link to="/blog"    className="block py-3 text-white font-medium border-b border-white/10 hover:text-amber-400 transition">Blog</Link>
          <Link to="/contact" className="block py-3 text-white font-medium border-b border-white/10 hover:text-amber-400 transition">Contact</Link>
          <Link to="/pricing" className="block py-3 text-white font-medium border-b border-white/10 hover:text-amber-400 transition">Pricing</Link>
          <Link to="/track"   className="block py-3 text-white font-medium border-b border-white/10 hover:text-amber-400 transition">Tracking</Link>
          <Link
            to="/signin"
            className="inline-block self-start w-fit mt-6 px-6 py-2.5 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition"
          >
            Sign In
          </Link>
        </div>
      </div>

    </nav>
  );
}