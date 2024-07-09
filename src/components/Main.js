import React from 'react'
import Rectangle_lob from '../assets/rectangle_lob.png'
import Rectangle_fish from '../assets/rectangle_stak.png'
import Rectangle_stak from '../assets/rectangle_fish.png'
import { Link } from 'react-scroll'

const Main = () => {
  return (
    <div className='h-[700px] md:h-[550px] flex w-full justify-center items-center'>
        <div className='grid md:grid-cols-2'>
          <div className='max-w-[1000px] items-center px-8 flex flex-col justify-center h-full'>
            <p className='font-serif text-3xl pb-5'>Weekend Offer!!</p>
            <p className='text-4xl sm:text-4xl'>Meat and Seafoods Up to 40% Off</p>
            <div>
              <Link to='foods' duration={1000}>
                <button className='text-white bg-[#00A911] group border-2 px-6 py-3 my-2 flex items-center hover:border-[#00A911] duration-500'>
                    Shop Now
                </button>
              </Link>
            </div>
          </div>

            <div className=" hidden md:flex h-[536px] w-[586] mt-[65px] relative">
              <img className='h-[360px] w-[360px] ml-[226px] object-cover absolute mt-0' alt="Rectangle" src={Rectangle_stak}/>
              <img className='h-[270px] w-[270px] mt-[192px] absolute object-cover ml-[101px]' alt="Rectangle" src={Rectangle_lob}/>
              <img className='h-[180px] w-[180px] ml-0 object-cover absolute mt-[356px]' alt="Rectangle" src={Rectangle_fish}/>
            </div>
        </div>
    </div>
  )
}

export default Main