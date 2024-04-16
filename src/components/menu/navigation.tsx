'use client'
import { MouseEventHandler } from 'react';

interface NavigationProps {
  UlStyles?: string
  TextosDeNavegacao?: string
  Exit?: MouseEventHandler<HTMLLIElement>;
  Contato?: MouseEventHandler<HTMLLIElement>;
  Form?: MouseEventHandler<HTMLLIElement>;
}

export function Navigation({ Exit, Contato , TextosDeNavegacao, UlStyles}: NavigationProps) {
  return (
    <div className='flex flex-row w-full max-[1150px]:justify-end'>
      <ul className={UlStyles}>
        <li onClick={Exit} className={TextosDeNavegacao}>
          <a href="#home">
            HOME
          </a>
        </li>
        <li onClick={Exit} className={TextosDeNavegacao}>
          <a href="#sobre">
            SOBRE
          </a>
        </li>
        <li onClick={Exit} className={TextosDeNavegacao}>
          <a href="#mastermotion">
            MASTER MOTION
          </a>
        </li>
        <li onClick={Exit} className={TextosDeNavegacao}>
          <a href="#replicate">
            REPLICATE
          </a>
        </li>
        <li onClick={Exit} className={TextosDeNavegacao}>
          <a href="#dynamic">
            DYNAMIC
          </a>
        </li>
        <li onClick={Exit} className={TextosDeNavegacao}>
          <a href="#cases">
            CASES
          </a>
        </li>
        <li onClick={Contato} className={TextosDeNavegacao}>
          <a>
            CONTATO
          </a>
        </li>
      </ul>
    </div>
  );
}

export function NavigationFooter({ Form } : NavigationProps){
  return (
    <div className='flex relative'>
      <ul className='flex flex-col flex-wrap max-[600px]:flex-row max-[600px]:justify-center max-[600px]:w-full'>
        <li className="text-[18px] cursor-pointer max-sm:text-[16px] font-['Fira Sans'] text-[#ffffff] hover:font-bold hover:text-[#E8336A] max-[600px]:mx-auto">
          <a href="#sobre">
            Sobre
          </a>
        </li>
        <li className="text-[18px] cursor-pointer max-sm:text-[16px] font-['Fira Sans'] text-[#ffffff] hover:font-bold hover:text-[#E8336A] max-[600px]:mx-auto">
          <a href="#features">
            Features
          </a>
        </li>
        <li onClick={Form} className="text-[18px] cursor-pointer max-sm:text-[16px] font-['Fira Sans'] text-[#ffffff] hover:font-bold hover:text-[#E8336A] max-[600px]:mx-auto">
          <a >
            Suporte
          </a>
        </li>
        <li onClick={Form} className="text-[18px] cursor-pointer max-sm:text-[16px] font-['Fira Sans'] text-[#ffffff] hover:font-bold hover:text-[#E8336A] max-[600px]:mx-auto">
          <a>
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
}