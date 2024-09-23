import React from 'react'
import { EDUCATION } from '../constants'
import { FaUniversity } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
const Education = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Education</h2>
        <div >
            {EDUCATION.map((education,index)=>{
             return(<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                   <p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                   <h5 className='mb-2 font-semibold flex items-center gap-2'><PiCertificateFill/>{education.degree}</h5>
                   <h6 className='text-neutral-500 flex items-center gap-2'><FaUniversity/>{education.university}</h6>
                   {/* <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span> */}
                </div>
               </div>) 
            })}

        </div>
    </div>
  )
}

export default Education