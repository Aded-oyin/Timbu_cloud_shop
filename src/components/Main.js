import React from 'react'
import Food from '../assets/food.jpg'

const Main = () => {
  return (
    <div className='h-[700px] md:h-[550px] flex w-full justify-center items-center'>
        <div className='grid md:grid-cols-2'>
          <div className='max-w-[1000px] items-center px-8 flex flex-col justify-center h-full'>
            <p className='font-serif text-3xl pb-5'>Weekend Offer!!</p>
            <p className='text-4xl sm:text-4xl'>Meat and Seafoods Up to 40% Off</p>
            <div>
              <button className='text-white bg-[#00A911] group border-2 px-6 py-3 my-2 flex items-center hover:border-[#00A911] duration-500'>
                  Shop Now
              </button>
            </div>
          </div>

          <div>
            <img className='max-w-[300px] md:max-w-[400px] mx-auto my-4 rounded-full' src={Food} alt='/'/>
          </div>
        </div>
    </div>
  )
}

export default Main