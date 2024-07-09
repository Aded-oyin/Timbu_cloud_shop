import React from 'react'
import {
    FaInstagram,
} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { IoCallOutline } from "react-icons/io5"
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import Logo from '../assets/logo.png'

const Contact = () => {
  return (
    <div className='bg-[#891B1A] w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#FFD6CD] mt-[100px]'>
        <div>
            <img className='w-[130px] h-[50px] mx-4' src={Logo} alt='/'/>
            <p className='flex my-5'>
                <HiOutlineMail className='mx-4' size={30} />
                <span>support@Timbu.com</span>
            </p>
            <p className='flex my-5'>
                <IoCallOutline className='mx-4' size={30} />
                <span>(123) 456-7890</span>
            </p>
            <p className='flex my-5'>
                <IoLocationOutline className='mx-4' size={30} />
                <span>123 Feast St.Foodie city, FC 12345</span>
            </p>
            <div className='flex mx-4'>
                <input className='bg-transparent w-[230px] h-[40px] border-2 border-[rgb(218,204,200)] p-3' type="email" placeholder='E-mail'/>
                <button className='bg-[#00A911] w-[150px]'>Subscribe Now</button>
            </div>
            <div className='flex md:w-[75%] my-6 mx-4'>
                <FiFacebook className='mx-2' size={30} />
                <FaInstagram className='mx-2' size={30}/>
        
                <AiOutlineYoutube className='mx-2' size={30}/> 
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium'>Customer Service</h6>
                <ul>
                    <li className='py-2 text-sm'>Testimonials</li>
                    <li className='py-2 text-sm'>Contact</li>
                    <li className='py-2 text-sm'>Location & Working Hours</li>
                    <li className='py-2 text-sm'>Track your order</li>
                    <li className='py-2 text-sm'>Our Guarantee</li>
                    <li className='py-2 text-sm'>Help Page</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium'>Quick Links</h6>
                <ul>
                    <li className='py-2 text-sm'>Return & Exchanges</li>
                    <li className='py-2 text-sm'>Return Center</li>
                    <li className='py-2 text-sm'>Purchase History</li>
                    <li className='py-2 text-sm'>Latest News Blog</li>
                    <li className='py-2 text-sm'>Shipping</li>
                    <li className='py-2 text-sm'>Delivery</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium'>Your Account</h6>
                <ul>
                    <li className='py-2 text-sm'>My Account</li>
                    <li className='py-2 text-sm'>My Cart</li>
                    <li className='py-2 text-sm'>My Checkout</li>
                    <li className='py-2 text-sm'>Newsletter</li>
                    <li className='py-2 text-sm'>Privacy Policy</li>
                    <li className='py-2 text-sm'>FAQs</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact