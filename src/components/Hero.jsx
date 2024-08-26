import {HERO} from "../constants"
import Img from "../assets/aparna.jpg"
import {motion} from "framer-motion";

const hero =()=>{
const text= HERO.name;
  return (

    <section className='flex min-h-sccreen flex-wrap items-center lg:pt-5'>
        <motion.div
        initial={{opacity:0, x: -50}}
        animate={{ opacity:1, x:0}}
        transition={{duration: 1}}
        className="w-full md:w-1/2 mt-10">
        {text.split("").map((letter, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className='my-8 pt-2 text-4xl font-bold md:text-5xl lg:text-[7em]'>
                {letter}
            </motion.span>))}
            <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                {HERO.greet}
            </p>
            <p className='mb-8 p-2 text-xl'>
                {HERO.description}
            </p>
        </motion.div>

        <motion.div 
        initial={{opacity:0, scale:0.8}}
        animate={{ opacity:1, scale: 1}}
        transition={{duration: 1}}
            className="w-full md:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                initial={{ opacity: 0,x:50}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
                src={Img} 
                width={550} height={700}
                 alt="Aparna Baliga" className="rounded-3xl"/>      
            </div>
        </motion.div>
    </section>
  )
}

export default hero;