/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons-ai';

const Navbar = () => {
    const [nav, setNav] =useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className="flex justify-between items-center h-24 max-w-[12440pxs] mx-auto px-4 text-white">
        <h1 className='w-full font-bold text-3xl text-blue-500'>FinanceAPI</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Documentation</li>
            <li className='p-4'>APIs</li>
            <li className='p-4'>Support</li>
            <li className='p-4'>Profiles</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {/* {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} */}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#0F182B] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full font-hold m- text-3xl text-blue-500">FinanceApi</h1>
        <ul className='p-4 uppercase'>
            <li className='p-4 border-b-2 border-gray-800'>Home</li>
            <li className='p-4 border-b-2 border-gray-800'>Documentation</li>
            <li className='p-4 border-b-2 border-gray-800'>APIs</li>
            <li className='p-4 border-b-2 border-gray-800'>Support</li>
            <li className='p-4 border-b-2 border-gray-800'>Profiles</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar;

