
import React from 'react'
import {SKILLS} from '../constants'
import {motion} from "framer-motion"

const iconVariants = (duration)=>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24' id="skills">
        <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>
            Skills
        </h2>
        <motion.div
        variants={iconVariants(2.4)}
        initial="initial"
        animate="animate" 
        className='flex flex-wrap items-center justify-center gap-4'>
            {SKILLS.map((skill,index) => (
                <div key={index} className={'rounded-2xl border-4 border-neutral-800 p-4'}>
                    <div className='flex items-center'>{skill.icon}</div>
                    {/* <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}</h3> */}
                </div>

            ))}     
        </motion.div>
    </div>
  )
}

export default Skills