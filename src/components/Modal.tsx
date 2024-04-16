'use client'
import React from "react";
import Image from 'next/image';
import { IoClose } from "react-icons/io5";

import fundo from '../../public/imagens/vector-modal.png';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose , children}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div onClick={onClose} className="bottom-0 w-screen modal-background absolute z-50 cursor-pointer inset-0 backdrop-blur bg-[#ffffff]/50">
        <Image priority={true} className="absolute w-screen rifht-0 select-none z-0 bottom-0 z-50" src={fundo} alt="" />
      </div>
      <div className="bg-white w-11/12 max-h-[535px] max-[600px]:max-h-10/12 max-[800px]:max-h-10/12 max-w-[1006px] p-8 flex rounded-[30px] z-50">
        <div className="w-full relative flex-col">
          <div className="relative flex justify-end">
            <button className="relative z-50 justify-items-end flex" onClick={onClose}>
              <IoClose className="w-10 h-10 z-50"  />
            </button>
          </div>
          <div className="w-full max-h-[420px] max-[900px]:overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;