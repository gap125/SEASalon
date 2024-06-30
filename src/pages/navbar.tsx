import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
        useEffect(() => {
            const butContact= document.getElementById('butContact')!;

            butContact.addEventListener('click', () => {
              const Contact = document.getElementById('Contact');
              if (Contact) {
                Contact.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            });
        
            // Clean up event listener on component unmount
            return () => {
              butContact.removeEventListener('click', () => {})!;
            };
          },
          []);

    return (
        <div className='w-screen h-[66px] bg-black'>
            <div className='flex flex-row mx-20 pt-3 gap-10 justify-between items-center'>
                <a href="./"><img src="/LOGO.png" alt="" className='w-[150px]' /></a>
                <div className='flex flex-row gap-12 text-white items-center '>
                    <a href="./">Home</a>
                    <div id='butContact' style={{cursor: "pointer"}}>Contact</div>
                    <div>
                      <Link href="/reservations">Reservations</Link>
                    </div>
                    <div><Link href="/reservation"><button className='flex items-center justify-center bg-white font-bold text-gray-800 hover:text-white hover:bg-gray-900  rounded-lg text-sm py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700dark:border-gray-700 w-[140px]'>Reserve Now</button></Link></div>
                </div>
            </div>
        </div>

    );
}

export default Navbar