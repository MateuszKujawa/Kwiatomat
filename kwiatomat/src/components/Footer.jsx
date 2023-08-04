import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className='w-full bg-zinc-400 p-6 border-y border-white'>
        <p className='uppercase text-center text-xs font-extrabold'>Śledź nas i bądź na bierząco!</p>
        <div className='flex mx-auto w-fit space-x-3 pt-4'>
            <a href='#'><FaFacebookF className='text-2xl '/></a>
            <a href='#'><FaInstagram className='text-2xl '/></a>
        </div>
    </div>
    <div className='bg-black'>
        <p className='text-zinc-400 text-sm text-center p-3'>© Copyright by Flores Pracownia 2022</p>
    </div>
    </>
  )
}

export default Footer