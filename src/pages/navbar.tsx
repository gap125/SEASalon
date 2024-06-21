import React from 'react';
import { useEffect } from 'react';

function Navbar() {
        useEffect(() => {
            const butServices = document.getElementById('butServices')!;
        
            butServices.addEventListener('click', () => {
              const Services = document.getElementById('Services');
              if (Services) {
                Services.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            });
        
            // Clean up event listener on component unmount
            return () => {
              butServices.removeEventListener('click', () => {})!;
            };
          }, []);

    return (
        <div className='h-[66px] bg-black'>
            <div className='flex flex-row mx-20 pt-5 gap-10 justify-between items-center'>
                <a href="./"><img src="/LOGO.png" alt="" className='w-[150px]' /></a>
                <div className='flex flex-row gap-12 text-white'>
                    <a href="./">Home</a>
                    <div id='butServices' style={{cursor: "pointer"}}>Services</div>
                    <a href="./">Products</a>
                    <a href="./">Contact Us</a>
                </div>
            </div>
        </div>

    );
}

export default Navbar