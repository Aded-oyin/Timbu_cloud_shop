import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { FiShoppingCart } from "react-icons/fi";
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-[#FFE2DC] flex justify-between items-center w-[430px] h-[90px] md:h-20 md:w-full mx-auto px-4'>
        <Link to="/" smooth={true} duration={500}>
          <img className='w-[130px] h-[50px]' src={Logo} alt='/'/>  
        </Link>
        <ul className='hidden md:flex items-center  text-[#741919]'>
          <li className='p-4'>
              <button className='text-black bg-[#FFAE9F]  px-6 py-3 my-2 flex items-center hover:border-rgb(187,117,99) duration-500'>
                  Shop
              </button>
          </li>
          <li className='p-4'>Deals</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Recipes</li>
          <li className='p-4'>Contact</li>
        </ul>
        
        <button className='text-[#741919] hidden md:flex items-center py-2 rounded-full'>
            <Link to='cart' smooth={true}>
              <FiShoppingCart size={35} className='mr-[100px]'/>
            </Link>
        </button>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} className='text-[#741919]'/> : <AiOutlineMenu size={20} className='text-[#741919]'/>}
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r bg-[#741919] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#741919] m-4'>Timbu</h1>
          <div className='bg-red-300 w-full h-10 my-3'>
              <p className='text-center text-[20px] py-1'>Price Range</p>
          </div>
          <ul className='uppercase text-[rgb(218,204,200)]'>
            <li className='p-4'>Deals</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Recipes</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar