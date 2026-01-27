'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Navbar from './Navbar';
import Logo from './Logo';
import Socials from './Socials';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>

        <VisuallyHidden>
          <SheetTitle>Mobile Navigation</SheetTitle>
        </VisuallyHidden>

        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Navbar containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-2xl' />
          </div>
          <Socials containerStyles='flex gap-x-4' linkStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav