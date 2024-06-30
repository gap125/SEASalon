import React from 'react'

const LandingPage = () => {
    return (
        <div className="w-screen h-[634px] rounded-b-3xl shadow-2xl" style={{ backgroundImage: "url('/bgSalon.jpg')", backgroundSize: '1200px' }}>
            <div className='h-screen mx-20 pb-24 flex items-center'>
            <div className='flex flex-col gap-2 w-[60%] text-white'>
                <h1 className='font-semibold text-5xl'>Beauty and Elegance Redefined</h1>
                <p>Experience the art of beauty and elegance at our salon. Our expert team offers innovative haircuts, luxurious manicures and pedicures, and revitalizing facials, all designed to make you shine inside and out.</p>
                <a href='#Contact'>
                <button type="button" className="text-gray-800 font-bold bg-white hover:bg-gray-900 hover:text-white rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700dark:border-gray-700 w-auto">Contact Us</button>
                </a>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            </div>
        </div>     
    )
}

export default LandingPage