import React from 'react'

import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Form from '@/components/Form';


const Contact = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Text & Illustrator */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-120 mb-6 xl:mb-24'>
          {/* Text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-7.5 h-0.5 bg-primary'></span>
              Say Hello👋
            </div>
            <h1 className='h1 max-w-md mb-8'>Grow Your Business.</h1>
            <p className='subtitle max-w-100'>Tell me about your idea, business, or project and I’ll help you turn it into a fast, professional website that looks great, works smoothly, and helps you attract more customers online.
</p>
          </div>
          {/* Illustrator */}
          <div className='hidden xl:flex w-full bg-contact-illustration-light dark:bg-contact-illustration-dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* Text & Form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* Text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* Mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>rameesrajafreelancer@gmail.com</div>
            </div>
            {/* Address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>Tuticorin,TamilNadu,India</div>
            </div>
            {/* Phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>91+ 6383028770</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact