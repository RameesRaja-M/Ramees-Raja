'use client';

import React, { useState } from 'react';

import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/doctor.png',
    category: 'Full-Stack',
    name: 'Doctor Appointment Booking Website',
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
    image: '/work/bulk.png',
    category: 'Full-Stack',
    name: 'Bulk Mailer Website',
    description: 'Mongo DB, Express JS, React JS, Node JS.',
    link: 'https://mailwhiz-frontend.vercel.app/',
    github: 'https://github.com/RameesRaja-M/Mailwhiz-Bulk-Mailer'
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
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];


const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setcategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category
  })

  return (
    <section className='min-h-screen pt-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-160 mb-12 mx-auto md:border dark:border-none'>
            {
              categories.map((category, index) => {
                return <TabsTrigger key={index} value={category} className='w-40.5 md:w-auto capitalize' onClick={() => setcategory(category)}>{category}</TabsTrigger>
              })
            }
          </TabsList>
          {/* Tabs Content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
              filteredProjects.map((project, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                  </TabsContent>
                )
              })
            }
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects