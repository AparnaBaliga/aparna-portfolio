import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import {motion} from "framer-motion";
const Achievements = () => {
  return (
    <section className='pt-20' id='achievement'>
      <motion.h2 
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      className='text-4xl font-semibold tracking-tighter text-center'>
        Achievements
      </motion.h2>

      <div className='flex flex-col mx-auto items-center justify-center'>
        <div className='grid grid-cols-1 gap-8 p-10 lg:w-3/3'>
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
            initial={{opacity:0,x:-20}}
            whileInView={{opacity:1, x:5}}
            transition={{duration:1, delay: index*0.5}} 
            key={index} 
            className='flex flex-col lg:flex-row rounded-xl border border-stone-50/30 bg-white/10 p-6 w-full'
            >
              <img 
                src={achievement.image} 
                alt={achievement.title} 
                className='object-cover w-full h-50 lg:w-1/3 lg:h-auto mb-4 lg:mb-0 lg:mr-6 rounded-lg'
              />
              <div className='text-left flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold'>{achievement.title}</h3>
                <p className='text-sm text-stone-300'>{achievement.duration}</p>
                <p className='mt-2 text-base'>{achievement.description}</p>
                <div className='mt-5 flex flex-wrap gap-2'>
                  {achievement.members.split(',').map((member, i) => (
                    <div key={i} className='px-2 py-1 border rounded-xl border-stone-50/30 bg-white/20 inline-block'>
                      <p className='text-sm text-stone-300'>{member.trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
