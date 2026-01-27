'use client'

import Image from 'next/image'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

// Button Swipper
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react'

const reviewData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richard Thompson',
        job: 'Chef',
        review: 'Delivered exactly what we needed with clean code, clear communication, and timely project completion.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Evenly Anderson',
        job: 'Interior Designer',
        review: 'Quickly understood requirements and delivered a scalable, reliable application exceeding our business expectations.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'John Deo',
        job: 'Game Dev',
        review: 'Handled frontend, backend, and deployment professionally with strong technical expertise and attention.'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Emily Smith',
        job: 'Therapist',
        review: 'Very supportive developer who built a smooth, user-friendly platform aligned perfectly with our needs.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Oliver Taylor',
        job: 'Engineer',
        review: 'Delivered a robust full-stack solution with clean architecture, performance focus, and scalability.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Williams Mason',
        job: 'Video Editor',
        review: 'Great experience working together, fast delivery, clear updates, and excellent technical execution.'
    }

]

const Reviews = () => {
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='max-w-7xl mx-auto px-4'>
                <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
                {/* Slider */}
                <Swiper slidesPerView={1} breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 }
                }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true, }} className='h-87.5'>
                    {
                        reviewData.map((person, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-75'>
                                        <CardHeader className='p-0 mb-10'>
                                            <div className='flex items-center gap-x-4'>
                                                {/* Image */}
                                                <Image src={person.avatar} width={70} height={70} alt='Review Image' priority />
                                                {/* Name */}
                                                <div className='flex flex-col'>
                                                    <CardTitle>{person.name}</CardTitle>
                                                    <p>{person.job}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews