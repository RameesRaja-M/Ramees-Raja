import React from 'react'

import { GanttChartSquareIcon, Blocks, Gem } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const servicesData = [
  {
    icon: <GanttChartSquareIcon size={72} strokeWidth={0.8} />,
    title: 'Web Development',
    description: 'Building fast, responsive, and scalable websites using modern web technologies with clean and maintainable code.'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'App Development',
    description: 'Developing high-performance mobile and web applications focused on usability, performance, and real-world needs.'
  }, {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Teaching',
    description: 'Helping beginners and developers understand core concepts through clear explanations and practical, real-time examples.'
  },

]

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
        {/* Grid Items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {
            servicesData.map((item, index) => {
              return (
                <Card className='w-full max-w-106 h-75 flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                  <CardHeader className='absolute -top-10 w-full flex justify-center text-primary '>
                    <div className='w-35 h-20 bg-white dark:bg-background flex items-center justify-center'>{item.icon}</div>
                  </CardHeader>
                  <CardContent className='text-center'>
                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                    <CardDescription className='text-lg'>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Services