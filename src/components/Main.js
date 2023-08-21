import React from 'react';
import Box from './Box';


function Main() {
  return (
    <>
    <div className='box-border max-h-screen relative top-20 z-0'>
      <div className='grid grid-cols-1 gap-4'>
        <h1 className='font-serif text-5xl text-center uppercase text-primary_orange-500 mt-6'>Kwiatomat</h1>
        <p className='text-2xl text-center place-self-center text-stone-500 font-semibold mt-6'>Wybierz skrytkę<br></br> i przejdź do płatności</p>
      </div>
    </div>

    <Box/>
    </>
  );
}

export default Main;

