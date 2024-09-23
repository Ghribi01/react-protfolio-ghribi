import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import logo from '../assets/kevinRushLogo.png'
const Navbar = () => {
  const handleClick = (link) =>{
   window.open(link,"_blank")
  }
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-40' src={logo} alt="" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin onClick={()=>handleClick("https://tn.linkedin.com/in/ghribi-mohamed-895122287")}/>
            <FaGithub onClick={()=>handleClick("https://github.com/Ghribi01")}/>
            <FaSquareTwitter/>
            <FaInstagram/>
        </div>

    </nav>
  )
}

export default Navbar
