'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import Modal from '../Modal';
import Form from '../popup/form';
import { Botao } from '../button';
import { Navigation } from "./navigation";

import LogoReanimate from "../../../public/imagens/logo-reanimate.png";


export default function MenuDesktop(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="sticky w-11/12 flex justify-center max-w-[1440px]">
      <div className='w-full flex justify-center sticky'>
        <div className="relative w-5/12 max-w-[421px]">
          <a href="#home">
            <Image priority={true} src={LogoReanimate} alt="Re.Animate" />
          </a>
        </div>
        <div className='flex w-full max-w-[1019px]'>
          <div className="flex flex-row w-full max-[1550px]:mr-5">
            <Navigation 
              UlStyles="flex w-full flex-row justify-between max-w-[795px]" 
              Contato={openModal} 
              TextosDeNavegacao="leading-[22px] my-auto text-[18px] font-['Fira Sans'] hover:font-bold hover:text-[#dd1b58] max-xl:text-[16px]"  />
          </div>
          <div className="w-[175px] flex justify-center ml-auto my-auto">
            <Botao 
              TextoBotao="LOGIN" 
              Link="https://www.reanimate.com.br/"
              Font="text-[18px]" 
              Tamanho="w-[175px] h-[39px]" 
              Types="text-[#ffffff] hover:text-[#E8336A] bg-[#E8336A] hover:bg-[#ffffff]"/>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </div>
  );
}