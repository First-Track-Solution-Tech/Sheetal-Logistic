import React, { useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom";  // ← add useLocation
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Let_connect from '../components/Let_connect';
import BottomNav from '../components/BottomNav';

// ← add this tiny component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-white'>
  <ScrollToTop />
      <Navbar />
      <Outlet />
      <Let_connect />
      <Footer />
      <div className="md:hidden h-[48px]" /> {/* ← spacer AFTER footer, pushes copyright above nav */}
      <BottomNav />
    </div>
  )
}

export default MainLayout



