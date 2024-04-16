import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardProps {
  Img: string | StaticImport
  titulo: string
  children: React.ReactNode;
}

export default function Card ({Img, titulo, children}: CardProps ) {
  return (
    <div className="flex flex-row w-full justify-center flex flex-col justify-center">
      <div className="6/12 flex justify-center">
        <Image priority={true} src={Img} alt="" />
      </div>
      <div className="flex flex-col justify-center text-center max-md:w-full">
        <p className="text-[32px] mt-7 font-['Fira Sans'] font-bold max-[700px]:text-[25px] leading-[38px]">
          {titulo}
        </p>
        <p className="text-[24px] h-[120px] font-['Fira Sans'] max-[700px]:text-[19px] leading-[28px]">
          {children}
        </p>
      </div>
    </div>
  )
};