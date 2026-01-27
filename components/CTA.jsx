import { Button } from './ui/button'
import Link from 'next/link'

import React from 'react'

const CTA = () => {
    return (
        <section className='py-24 bg-tertiary dark:bg-secondary/40'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-col items-center'>
                    <h2 className='h2 max-w-xl text-center mb-8'>Prepared to turn your ideas into reality? I'here to help</h2>
                    <Link href='/contact'>
                        <Button>Contact Me</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA