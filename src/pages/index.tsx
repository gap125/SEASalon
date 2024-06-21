import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Form from './form'
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "600", "800"] })

const Index = () => {
  return (
    <div className={poppins.className}>
      <div className="w-screen h-[634px] rounded-b-3xl shadow-2xl" style={{ backgroundImage: "url('/bgSalon.jpg')", backgroundSize: '1200px' }}>
        <Navbar></Navbar>
        <div className='h-screen mx-20 pb-24 flex items-center'>
          <div className='flex flex-col gap-2 w-[60%] text-white'>
            <h1 className='font-semibold text-4xl'>Beauty and Elegance Redefined</h1>
            <p>Experience the art of beauty and elegance at our salon. Our expert team offers innovative haircuts, luxurious manicures and pedicures, and revitalizing facials, all designed to make you shine inside and out.</p>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700dark:border-gray-700 w-[150px]">Explore More</button>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-12 mx-20 my-10 rounded-3xl shadow-xl' id="Services">
        <div className='flex justify-center font-semibold text-4xl pt-4'>Our Services</div>
        <div className='flex flex-row gap-20 text-center justify-center py-4'>
          <div className='flex flex-col gap-3 items-center w-[20%]'>
            <img src="/barber.png" alt="" className='w-[10rem]' />
            <h3 className='text-xl font-semibold'>Haircuts and Styling</h3>
            <p>Transform your look with our expert haircuts and chic styling.</p>
          </div>
          <div className='flex flex-col gap-3 items-center w-[20%]'>
            <img src="/nails.png" alt="" className='w-[10rem]' />
            <h3 className='text-xl font-semibold'>Manicure and Pedicure</h3>
            <p>Indulge in perfection with our luxurious manicure and pedicure services.</p>
          </div>
          <div className='flex flex-col gap-3 items-center w-[20%]'>
            <img src="/facial.png" alt="" className='w-[10rem]' />
            <h3 className='text-xl font-semibold'>Facial Treatments</h3>
            <p>Revitalize your skin with our personalized facial treatments.</p>
          </div>
        </div>
      </div>


      <Form></Form>
      <Footer></Footer>
    </div >
  )
}

export default Index
