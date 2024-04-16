'use client'
import React from "react";

import Image from 'next/image';

import  {Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Cliente from '../../public/imagens/cliente.png';
import Cliente2 from '../../public/imagens/cliente2.png';
import Cliente3 from '../../public/imagens/cliente3.png';
import Cliente4 from '../../public/imagens/cliente4.png';
import Cliente5 from '../../public/imagens/cliente5.png';
import Cliente6 from '../../public/imagens/cliente6.png';

export default function Customers() {
  const projectsChunks = [
    [{ id: 1 , Logo: Cliente }, { id: 2 , Logo: Cliente2 }, { id: 3 , Logo: Cliente3 }, { id: 4 , Logo: Cliente4 }, { id: 5 , Logo: Cliente5 }, { id: 6 , Logo: Cliente6 }],
    [{ id: 7 , Logo: Cliente }, { id: 8 , Logo: Cliente2 }, { id: 9 , Logo: Cliente3 }, { id: 10 , Logo: Cliente4 }, { id: 11 , Logo: Cliente5 }, { id: 12 , Logo: Cliente6 }],
    [{ id: 13 , Logo: Cliente }, { id: 14 , Logo: Cliente2 }, { id: 15 , Logo: Cliente3 }, { id: 16 , Logo: Cliente4 }, { id: 17 , Logo: Cliente5 }, { id: 18 , Logo: Cliente6 }],
    [{ id: 19 , Logo: Cliente }, { id: 20 , Logo: Cliente2 }, { id: 21 , Logo: Cliente3 }, { id: 22 , Logo: Cliente4 }, { id: 23 , Logo: Cliente5 }, { id: 24 , Logo: Cliente6 }]
  ];

  return (
    <div id="cases" className="w-full mt-[5rem] mx-auto max-w-[1920px] z-30">
      <div className="flex flex-row justify-center my-8">
        <p className="text-[48px] font-bold my-auto font-['Fira Sans'] text-[#E8336A] max-[450px]:text-[35px] leading-[85px]">
          Nossos clientes:
        </p>
      </div>
      <div className="flex flex-row cursor-grab justify-center">
        <Swiper pagination={{ type: "bullets", clickable: true }} loop={true} modules={[Navigation, Pagination]} >
          {projectsChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="w-11/12 mx-auto grid grid-cols-6 gap-4 mb-14 max-[450px]:grid-cols-1 max-[1000px]:grid-cols-2 max-[1700px]:grid-cols-3">
                {chunk.map((project) => (
                  <div key={project.id} className="relative flex items-center justify-center">
                    <Image loading="lazy" src={project.Logo} className="w-[300px]" alt="" />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
