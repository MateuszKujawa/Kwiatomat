import React from 'react'
import Box from './Box'

function Header() {
  return (
    <>
    <div className='box-border max-h-screen '>
      <div className='grid grid-cols-1 gap-4'>
        <h1 className='font-serif text-5xl text-center uppercase text-amber-700'>Kwiatomat</h1>
        <p className='text-2xl text-center pt-5 w-1/2 place-self-center text-gray-600'>Wybierz skrytkę<br></br> i przejdź do płatności</p>
      </div>
      <Box />
    </div>
    </>
  );
}

export default Header;

