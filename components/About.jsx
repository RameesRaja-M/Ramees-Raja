import React from 'react'

import DevImg from './DevImg';
import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ramees Raja'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '91+ 6383028770'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'rameeswebdev@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 27 Aug, 2000'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Computer Application'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Tuticorin,TamilNadu,India'
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Alagappa University',
                quaification: 'Bachelor of Computer Application',
                years: '2019 - 2022'
            },
            {
                university: 'State Board of TamilNadu',
                quaification: 'Higher Secondary Course - Xll std',
                years: '2017 - 2019'
            },
            {
                university: 'State Board of TamilNadu',
                quaification: 'Higher Secondary Course - X std',
                years: '2016 - 2017'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Error Makes Clever',
                role: 'Full Stack Developer - Internship',
                years: 'Feb 2025 - Apr 2025'
            },
            {
                company: 'Error Makes Clever',
                role: 'Full Stack Developer - Bootcamp',
                years: 'Sep 2024 - Jan 2025'
            },
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS, Tailwind CSS,'
            },
            {
                name: 'JavaScript, React.JS, Next.JS,'
            },
            {
                name: 'Node.JS, Express.JS, Prisma ORM, '
            },
            {
                name: 'Mongo DB, Postgre SQL, FireBase,'
            },
            {
                name: 'Git, GitHub, Problem-Solving,'
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode 1.svg',
            },
            {
                imgPath: '/about/figma 1.svg',
            },
            {
                imgPath: '/about/notion 1.svg',
            },
            {
                imgPath: '/about/wordpress 1.svg',
            },
        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='xl:h-215 pb-12 py-12 xl:py-24'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About</h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* IMAGE */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about-shape-light dark:bg-about-shape-dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/hero/developer2.png' />
                    </div>
                    {/* Tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-130 md:border'>
                                <TabsTrigger className='w-40.5 xl:mx-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-40.5 xl:mx-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-40.5 xl:mx-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* Tabs Content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* Personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Full-Stack MERN Developer</h3>
                                        <p className='subtitle mx-auto max-w-xl xl:mx-0'>Full-stack MERN Developer with hands-on internship experience,
                                            strong in JavaScript, React, Node.js, Express, and MongoDB.
                                        </p>
                                        {/* Icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {
                                                infoData.map((item, index) => {
                                                    return (
                                                        <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                            <div className='text-primary'>{item.icon}</div>
                                                            <div>{item.text}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        {/* Languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className='border-b border-border'></div>
                                            <div>Tamil, English, Telungu</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Qualification */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                        {/* Exeperience & Education Wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* Experience */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='font-medium capitalize'>{getData(qualificationData, 'experience').title}</h4>
                                                </div>
                                                {/* List */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const { company, role, years } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-21 w-px bg-border relative ml-2'>
                                                                    <div className='w-2.75 h-2.75 rounded-full bg-primary absolute -left-1.25 group-hover:translate-y-21 transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* Education */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='font-medium capitalize'>{getData(qualificationData, 'education').title}</h4>
                                                </div>
                                                {/* List */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const { university, quaification, years } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-21 w-px bg-border relative ml-2'>
                                                                    <div className='w-2.75 h-2.75 rounded-full bg-primary absolute -left-1.25 group-hover:translate-y-21 transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{quaification}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Skills */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>Tools I Use Everyday</h3>
                                        {/* Skills */}
                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* Skill List */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                            <div className='font-medium'>{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        {/* Tools */}
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* Tools List */}
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {getData(skillData, 'tools').data.map((item, index) => {
                                                    const { imgPath } = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image src={imgPath} width={48} height={48} alt='' priority />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About