"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='fixed w-full bg-[#013571] z-10'>
      <nav className='flex justify-between px-4 py-2 items-center text-[17px]'>
        <div className='content-center'>
          <ul className='flex gap-5 text-white hidden lg:flex'>
            <li><img className='w-[75px] rounded' src="flag2.png" alt="no image" /></li>
            <Link href="/"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Home</li></Link>
            <Link href="/education"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Education</li></Link>
            <Link href="/experiences"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Experience</li></Link>
            <Link href="/achievements"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Achievements</li></Link>
            <Link href="/projects"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Projects</li></Link>
            <Link href="/publications"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Publications</li></Link>
            <Link href="/conferences"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Conferences</li></Link>
            <Link href="/contact"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Contact</li></Link>
          </ul>

          {/* Mobile Hamburger Menu for screens < 950px */}
          <div className='lg:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='text-white p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#013571] text-white p-4">
          <ul className='flex flex-col gap-4'>
            <Link href="/"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Home</li></Link>
            <Link href="/education"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Education</li></Link>
            <Link href="/experiences"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Experience</li></Link>
            <Link href="/achievements"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Achievements</li></Link>
            <Link href="/projects"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Projects</li></Link>
            <Link href="/publications"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Publications</li></Link>
            <Link href="/conferences"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Conferences</li></Link>
            <Link href="/contact"><li className='p-[9px] hover:font-bold hover:bg-[#013571] hover:text-white hover:rounded-full'>Contact</li></Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

