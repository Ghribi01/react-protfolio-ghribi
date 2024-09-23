import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div >
            {EXPERIENCES.map((experience,index)=>{
             return(<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                   <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                   <h6 className='mb-2 font-semibold'>{experience.role} - {experience.company}</h6>
                   <p className='mb-4 text-neutral-500'>{experience.description}</p>
                   {experience.technologies.map((tech,index)=>{
                     return <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                   })}
                </div>
               </div>) 
            })}

        </div>
    </div>
  )
}

export default Experience