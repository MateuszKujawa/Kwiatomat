import React from 'react'

function Box() {
  return (
    <>
    <div className='flex items-center justify-center grid grid-rows-2 grid-flow-col gap-6 mt-10'>

        <a href='#1'>
          <div className='bg-rose-200 w-30 h-30 rounded-3xl shadow-lg shadow-gray-500 p-5'>
            <h3 className='text-gray-600 text-center text-5xl font-bold mb-5'>1</h3>
            <p className='text-gray-600 text-center text-3xl'>29,99 zł</p>
          </div>
        </a>


        <a href='#3'>
          <div className='bg-rose-200 w-30 h-30 rounded-3xl shadow-lg shadow-gray-500 p-5'>
            <h3 className='text-gray-600 text-center text-5xl font-bold mb-5'>3</h3>
            <p className='text-gray-600 text-center text-3xl'>52 zł</p>
          </div>
        </a>


        <a href='#2'>
          <div className='bg-rose-200 w-30 h-30 rounded-3xl shadow-lg shadow-gray-500 p-5'>
            <h3 className='text-gray-600 text-center text-5xl font-bold mb-5'>2</h3>
            <p className='text-gray-600 text-center text-3xl'>78 zł</p>
          </div>
        </a>


        <a href='#4'>
          <div className='bg-rose-200 w-30 h-30 rounded-3xl shadow-lg shadow-gray-500 p-5'>
            <h3 className='text-gray-600 text-center text-5xl font-bold mb-5'>4</h3>
            <p className='text-gray-600 text-center text-3xl'>49,99 zł</p>
          </div>
        </a>
      </div>

      <div className='flex items-center justify-center'>
        <button type='submit' class="bg-teal-600 hover:bg-teal-800 transition duration-300 text-white text-lg p-2 w-4/5 mt-8 rounded-3xl font-bold uppercase">Kupuję i płacę</button>
      </div>
    </>
  )
}

export default Box;