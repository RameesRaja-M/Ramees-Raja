'use client'

import React, { useState, useEffect } from 'react'

// Components
import Logo from './Logo'
import ThmeToggler from './ThemeToggler'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  useEffect(() => {
    const scrollYpos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })

    // Remove Event
    return () => window.removeEventListener('scroll', scrollYpos);
  })

  return (
    <header className=
      {`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} 
              w-full sticky top-0 z-30 transition-all
              ${pathName === '/' && 'bg-[#fef9f5]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* NAVBAR */}
            <Navbar
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              UnderlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThmeToggler />
            {/* Mobile Navbar */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header