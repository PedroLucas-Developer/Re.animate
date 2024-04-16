'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Modal from '../Modal';
import Features from './features';
import Video from '../popup/video';
import { Botao } from "../button";

import LogoMasterMotion from "../../../public/imagens/logo-master-motion.png";
import LogoReplicateAds from "../../../public/imagens/logo-replicate-ads.png";
import LogoDynamic from "../../../public/imagens/logo-dynamic.png";
import Point1 from "../../../public/imagens/about-point-1.png";
import Point2 from "../../../public/imagens/about-point-2.png";
import Point3 from "../../../public/imagens/about-point-3.png";
import Point4 from "../../../public/imagens/about-point-4.png";
import PcMasterMotion from "../../../public/imagens/pc-mastermotion.png";
import PcReplicateAds from "../../../public/imagens/pc-replicate.png";
import PcDynamic from "../../../public/imagens/pc-dynamic.png";



export default function Reanimate() {
  const [screenSize, setScreenSize] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLink, setisLink] = useState('');

  const openModal = ({type}: {type: string}) => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  
    if(type === "master")
      setisLink("https://reanimate.pointmedia.com.br/mm.mp4");
  
    if(type === "replicate")
      setisLink("https://reanimate.pointmedia.com.br/ra.mp4");
  
    if(type === "dynamic")
      setisLink("https://reanimate.pointmedia.com.br/da.mp4");
  };  
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setScreenSize('small');
      } else if (window.innerWidth <= 850) {
        setScreenSize('medium');
      } else if (window.innerWidth <= 1200) {
        setScreenSize('large');
      } else {
        setScreenSize('full');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='features' className='flex w-full flex-col justify-center'>
      <div className="relative w-full mx-auto max-[1500px]:w-11/12 max-[950px]:p-10 max-[700px]:pt-14 z-30 px-5 pt-14 pb-24 max-w-[1440px] flex flex-col justify-center backdrop-blur bg-[#F5F5F5]/75 rounded-[49px]">
        <div className="mb-28 mt-10 max-[600px]:mb-14">
          <div className='flex flex-col mx-auto text-center max-[550px]:max-w-[250px]'>
            <p className="text-[48px] font-bold font-['Fira Sans'] text-[#E8336A] max-[950px]:text-[35px]">
              Revolucione a sua operação!
            </p>
            <p className="text-[32px] mt-[10px] font-['Fira Sans'] max-[800px]:text-[25px] max-[600px]:text-[23px] leading-[28px]">
              <b>O re.animate</b> é dividido em três módulos:
            </p>
          </div>
          <div className='flex flex-row justify-center max-w-[1240px] text-center mx-auto flex-wrap mt-[3.8rem] mb-11 max-[600px]:w-10/12'>
            <div>
              <Image loading="lazy" src={LogoMasterMotion} alt="Master Motion" />
            </div>
            <div className="max-[954px]:mt-10">
              <Image className='ml-7 max-[950px]:ml-0' loading="lazy" src={LogoReplicateAds} alt="replicate ads" />
            </div>
            <div className="max-[1388px]:mt-10">
              <Image className=' ml-[1.90rem] max-[900px]:ml-0' loading="lazy" src={LogoDynamic} alt="Dynamic" />
            </div>
          </div>
          <div className='flex flex-col mx-auto max-w-[460px]'>
            <p className="text-[24px] mt-[0.4rem] font-['Fira Sans'] text-center max-[600px]:text-[23px] leading-[28px]">
              Três programas que vão trazer automação a sua linha de produção de banners.
            </p>
          </div>
        </div> 
        <div className="w-full max-w-[1098px] mb-[12rem] mx-auto flex flex-col justify-center">
          <Features 
            replicate='mr-[-5rem] max-[1100px]:mr-0 max-[1100px]:mt-auto'
            alt='Master Motion'
            orientation="flex-row ml-2 max-[950px]:ml-0 max-[950px]:flex-col" 
            id="mastermotion" 
            Pc={PcMasterMotion} 
            Logo={LogoMasterMotion} 
            texto="Dê vida às suas criações de forma simples, e criativa, transformando elementos estáticos, em animações de alto nível. De maneira rápida, fácil e totalmente no code.">
              <Botao 
                Font="text-[30px] max-[600px]:text-[18px] max-[1100px]:text-[25px]" 
                Click={() => openModal({ type: "master" })}
                TextoBotao="VER SOLUÇÃO" 
                Tamanho="w-[370px] max-[600px]:w-full max-[600px]:h-[50px] h-[70px]" 
                Types="bg-[#3899EC] hover:text-[#3899EC] hover:bg-[#ffffff] text-[#ffffff]"/>
          </Features>
          <Features 
            replicate='ml-[-6rem] max-[1100px]:mt-auto max-[1100px]:ml-0'
            alt='Replicate Ads'
            orientation="my-[9rem] mb-[10rem] max-[950px]:flex-col flex-row-reverse max-[600px]:my-14" 
            id="replicate" 
            Pc={PcReplicateAds} 
            Logo={LogoReplicateAds} 
            texto="Otimize o processo de replicação para diversos formatos em apenas um clique, mantendo a qualidade visual. Mudou alguma informação? Altere rapidamente de modo automático toda sua linha criativa.">
              <Botao
                Font="text-[30px] max-[600px]:text-[18px] max-[1100px]:text-[25px]" 
                Click={() => openModal({ type: "replicate" })}
                TextoBotao="VER SOLUÇÃO" 
                Tamanho="w-[370px] max-[600px]:w-full max-[600px]:h-[50px] h-[70px]" 
                Types="bg-[#6E4590] hover:text-[#6E4590] hover:bg-[#ffffff] text-[#ffffff]"/>
          </Features>
          <Features 
            replicate='mr-[-5rem] max-[1100px]:mr-0 max-[1100px]:mt-auto'
            alt='Dynamic Ads'
            orientation="flex-row ml-2 max-[950px]:ml-0 max-[950px]:flex-col" 
            id="dynamic" 
            Pc={PcDynamic} 
            Logo={LogoDynamic} 
            texto="Em casos onde existem muitos produtos e ofertas a serem publicados, crie um feed com inúmeras variações de conteúdos em um só lugar utilizando apenas o KV.">
              <Botao 
                Font="text-[30px] max-[600px]:text-[18px] max-[1100px]:text-[25px]" 
                Click={() => openModal({ type: "dynamic" })}
                TextoBotao="VER SOLUÇÃO" 
                Tamanho="w-[370px] max-[600px]:w-full max-[600px]:h-[50px] h-[70px]" 
                Types="bg-[#ff6f00] hover:text-[#ff6f00] hover:bg-[#ffffff] text-[#ffffff]"/>
          </Features>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        <Video Link={isLink} />
      </Modal>
      <div className="relative mx-auto w-11/12 flex z-30 justify-center flex-row mt-[-8rem] max-[1000px]:w-10/12 max-[850px]:mt-[-10rem]">
        <a className='max-[600px]:w-11/12' href="https://www.pointmedia.com.br/" target='_black'>
          {screenSize === 'small' ? (
            <Image loading="lazy" className='w-full' src={Point4} alt="é uma solução Point Media. re.animate O Fundada em 2017, a Point Media é especializada em ajudar empresas a vencerem os desafios da transformação digital. Atuamos no processo operacional de mídia-online. conheça também nossas soluções para DCO, Media control e ADOPs." />
            ) : (
            screenSize === 'medium' ? (
              <Image loading="lazy" src={Point3} className='cursor-pointer transition-transform transform hover:scale-105' alt="é uma solução Point Media. re.animate O Fundada em 2017, a Point Media é especializada em ajudar empresas a vencerem os desafios da transformação digital. Atuamos no processo operacional de mídia-online. conheça também nossas soluções para DCO, Media control e ADOPs." />
            ) : 
            screenSize === 'large' ? (
              <Image loading="lazy" src={Point2} className='cursor-pointer transition-transform transform hover:scale-105' alt="é uma solução Point Media. re.animate O Fundada em 2017, a Point Media é especializada em ajudar empresas a vencerem os desafios da transformação digital. Atuamos no processo operacional de mídia-online. conheça também nossas soluções para DCO, Media control e ADOPs." />
            ) : (
              <Image loading="lazy" src={Point1} className='cursor-pointer transition-transform transform hover:scale-105' alt="é uma solução Point Media. re.animate O Fundada em 2017, a Point Media é especializada em ajudar empresas a vencerem os desafios da transformação digital. Atuamos no processo operacional de mídia-online. conheça também nossas soluções para DCO, Media control e ADOPs." />
            )
          )}
        </a>
      </div>
    </div>
  );
}
