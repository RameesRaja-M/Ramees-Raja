'use client'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Form = () => {
    return (
        <form action="https://api.web3forms.com/submit" method="POST" target="_blank" className='flex flex-col gap-y-4'>
            <input type="hidden" name="access_key" value="9d100ea0-5faa-49d0-bee3-6da1aa802d8c" />
            
            {/* Name */}
            <div className='flex items-center relative'>
                <Input type='text' name='name' id='name' placeholder='Name' required />
                <User className='right-6 absolute' size={20} />
            </div>

            {/* Email */}
            <div className='flex items-center relative'>
                <Input type='email' name='email' id='email' placeholder='Email' required />
                <MailIcon className='right-6 absolute' size={20} />
            </div>

            {/* Message */}
            <div className='flex items-center relative'>
                <Textarea name='message' placeholder='Type Your Message Here ...' required />
                <MessageSquare className='right-6 absolute top-4' size={20} />
            </div>

            <Button className='flex items-center max-w-41.5 gap-x-1'>
                Let's Talk <ArrowRightIcon size={20} />
            </Button>
        </form>
    )
}

export default Form
