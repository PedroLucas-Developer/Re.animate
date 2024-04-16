'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import SocialMedia from '../socialmedia';
import Modal from '../Modal';
import Form from '../popup/form';
import { Botao } from '../button';
import { Navigation } from './navigation';

import LogoReanimate from "../../../public/imagens/logo-reanimate.png";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className='flex w-full'>
      <div className='flex w-full relative z-40 px-7 py-4 flex-row justify-between backdrop-blur bg-[#ffffff]/50'>
        <div className="w-6/12 mr-5 relative my-auto">
          <a href="#home" className='cursor-pointer'>
            <Image priority={true} src={LogoReanimate} alt="Re.Animate" />
          </a>
        </div>
        <div className='justify-center flex my-auto' onClick={toggleMenu}>  
          <button input-button-name="Name" className="flex z-40 flex-col relative text-3xl cursor-pointer">
            <div className={`w-9 h-1 bg-[#000000] my-1 rounded-lg transition-transform duration-300 transform origin-center ${ isOpen ? 'transform rotate-45 translate-y-2 bg-[#E8336A]' : ''}`}></div>
            <div className={`w-9 h-1 bg-[#000000] my-1 rounded-lg transition-opacity duration-300 ${ isOpen ? 'opacity-0 bg-[#E8336A]' : ''}`}></div>
            <div className={`w-9 h-1 bg-[#000000] my-1 rounded-lg transition-transform duration-300 transform origin-center ${ isOpen ? 'transform -rotate-45 -translate-y-4 translate-x-0 bg-[#E8336A]' : ''}`}></div>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, x: 100, }} animate={{ opacity: 1, x: 25, }} exit={{ opacity: 0, x: 100,}} transition={{ duration: 0.5 }} style={{ zIndex: 0 }} className="absolute z-30 flex justify-center top-[-2rem] right-0 w-11/12 max-w-[500px] h-screen bg-black max-sm:right-0">
              <div className='w-9/12 py-4 bottom-[-6rem] relative h-4/5'>
                <Navigation 
                  UlStyles='flex flex-row max-[1150px]:flex-col' 
                  TextosDeNavegacao="text-[#ffffff] text-right my-auto pt-5 leading-light text-2xl text-nowrap font-['Fira Sans'] hover:font-bold hover:text-[#dd1b58] max-sm:text-lg" 
                  Contato={openModal} 
                  Exit={toggleMenu} />
                <div className='flex pt-7 flex-row-reverse'>
                  <Botao 
                    TextoBotao="LOGIN" 
                    Link="https://www.reanimate.com.br/" 
                    Font="text-[18px]" 
                    Tamanho="w-[175px] h-[39px]" 
                    Types="text-[#ffffff] hover:text-[#E8336A] bg-[#E8336A] hover:bg-[#ffffff]"/>
                </div>
                <div className='flex pt-7 flex-row-reverse'>
                  <SocialMedia />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </div>
  );
};

export default Mobile;


