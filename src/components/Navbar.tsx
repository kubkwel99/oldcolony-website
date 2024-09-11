'use client';
import React, { useState } from 'react';
import { SiHomebridge } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { MdGroupWork } from 'react-icons/md';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className='bg-green-500 text-gray-900 w-full mx-auto sticky top-0 z-50 shadow-xl border-b-2 border-green-300'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className='container mx-auto flex flex-row items-center justify-between p-4'>
        <div>
          <a
            href=''
            className=''>
            <h1 className='text-xl font-semibold'>OLD COLONY</h1>
          </a>
        </div>
        <div className=' text-xlflex flex-col lg:flex-row lg:items-center lg:justify-between '>
          <button
            className='text-white text-2xl md:hidden'
            onClick={toggleNavbar}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul className='hidden md:flex md:flex-row md:items-center md:gap-5 text-lg'>
            <li className='flex flex-row items-center'>
              <Link
                legacyBehavior
                href='#'>
                <a className='flex text-xl text-black items-center hover:text-neutral-800'>
                  <SiHomebridge className='mr-2' />
                  Domov
                </a>
              </Link>
            </li>
            <li className='flex flex-row items-center'>
              <Link
                legacyBehavior
                href='#about'>
                <a className='flex text-xl text-black items-center hover:text-neutral-800'>
                  <IoIosContacts className='mr-2' />O nás
                </a>
              </Link>
            </li>
            <li className='flex flex-row items-center'>
              <Link
                legacyBehavior
                href='#carier'>
                <a className='flex text-xl text-black items-center hover:text-neutral-800'>
                  <MdGroupWork className='mr-2' />
                  Kariéra
                </a>
              </Link>
            </li>
            <li className='flex flex-row items-center'>
              <Link
                legacyBehavior
                href='#contact'>
                <a className='flex text-xl text-black items-center hover:text-neutral-800'>
                  <IoIosContacts className='mr-2' />
                  Kontakt
                </a>
              </Link>
            </li>
          </ul>
          {isOpen && (
            <ul className='md:hidden absolute top-full left-0 w-full bg-neutral-300 text-gray-900'>
              <li className='p-4'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='flex items-center'>
                  <SiHomebridge className='mr-2' />
                  Domov
                </button>
              </li>
              <li className='p-4'>
                <button
                  onClick={() => scrollToSection('about')}
                  className='flex items-center'>
                  <IoIosContacts className='mr-2' />O nás
                </button>
              </li>
              <li className='p-4'>
                <button
                  onClick={() => scrollToSection('carrier')}
                  className='flex items-center'>
                  <IoIosContacts className='mr-2' />
                  Kariéra
                </button>
              </li>
              <li className='p-4'>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='flex items-center'>
                  <IoIosContacts className='mr-2' />
                  Kontakt
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
