import React, { useState } from 'react'
import {data} from '../data/data.js'
import filled_star from '../assets/filled_star.png'
import star from '../assets/star.png'

const Foods = () => {

    const [foods] = useState(data)


  return (

    <div name='foods' className='w-[600px] md:w-[1200px] mx-auto justify-between items-center'>
        <div className='flex justify-between items-center h-20 w-full mx-auto px-4 shadow'>
            <h1 className='text-3xl'>Featured Products</h1>
            <p>Home - Shop</p>
        </div>

        <div className='w-[1200px] py-12 flex'>

            <div className=' w-[200px]'>
                <div>
                    <p className='pl-6 text-[20px]'>Filter by:</p>
                    <div className='bg-[#FFAE9F] w-[130px] h-[34px] my-3'>
                        <p className='text-center text-[14px] py-1'>Categories</p>
                    </div>
                    <div className='flex flex-col'>
                        <ul className='flex flex-col text-[#303030] text-[12px]'>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Fruits</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Vegetables</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Dairy & Eggs</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Bakery</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Meat & Seafood</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Pantry Staples</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Snacks</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Beverages</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Organic & Natural</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Specialty Foods</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='bg-[#FFAE9F] w-[130px] h-[34px] my-3'>
                        <p className='text-center text-[14px] py-1'>Rating</p>
                    </div>
                    <div className='flex flex-col'>
                        <ul className='flex flex-col text-[#303030] text-[12px]'>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />5 Stars</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />4 Stars & Up</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />3 Stars & Up</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />2 Stars & Up</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />1 Star $ Up</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='bg-[#FFAE9F] w-[130px] h-[34px] my-3'>
                        <p className='text-center text-[14px] py-1'>Dietry Preferences</p>
                    </div>
                    <div className='flex flex-col'>
                        <ul className='flex flex-col text-[#303030] text-[12px]'>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Glutten Free</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Vegan</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Vegeterian</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Keto</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Paleo</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Organic</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Non-GMO</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Low Sugar</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Low Sodium</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <div className='bg-[#FFAE9F] w-[130px] h-[34px] my-3'>
                        <p className='text-center text-[14px] py-1'>Price Range</p>
                    </div>
                    <div className='flex flex-col'>
                        <ul className='flex flex-col text-[#303030] text-[12px]'>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Under $5</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />$5 - $10</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />$10 - $20</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />$20 - $50</li>
                            <li className='py-2 flex'><input className='mr-2' type='checkbox' />Over $50</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/*Display Foods*/}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-[40px] ml-auto'>
                {foods.map((item, index) => (
                    <div key={index} className='h-[250px] w-[220px] bg-[#F1F1F1]'>
                        <img src={item.image} alt={item.name} className='w-[120] h-[90px] mx-auto my-4'/>
                        <div className='flex flex-col px-2 py-2 items-center'>
                            <p className='text-[18px]'>{item.name}</p>
                            <p>
                                <span className='text-[#D00] text-[14px]'>$10</span>
                            </p>
                            <div className='flex items-center'>
                                <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                                <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                                <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                                <img className='w-[20px] h-[20px]' src={filled_star} alt='star'/>
                                <img className='w-[18px] h-[18px]' src={star} alt='star'/>
                            </div>
                            <button 
                                className='text-white bg-[#00A911] gap-10 p-[8px] w-[100px] h-[35px] text-[14px] justify-center flex items-center hover:scale-105 duration-300'>Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>

  )
}

export default Foods