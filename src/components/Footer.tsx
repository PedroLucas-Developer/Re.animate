'use client'
import { useState } from 'react';
import Image from 'next/image';

import Modal from './Modal';
import SocialMedia from './socialmedia';
import Send from './popup/send';
import Form from './popup/form';

import { Botao } from './button';
import { NavigationFooter } from './menu/navigation';

import Vector5 from "../../public/imagens/vector-5.png";
import LogoReanimate from "../../public/imagens/logo-reanimate-footer.png";


export default function Footer(){
  const [SendModal, setSendModal] = useState(false);
  const [FormModal, setFormModal] = useState(false);
  const [email, setEmail] = useState('');

  const FormModalOpen = () => {
    setFormModal(true);
    document.body.style.overflow = 'hidden';
  }

  const FormModalClose = () => {
    setFormModal(false);
    document.body.style.overflow = '';
  };

  const SendModalOpen = () => {
    if (validarEmail(email)) {
      setSendModal(true);
      document.body.style.overflow = 'hidden';
      setEmail('');
    } else {
      alert('Por favor, insira um email válido.');
    }
  };

  const sendModalClose = () => {
    setSendModal(false);
    document.body.style.overflow = '';
  };

  const validarEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return(
    <div className='w-full flex relative'>
      <div className='flex flex-row h-[700px] w-full relative justify-center'>
        <div className='max-w-[1270px] absolute z-40 flex flex-row bottom-[12.5rem] max-[500px]:px-2 max-[1100px]:bottom-[10rem] max-[1100px]:flex-col max-[1100px]:w-full w-full max-[1100px]:justify-center px-10 justify-between'>
          <div className='flex flex-row justify-between w-[515px] max-[600px]:w-full max-[600px]:flex-col max-[1100px]:mx-auto'>
            <div className='max-[600px]:mx-auto max-[1100px]:my-auto'>
              <a href="#home">
                <Image loading="lazy" src={LogoReanimate} alt="Re.animate" />
              </a>
            </div>
            <div className='w-[200px] pl-6 max-[1200px]:pl-0 max-[1100px]:my-7 max-[1100px]:max-w-[320px] max-[600px]:w-full max-[600px]:mx-auto max-[1100px]:ml-8'>
              <p className="text-[32px] max-sm:text-[25px] pb-2 font-['Fira Sans'] max-[600px]:text-center font-bold text-[#ffffff]">
                Re.animate
              </p>
              <NavigationFooter Form={FormModalOpen}  />
            </div>
          </div>
          <div className='pt-1 pl-1 w-[550px] max-[1100px]:mx-auto max-[600px]:w-11/12'>
            <p className="leading-[38px] text-[32px] max-sm:text-[25px] pb-5 max-[1100px]:pb-4 font-['Fira Sans'] max-[1100px]:text-center font-bold text-[#ffffff]">
              Siga-nos para mais informações:
            </p>
            <input value={email} 
              id='email'
              name="Email"
              onChange={handleEmailChange}  
              autoComplete="email"
              type="email" 
              placeholder="seuemail@seudominio.com.br" 
              className="w-[557px] max-[1100px]:w-full py-2 px-7 h-[58px] border-2 border-[#E8336A] text-[18px] font-['Fira Sans'] rounded-[29px] placeholder:text-white text-white bg-white bg-opacity-25 focus:outline-none"
            />
            <div className='w-[182px] pt-5 max-[600px]:justify-center flex max-[1100px]:w-full'>
              <Botao 
                Font="text-[18px]" 
                Click={SendModalOpen} 
                TextoBotao="Inscrever" 
                Tamanho="w-[179px] h-[40px]" 
                Types="text-[#E8336A] hover:text-[#ffffff] bg-[#ffffff] hover:bg-[#E8336A]"/>
            </div>
          </div>
        </div>
        <div className='flex w-10/12 z-30 flex-col pt-6 absolute bottom-0 max-w-[1287px] border-t border-[#FFFFFF] max-[1100px]:pt-5'>
          <div className='mx-auto pt-4' >
            <SocialMedia/>
          </div>
          <p className="text-[14px] my-5 pb-3 font-['Fira Sans'] text-center text-[#ffffff] max-[1100px]:pb-0">©2021 PointMedia. All Rights Reserved</p>
        </div>
        <div className="absolute select-none bottom-0 z-0">
          <Image loading="lazy" className='object-none h-[700px]' src={Vector5} alt="" />
        </div>
      </div>
      <Modal isOpen={SendModal} onClose={sendModalClose}>
        <Send />
      </Modal>
      <Modal isOpen={FormModal} onClose={FormModalClose}>
        <Form />
      </Modal>
    </div>
  );
}