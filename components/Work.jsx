'use client'

import React from 'react'

import Link from 'next/link'
import { Button } from './ui/button'

// Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

// Button Swipper
import 'swiper/css';
import 'swiper/css/pagination';

// components
import ProjectCard from './ProjectCard';


const projectData = [
    {
        image: '/work/doctor.png',
        category: 'Full-Stack',
        name: 'Doc Appointment Booking Website',
        description: 'Mongo DB, Express JS, React JS, Node JS',
        link: 'https://prescripto-frontend-hhe4.onrender.com',
        github: 'https://github.com/RameesRaja-M/Prescripto'
    },
    {
        image: '/work/task.png',
        category: 'Full-Stack',
        name: 'Task Manager Website',
        description: 'Mongo DB, Express JS, React JS, Node JS',
        link: 'https://task-manager-frontend-0nt3.onrender.com/home',
        github: 'https://github.com/RameesRaja-M/Task-Manager'
    },
    {
        image: '/work/blog.png',
        category: 'Full-Stack',
        name: 'Blog Website',
        description: 'Mongo DB, Express JS, React JS, Node JS',
        link: 'https://blogwhiz-website-frontend.vercel.app/home',
        github: 'https://github.com/RameesRaja-M/blogwhiz-website'
    },
    {
        image: '/work/udemy2.png',
        category: 'React.JS',
        name: 'Udemy Clone Website',
        description: 'HTML, CSS, Tailwind CSS, JavaScript, React JS.',
        link: 'https://udemy-clone-react-dusky.vercel.app/',
        github: 'https://github.com/RameesRaja-M/Udemy-Clone-React'
    },
    {
        image: '/work/greenden.png',
        category: 'React.JS',
        name: 'Greenden Plant Website',
        description: 'HTML, CSS, Tailwind CSS, JavaScript, React JS.',
        link: 'https://rameesraja-m.github.io/Greenden/',
        github: 'https://github.com/RameesRaja-M/Greenden'
    },
    {
        image: '/work/portfolio.png',
        category: 'React.JS',
        name: 'Portfolio Website',
        description: 'HTML, CSS, Tailwind CSS, JavaScript, React JS.',
        link: 'https://portfolio-website-4nue.onrender.com/',
        github: 'https://github.com/RameesRaja-M/Portfolio'
    },
    {
        image: '/work/nostra.png',
        category: 'Next.JS',
        name: 'Nostra E-Commerce Website',
        description: 'HTML, CSS, Tailwind CSS, JavaScript, Next JS.',
        link: 'https://github.com/RameesRaja-M/Nostra-Website',
        github: 'https://rameesraja-m.github.io/Nostra-Website/'
    },
    {
        image: '/work/trip.png',
        category: 'Next.JS',
        name: 'Trip Advisor Clone Website',
        description: 'HTML, CSS, Tailwind CSS, JavaScript, Next JS..',
        link: 'https://github.com/RameesRaja-M/Trip-Advisor-Clone',
        github: 'https://rameesraja-m.github.io/Trip-Advisor-Clone/'
    },
    {
        image: '/work/bulk.png',
        category: 'Full-Stack',
        name: 'Bulk Mailer Website',
        description: 'Mongo DB, Express JS, React JS, Node JS.',
        link: 'https://mailwhiz-frontend.vercel.app/',
        github: 'https://github.com/RameesRaja-M/Mailwhiz-Bulk-Mailer'
    },
]

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Text */}
                <div className='max-w-100 mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-100 flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Featured Work</h2>
                    <p className='subtitle mb-8'>Showcasing real-world full-stack projects with clean, intuitive user experiences that solve real business problems.</p>
                    <Link href='/projects'>
                        <Button>All Projects</Button>
                    </Link>
                </div>
                {/* Slider */}
                <div className='xl:max-w-250 xl:absolute right-0 top-0'>
                    <Swiper className='h-120' slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {/* Only Show First 4 Projects */}
                        {
                            projectData.slice(0, 4).map((project, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <ProjectCard project={project} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work