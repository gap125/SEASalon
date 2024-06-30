import React from 'react'

const Service = () => {
    return (
        <div className='flex flex-col gap-12 mx-20 my-10 rounded-3xl shadow-xl' id="Services">
            <div className='flex justify-center font-bold text-4xl pt-4'>Our Services</div>
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
    )
}

export default Service