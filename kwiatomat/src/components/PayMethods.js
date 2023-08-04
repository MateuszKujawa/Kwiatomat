import React from 'react';
import PayMethodsImg from './images/pay_methods.png';

function PayMethods() {

    return (
    <>
    <p className='text-3xl text-center mx-auto pb-4 pt-3 place-self-center text-stone-500 font-semibold'>Metody płatości</p>

    <img src={PayMethodsImg} className='p-6 flex mx-auto'></img>
   
    <div className='w-full flex mx-auto pt-6'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9758.601878985579!2d17.565067029187745!3d52.30419825218416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704e90d12ac3d8d%3A0x9a8d867f97d11091!2sFlores%20Pracownia%20Bierzglinek%20-%20Kwiaciarnia%20Wrze%C5%9Bnia!5e0!3m2!1spl!2spl!4v1691177997742!5m2!1spl!2spl" width="auto" height="500" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mx-auto flex w-full'></iframe>
    </div>
    

    </>
  )
}

export default PayMethods