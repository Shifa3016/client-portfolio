"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`fixed ${isMobileMenuOpen ? 'w-fit' : 'w-full'} lg:w-full bg-[#013571] z-10 transition-all duration-300`}>
      <nav className='flex justify-between px-4 py-2 items-center text-[17px]'>
        <div className='content-center flex items-center'>
          {/* Desktop Navigation */}
          <ul className='gap-5 text-white hidden lg:flex'>
            <li><img className='w-[75px] rounded' src="flag2.png" alt="Flag" /></li>
            {["Home", "Education", "Experiences", "Achievements", "Projects", "Publications", "Conferences", "Gallery", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <li className='p-[9px] hover:font-bold hover:bg-[#01295e] hover:text-white hover:rounded-full'>{item}</li>
              </Link>
            ))}
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden text-white p-2 ml-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full bg-[#013571] text-white p-4">
          <ul className='flex flex-col gap-4'>
            {["Home", "Education", "Experiences", "Achievements", "Projects", "Publications", "Conferences", "Gallery", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <li className='p-[9px] hover:font-bold hover:bg-[#01295e] hover:text-white hover:rounded-full'>{item}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

