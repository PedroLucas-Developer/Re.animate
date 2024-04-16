'use client'
import { useState } from 'react';
import Image from 'next/image';

import CardsHome from "@/components/home/cards";
import Modal from '@/components/Modal';
import { Botao } from '../components/button';

import Vector1 from "../../public/imagens/vector-1.png";
import Vector2 from "../../public/imagens/vector-2.png";
import Title from "../../public/imagens/title.png";
import AutoImg from "../../public/imagens/home-auto.png";
import Star from "../../public/imagens/stars.png";
import Form from '@/components/popup/form';

export default function Home() {
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
    <div id="home" className="relative w-full flex flex-col justify-center">
      <div className="relative w-full flex flex-row justify-center">
        <div className="absolute select-none left-0 top-[-10rem] z-0">
          <Image priority={true} src={Vector1} alt="" />
        </div>
        <div className="flex flex-col mt-2 w-full justify-center max-[1350px]:w-11/12 max-w-[1338px]">
          <div className="w-full flex max-md:flex-col flex-row justify-center relative">
            <div className="w-1/2 mt-[10rem] pl-2 z-[30] flex flex-col justify-start relative max-[1100px]:w-full max-[450px]:px-5">
              <div className="w-full flex flex-row justify-start max-sm:w-full">
                <Image priority={true} className="flex" src={Title} alt=""/>
              </div>
              <div className="mb-8 mt-2 max-md:mb-0">
                <p className="text-[24px] font-['Fira Sans'] max-[400px]:text-[18px] leading-[30px]">
                  A plataforma de automação que vai revolucionar
                  <br className="max-xl:hidden" />
                  sua produção de banner digitais.
                </p>
              </div>
              <div className="w-[370px] max-sm:w-full max-md:w-[300px] max-lg:w-[290px] mt-10 relative justify-items-start">
                <Botao 
                  Click={openModal} 
                  Font="text-[32px] max-[600px]:text-[18px] max-[1100px]:text-[25px]" 
                  TextoBotao="CONTRATE AGORA" 
                  Tamanho="w-[370px] h-[70px] max-[600px]:h-[50px] max-[1100px]:w-full" 
                  Types="cursor-pointer relative text-[#ffffff] hover:text-[#E8336A] m-auto justify-center bg-[#E8336A] hover:bg-[#ffffff]"/>
              </div>
            </div>
            <div className="w-1/2 mt-32 flex relative flex-row justify-end z-20 max-md:mx-auto max-md:mt-10 max-[1100px]:w-full">
              <Image className='mr-[-0.8rem] max-[1300px]:mr-0 max-[1150px]:w-10/12 max-[800px]:mx-auto' style={{objectFit: "contain"}} priority={true} src={AutoImg} alt="Auto"/>
            </div>
          </div>
          <div id='sobre' className="relative mt-24 flex justify-center z-30">
            <Image priority={true} src={Star} alt=""/>
          </div>
        </div>
        <div className="absolute select-none right-0 top-[-1rem] z-10 flex flex-row-reverse max-md:top-[45rem]">
          <Image priority={true} src={Vector2} alt="" />
        </div>
      </div>
      <div className="relative w-full z-30 mt-[9.2rem] flex flex-row justify-center">
        <CardsHome />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <Form />
      </Modal>
    </div>
  );
}
