"use client"
import React, { useEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import Aos from 'aos';
//Main Function
function Contact() {

  useEffect(()=>{
    Aos.init()
  })
  return (
    <div  data-aos="fade-up" className='flex flex-col text-[14px] gap-5 px-10 py-10 sm:px-24'>
    <div className='w-[110px] border-b-8 pb-2 border-blue-500'>
        <h1 className='font-bold text-blue-500 text-[25px]'>Contact</h1>
    </div>
    <p>
    📩 Let’s connect! Reach out via email, social media, or the contact form for collaborations, projects, or inquiries. 🌐</p>
<div className='flex flex-col gap-10 lg:flex-row'>
{/* My Information */}
    <div className='flex w-full flex-col gap-5 lg:pl-10 justify-center bg-white text-black p-5 rounded-md'>
      <div className='flex flex-row gap-5 items-center'>
      <CiLocationOn size={30} color='#079ef0'/>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-[17px]'>Address</h1>
          <p className='text-[13px] text-gray-500'>Bangalore, Karnataka India❤️‍🔥</p>
        </div>
      </div>

      <div className='flex flex-row gap-5 items-center'>
      <IoCallOutline size={30} color='#079ef0'/>
      <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-[17px]'>Call</h1>
          <p className='text-[13px] text-gray-500'>+91 6366652685</p>
        </div>
      </div>

      <div className='flex flex-row gap-5 items-center' >
      <MdOutlineAttachEmail size={30} color='#079ef0'/>
      <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-[17px]'>Email</h1>
          <p className='text-[13px] text-gray-500'>idiot63666@gmail.com</p>
        </div>
      </div>
    </div>

    {/* For Contacting */}
    <div  className='flex w-full flex-col gap-5 bg-white text-black p-5 rounded-md'>
      <div className=' flex flex-row ms:flex-col ms:gap-3 justify-stretch gap-10'>
      <div className='flex flex-col gap-3 w-full'>
      <label htmlFor="name">Your Name</label>
      <input type="text" className='border-[1px] px-3 outline-none p-1 rounded-sm' />
      </div>
      <div className='flex flex-col gap-3 w-full'>
      <label htmlFor="email">Your Email</label>
      <input type="email" className='border-[1px] px-3 outline-none p-1 rounded-sm'/>
      </div>
      </div>
      <div className='flex flex-col gap-3'>
      <label htmlFor="subject">Subject</label>
      <input type="subject" className='border-[1px] px-3 outline-none p-1 rounded-sm'/>
      </div>
      <div className='flex flex-col gap-3' >
      <label htmlFor="subject">Message</label>
      <textarea name="message" id="" rows={5} className='border-[1px] px-3 outline-none p-1 rounded-sm'></textarea>
      </div>

      <button onClick={()=>{
        alert("Your message has been received, I'll contact you soon!!")
      }
      } className='bg-blue-600 p-2 text-[15px] text-white rounded-sm'>Send Message</button>
      </div>
    </div>

    </div>
  )
}

export default Contact