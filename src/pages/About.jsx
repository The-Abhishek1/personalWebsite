import Image from 'next/image'
import React, { useEffect } from 'react'
import b1 from "@/public/a3.jpg"
import { PiGreaterThan } from "react-icons/pi";
import AOS from 'aos';
function About() {

    useEffect(()=>{
        AOS.init()
    })
  
  return (
    <div data-aos="fade-up" className='flex  z-20 flex-col gap-5 px-10 py-10 sm:px-24'>
        <div className='w-[100px] border-b-8 pb-2 border-blue-500'> 
            <h1 className='font-bold text-blue-500 text-[25px]'>About</h1>
           
        </div>
        <div>
            <p className='text-[14px]'>
            "👨‍💻 Hi, I’m Abhishek, an ethical hacker and web developer from Bangalore, India 🇮🇳, passionate about cybersecurity and growth. With over 70 rooms completed on TryHackMe 🔐, I’ve built projects like Germansilver, Ablaze Nova (my startup 🚀), and InvestWise, a trading app 📈. All my projects are on GitHub 🖥️—driven to learn and become the best version of myself!"
            </p>
            
        </div>
        <div className='flex flex-col items-center gap-10 lg:flex-row'>
        <div>
            <Image src={b1} alt='profile photo' className='h-[300px] object-cover max-w-[400px]'/>
        </div>
        <div className='flex flex-col gap-5'>
            <h2 className='font-bold text-[25px] text-blue-500'>Ethical Hacker & Web Developer</h2>
            <p className='text-[14px]'>"👨‍💻 Passionate Ethical Hacker & Web Developer dedicated to enhancing cybersecurity and creating innovative web solutions. 🌐"</p>
            
            <div className='flex flex-col gap-2'>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Birthday:</p>
                    <p className='text-[14px]'>10 August 2003</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Website:</p>
                    <a href="https://github.com/The-Abhishek1" className='underline text-[14px] text-blue-600'>https://github.com/The-Abhishek1</a>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Phone:</p>
                    <p className='text-[14px]'>+91 6366652685</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>City:</p>
                    <p className='text-[14px]'>Bangalore, Karnataka</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Age:</p>
                    <p className='text-[14px]'>21</p>
                </div>
                <div className='flex flex-row items-center mlg:items-start gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Degree:</p>
                    <p className='text-[14px]'>Master of Computer Applications (CyberSecurity), Bachelor of Computer Applications (BCA)</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Email:</p>
                    <p className='text-[14px]'>idiot63666@gmail.com</p>
                </div>
                <div className='flex flex-row items-center gap-1'>
                <PiGreaterThan className='text-indigo-950' color='#21064f' size={12} />
                    <p className='font-bold text-[14px]'>Freelance:</p>
                    <p className='text-[14px]'>Available</p>
                </div>
            </div>
            </div>    
        </div>
    </div>
  )
}

export default About