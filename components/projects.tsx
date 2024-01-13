"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.section className='mb-28 max-w-[45rem]
    text-center leading-8 sm:mb-40'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:100}}
    transition={{delay:0.190}}>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {
                projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
                ))
            }
        </div>
    </motion.section>
  )
}