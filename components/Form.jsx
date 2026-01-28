'use client'
import React from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
    return (
        <form action="https://api.web3forms.com/submit" method="POST" target='blank' className='flex flex-col gap-y-4'>
            {/* input */}
            <div className='flex items-center relative'>
                <Input type='name' id='name' placeholder='Name' />
                <User className='right-6 absolute' size={20} />
            </div>
            {/* Email */}
            <div className='flex items-center relative'>
                <Input type='email' id='email' placeholder='Email' />
                <MailIcon className='right-6 absolute' size={20} />
            </div>
            {/* Text Area */}
            <div className='flex items-center relative'>
                <Textarea placeholder='Type Your Message Here ...' />
                <MessageSquare className='right-6 absolute top-4' size={20} />
            </div>
            <Button className='flex items-center max-w-41.5 gap-x-1'>Let's Talk <ArrowRightIcon size={20} /></Button>
        </form>
    )
}

export default Form