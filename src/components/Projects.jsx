import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="pt-20" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl font-semibold lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id} 
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            <motion.img 
              whileHover={{ scale: 1.1 }}
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: selectedProject === project.id ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className='absolute inset-0 flex flex-col items-center justify-center text-white backdrop-blur-lg transition-opacity duration-500'
            >
              <h3 className='text-xl text-center font-semibold tracking-tighter'>{project.name}</h3>
              <p className='p-4 text-center'>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'>
                <div className='flex items-center'>
                  <span>View on Github</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
