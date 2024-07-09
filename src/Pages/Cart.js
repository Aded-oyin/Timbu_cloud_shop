import React from 'react'
import Irish_Potatoes from '../assets/Irish_potatoes.png'
import Strawberries from '../assets/Strawberries.png'
import filled_star from '../assets/filled_star.png'
import star from '../assets/star.png'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  return (
    <div className='h-[1400px] md:h-[850px]'>
      
        <div className='md:flex justify-center mt-10'>

          <div className='w-[686px] items-center'>
            <h1 className='text-[30px] text-center'>Cart Items</h1>

            <div className='ml-4'>

              {/*First Cart*/}
              <div className='flex mt-[40px]'>
                <div className=''>
                  <img className='w-[185.71px] h-[185.71px] md:w-[300px] md:h-[300px]' src={Irish_Potatoes} alt='/'/>
                </div>
                <div className='w-[322px] p-[8px] pb-5 text-[9.905px] md:text-[16px]'>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Product Name: Irish Products</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Weight: 1 lb (16 oz)</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Price: $10</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>
                    <div className='flex items-center'>
                        <p className='pr-2'>Rating:</p>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[18px] h-[18px]' src={star} alt='star'/>
                    </div>
                  </p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Brand: Feastify Farms</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Organic: Yes</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Origin: Locally Sourced</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>
                    <div className='flex items-center'>
                      <p className='pr-2'>Quantity:   -    1    +</p>
                      <RiDeleteBin6Line className='ml-auto text-[#C50000]' size={20} />
                    </div>
                  </p>
                </div>
              </div>

              {/*Second Cart*/}
              <div className='flex mt-[40px]'>
                <div className=''>
                  <img className='w-[185.71px] h-[185.71px] md:w-[300px] md:h-[300px]' src={Strawberries} alt='/'/>
                </div>
                <div className='w-[322px] p-[8px] pb-5 text-[9.905px] md:text-[16px]'>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Product Name: Fresh Strawberries</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Weight: 1 lb (16 oz)</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Price: $10</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>
                    <div className='flex items-center'>
                        <p className='pr-2'>Rating:</p>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                        <img className='w-[18px] h-[18px]' src={star} alt='star'/>
                    </div>
                  </p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Brand: Feastify Farms</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Organic: Yes</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>Origin: Locally Sourced</p>
                  <p className='pl-6 py-[4px] md:py-[7px] '>
                    <div className='flex items-center'>
                      <p className='pr-2'>Quantity:   -    1    +</p>
                      <RiDeleteBin6Line className='ml-auto text-[#C50000]' size={20} />
                    </div>
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className='ml-10 w-[400px] md:w-[686px] md:h-[600px] md:mr-4 items-center'>
            <h1 className='text-[30px] text-center'>Order Summary</h1>
            
            <div>

              <div className='md:mt-[40px]'>
                <div className='flex justify-between text-[16px] py-4'>
                  <p>Subtotal:</p>
                  <p>$20:00</p>
                </div>
                <div className='flex justify-between text-[16px] py-4'>
                  <p>Estimated Shipping:</p>
                  <p>N/A</p>
                </div>
                <div className='flex justify-between text-[16px] py-4'>
                  <p>Estimated Tax</p>
                  <p>N/A</p>
                </div>
                <div className='flex justify-between text-[16px] py-4'>
                  <p>Total:</p>
                  <p>$25:00</p>
                </div>
                <div className='flex justify-between text-[16px] py-4'>
                  <p>Have a promo code?</p>
                  <input className='w-[200px] md:w-[342px] h-[42px] bg-transparent border' type='text' placeholder='Enter it here'/>
                </div>
              </div>

              <div className='md:mt-[200px] items-center justify-center'>
                <button className='#C7EDBD h-[43.333px]  md:h-[70px] md:gap-[17.99px] md:p-[14.39px] text-center text-[20px] w-[400px] md:w-full my-5 bg-[#C7EDBD]'>Continue Shopping</button>
                <button className='#C7EDBD h-[43.333px]  md:h-[70px] md:gap-[17.99px] md:p-[14.39px] text-center text-[20px] w-[400px] md:w-full my-5 bg-[#00A911]'>Proceed to Checkout</button>
              </div>

            </div>
          </div>

        </div>

    </div>
  )
}

export default Cart