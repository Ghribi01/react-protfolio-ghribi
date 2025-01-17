import {HERO_CONTENT} from '../constants';
import profilePic from '../assets/profile.png'
import { motion } from 'framer-motion';
const Hero = () => {
  const container = (delay) =>({
    hidden : {x: -100, opacity: 0},
    visible:{
      x:0,
      opacity: 1,
      transition: {duration:0.5,delay}
    }
  })
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                 <motion.h1 variants={container(0)} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ghribi Mohamed</motion.h1>
                 <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developper</span>
                 <p className='my-6 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-20'>
              <div className='flex justify-center'>
                 <img src={profilePic} alt="profilePic"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero