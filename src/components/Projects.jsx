import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  const handleClick = (link) => {
    window.open(link, '_blank'); 
  };
  return (
    <div className='border-b border-neutral-800 pb-4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                     <div className='w-full lg:w-1/4'>
                        <img className='mb-6 rounded' src={project.image} width={150} height={150} alt="" />
                     </div>
                     <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-500'>{project.description}</p>
                        {project.technologies.map((tech,index)=>{
                            return <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                        })}
                        <button onClick={()=>handleClick(project.link)} class="bg-purple-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                             See more...
                        </button>
                     </div>
                     
                </div>
                
                
            ))}
        </div>
    </div>
  )
}

export default Projects