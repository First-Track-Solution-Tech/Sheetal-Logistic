
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { assets } from "../assets/assets";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 const location = useLocation()
 useEffect(() => {
  setIsOpen(false)
 }, [location])
  return (
     <nav className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-md text-white sticky top-0 z-50">
       

      <div className="h-16 flex items-center justify-between px-4 md:px-10">
        
        <Link to="/" className="flex items-center">
  <img
    src={assets.Shipy_logo}
    alt="Quick Logo"
    className="h-23 w-auto object-contain brightness-0 invert -mt-1"
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

        {/* Mobile Hamburger / Cross */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-slate-700 transition"
        >
          {isOpen ? (
            <IoCloseSharp className="text-white text-3xl" />
          ) : (
            <IoMenu className="text-white text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500  overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div  className="px-4 pb-4 flex flex-col">
          <Link
            
            to="/"
            className="block py-3  hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            
            to="/about"
            className="block py-3 hover:text-amber-400"
          >
            About
          </Link>
          <Link  to="/blog" className="block py-3  hover:text-amber-400">Blog</Link>
           <Link  to="/contact" className="block py-3  hover:text-amber-400">Contact</Link>
          <Link  to="/pricing" className="block py-3 hover:text-amber-400">Pricing</Link>
          <Link  to="/track" className="block py-3  hover:text-amber-400">Tracking</Link>

         <Link
           
            to="/signin"
           className="inline-block self-start w-fit mt-2 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold"
           >
            Sign In
         </Link>
        </div>
      </div>
    </nav>
  );
}




// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "HOME", path: "/" },
//     { name: "TRACKING", path: "/track" },
//     { name: "BLOGS", path: "/blog" },
//     { name: "PRICING", path: "/pricing" },
//     { name: "ABOUT", path: "/about" },
//     { name: "CONTACT", path: "/contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${
//           isScrolled
//             ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 shadow-lg backdrop-blur-md"
//             : "bg-gradient-to-r from-blue-700 via-cyan-600 to-emerald-600"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 md:px-10">
//         <div className="flex h-16 items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={assets.Shipy_logo}
//               alt="Quick Courier"
//               className="h-35 w-auto object-contain filter brightness-200 contrast-200"
//             />
            
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8 text-white/90 font-medium">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className="hover:text-white transition"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               to="/signin"
//               className="ml-4 px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold hover:bg-slate-100 transition"
//             >
//               Sign In
//             </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gradient-to-b from-blue-700 via-cyan-600 to-emerald-600">
//           <div className="px-4 py-4 space-y-3 text-white font-medium">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block py-2 hover:text-amber-300 transition"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Link
//               to="/signin"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block mt-3 text-center px-5 py-2 rounded-xl bg-white text-emerald-600 font-semibold"
//             >
//               Sign In
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;