import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaCode, FaGraduationCap } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-10' src={logo} alt='' />
      </div>
      <div className='m-8 flex items-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/sabyasachi-nishant-1843761b1"><FaLinkedin /></a>
        <a href="https://github.com/Sabyasac21"><FaGithub /></a>
        <a href="https://leetcode.com/u/sabyasachigolu/"><FaCode /></a>
        <a href='https://www.scaler.com/academy/profile/3f8bb943f018/'><FaGraduationCap/></a>


      </div>
    </nav>
  )
}

export default Navbar 