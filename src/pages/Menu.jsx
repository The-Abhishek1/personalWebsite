"use client"
import React, { useEffect, useState } from 'react'
import { MdMenuBook } from "react-icons/md";
import { SiD } from 'react-icons/si';
import b2 from "@/public/a1.jpg"
import Image from 'next/image'
import About from './About';
import Skills from './Skills';
import { FaArrowUp } from "react-icons/fa6";
import Contact from './Contact';


//Side Bar
import b1 from "@/public/a2.jpg"
import b3 from "@/public/a3.jpg"
import { FaInstagram,FaFilePdf,FaTelegram ,FaLinkedin,FaWhatsapp,FaHome,FaImages} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { CiServer } from "react-icons/ci";
import Link from 'next/link';

//Main Funtion
function Menu() {

  
  const scrollToHome = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
  
  const scrollToAbout = () => {
    window.scrollTo({
      top:700,
      behavior:'smooth',
    })
  }
  
  const scrollToResume = () => {
    window.scrollTo({
      top:1850,
      behavior:'smooth',
    })
  }
  
  const scrollToPortfolio = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
  
  const scrollToServices = () => {
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
  
  const scrollToContact = () => {
    window.scrollTo({
      top:2180,
      behavior:'smooth',
    })
  }
  
  const [visible,setVisible] = useState(true)


    const [on,setOn] = useState(false)
  return (
    <div >
      {
       visible ? 
      <div onClick={scrollToHome} className='text-white cursor-pointer fixed border-2 bottom-[20px] bg-blue-900 right-[20px] p-2 rounded-full'>
      <FaArrowUp size={17}/>
      </div>
      : null
    }
        <div className='block z-10 xl:hidden fixed right-2 top-2 bg-blue-900 p-2 rounded-full'>
        <MdMenuBook className='cursor-pointer text-white' onClick={()=>{
          setOn(!on)
        }} size={22}/>
        </div>

    <div className='flex flex-row h-full'>
     
      {/* Side Bar */}
      <div className=' z-50 '>
        <div className='mxl:hidden z-50 w-[200px] h-full py-10 px-5 flex flex-col gap-5 items-center justify-center'>
        <Image src={b1} alt="profle photo" className='rounded-full h-[120px] w-[120px] border-[5px] object-cover' />
          <h1 className='font-bold uppercase text-blue-900'>Abhishek Gowda</h1>
    
          <div className='flex flex-row items-center gap-2'>
            <Link href={"https://www.instagram.com/abhishekg0wda_02/"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaInstagram size={17} color='white'/>
            </Link>
            <Link  href={"https://github.com/The-Abhishek1"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaSquareGithub size={17} color='white'/>
            </Link>
            <Link  href={"https://www.linkedin.com/in/abhishek-gowda17"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaLinkedin size={17} color='white'/>
            </Link>
            <Link  href={"https://tryhackme.com/r/p/Idiot17"} className='p-[5px] rounded-full bg-blue-800 '>
            <SiTryhackme size={17} color='white'/>
            </Link>
            <Link  href={"https://wa.me/qr/PRIOT6BEX4BWB1"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaWhatsapp size={17} color='white'/>
            </Link>
          </div>
          <div className='flex flex-col w-[80%] items-center gap-5 mt-2 text-white'>
            <div  onClick={scrollToHome} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaHome size={20} />
              <h3 className='uppercase text-[13px]'>home</h3>
            </div>
            <div  onClick={scrollToAbout} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <RiAccountPinBoxFill size={20} />
            <h3 className='uppercase text-[13px]'>about</h3>
            </div>
            <div  onClick={scrollToResume} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaFilePdf size={20} />
            <h3  className='uppercase text-[13px]'>resume</h3>
            </div>
            <div  onClick={scrollToPortfolio} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaImages size={20} />
            <h3  className='uppercase text-[13px]'>portfolio</h3>
            
            </div>
            <div  onClick={scrollToServices} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <CiServer size={20} />
            <h3  className='uppercase text-[13px]'>services</h3>
            </div>
            <div  onClick={scrollToContact} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaTelegram size={20}  />
            <h3  className='uppercase text-[13px]'>contact</h3>
            </div>
          </div>
        </div>
      {
        
        on ? 
        <div className='xl:hidden w-[210px]  z-50  h-full py-10 px-5 flex flex-col gap-7 items-center justify-center'>
          <Image src={b1} alt="profle photo" className='rounded-full h-[120px] w-[120px] border-[5px] object-cover' />
          <h1 className='font-bold uppercase text-blue-900'>Abhishek Gowda</h1>
    
          <div className='flex flex-row items-center gap-2'>
            <Link href={"https://www.instagram.com/abhishekg0wda_02/"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaInstagram size={17} color='white'/>
            </Link>
            <Link  href={"https://github.com/The-Abhishek1"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaSquareGithub size={17} color='white'/>
            </Link>
            <Link  href={"https://www.linkedin.com/in/abhishek-gowda17"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaLinkedin size={17} color='white'/>
            </Link>
            <Link  href={"https://tryhackme.com/r/p/Idiot17"} className='p-[5px] rounded-full bg-blue-800 '>
            <SiTryhackme size={17} color='white'/>
            </Link>
            <Link  href={"https://wa.me/qr/PRIOT6BEX4BWB1"} className='p-[5px] rounded-full bg-blue-800 '>
            <FaWhatsapp size={17} color='white'/>
            </Link>
          </div>
          <div className='flex flex-col w-[80%] items-center gap-5 mt-2 text-white'>
            <div onClick={scrollToHome} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaHome size={20} />
              <h3 className='uppercase text-[13px]'>home</h3>
            </div>
            <div onClick={scrollToAbout}  className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <RiAccountPinBoxFill size={20} />
            <h3 className='uppercase text-[13px]'>about</h3>
            </div>
            <div  onClick={scrollToResume} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaFilePdf size={20} />
            <h3  className='uppercase text-[13px]'>resume</h3>
            </div>
            <div  onClick={scrollToPortfolio} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaImages size={20} />
            <h3  className='uppercase text-[13px]'>portfolio</h3>
            
            </div>
            <div  onClick={scrollToServices} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <CiServer size={20} />
            <h3  className='uppercase text-[13px]'>services</h3>
            </div>
            <div  onClick={scrollToContact} className='flex flex-row items-center gap-2 cursor-pointer bg-blue-800  rounded-2xl w-full p-2'>
            <FaTelegram size={20}  />
            <h3  className='uppercase text-[13px]'>contact</h3>
            </div>
          </div>
        </div>
           : null  }
      </div>

      {/* Home Page */}
      <div className='relative w-full'>
        <Image src={b2} className='w-full h-[661px]  object-cover' alt='Front Image'/>
        <div className='absolute bottom-[30%] left-[20%] z-10 bg-white p-3 rounded-tr-3xl rounded-bl-3xl animate-bounce text-black'>
          <h1 className='font-bold text-[25px] text-blue-900'>Abhishek Gowda</h1>
          <h3 className='text-[15px]'>Ethical Hacker && Web Developer</h3>
        </div>
      </div>
    </div>  




        <div>
          <About/>
        </div>
        <div>
          <Skills/>
        </div>
        <div>
          <Contact/>
        </div>
      
    </div>
  )
}

export default Menu