import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <section className='pt-20' id='experience'>
        <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        className='text-4xl font-semibold text-center tracking-tighter'>
            Experience
        </motion.h2>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.5}}
        className='flex items-center justify-center'>
            <div className='transition ease-in-out space-y-8 p-10 lg:w-3/4'>
                {EXPERIENCES.map((experience,index)=>(
                    <motion.div
                    initial={{opacity:0,x:-20}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1,delay:index*0.2}}
                    key={index} className='transition ease-in-out delay-50 hover:-translate-x-6 hover:scale-100 duration-300 rounded-xl border border-stone-50/30 bg-white/10 p-4'>
                        <h3 className='text-2xl font-semibold'>{experience.title}</h3>
                        <p className='mt-2 text-l'>{experience.company}</p>
                        <p className='text-sm text-stone-400'>{experience.duration}</p>
                        <p className='mt-2 text-base'>{experience.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Experience
