import React from 'react'

const Footer = () => {
    return (
        <div className='h-[270px] bg-item' id='Contact' >
            <div className='pt-12 mx-14 flex felx-row justify-between'>
            <div className='color-white text-white flex flex-col gap-4 w-[388px]'>
                <a href="./"><img src="/LOGO.png" alt="" className='w-[150px]' /></a>
                <div className='text-[16px]'>
                Experience the art of beauty and elegance at our salon. All designed to make you shine inside and out.
                </div>
                <div className='text-[12px]'>
                Perum. Gading Fajar 1 B6/21 Buduran
                Sidoarjo, East Java - 61252
                Indonesia
                </div>
                <img src="/icon1.png" alt="" className='w-[122px]' />
            </div>
            <div className='text-white flex flex-col gap-6 w-[218px]'>
                <h3 className='text-[24px] font-bold'>Our Services</h3>
                <div className='text-[12px] flex flex-col gap-4'>
                <a href="">Haircuts and Styling</a>
                <a href="">Manicure and Pedicure</a>
                <a href="">Facial Treatments</a>
                </div>
            </div>
            <div className='text-white flex flex-col gap-4 w-[218px]'>
                <h3 className='text-[24px] font-bold'>Contact Us</h3>
                <div className='text-[12px] flex flex-col gap-4'>
                <div>
                    <div className='font-semibold text-[16px]'>Thomas</div>
                    <div>Phone Number: 08123456789</div>
                </div>  
                <div>
                    <div className='font-semibold text-[16px]'>Sekar</div>
                    <div>Phone Number: 08164829372</div>
                </div>  
                
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer