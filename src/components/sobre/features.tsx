import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface FeaturesProps {
  id: string;
  orientation: string;
  Pc: string | StaticImport;
  Logo: string | StaticImport;
  texto: string;
  alt: string;
  replicate: string;
  children: React.ReactNode;
}

export default function Features ({ Pc, Logo, texto, children, id , orientation, alt, replicate}: FeaturesProps ) {
  return (
    <div id={id} className={"flex justify-center w-full" + ' ' + orientation}>
      <div className={"w-[658px] max-[950px]:w-full max-[600px]:hidden" + ' ' +  replicate} >
        <Image loading="lazy" className="w-full select-none max-[950px]:p-6" src={Pc} alt="" />
      </div>
      <div className="w-1/2 pt-4 ml-1 max-[600px]:w-full max-[950px]:w-full">
        <div className='relative mt-4 max-[1100px]:w-10/12'>
          <Image loading="lazy" className='max-[600px]:w-full' sizes="100%, 100%" src={Logo} alt={alt} />
        </div>
        <div className="pt-[1.9rem] pb-[1.3rem] max-w-[523px]">
          <p className="text-[24px] font-['Fira Sans'] max-[400px]:text-[19px] leading-[28px]">
            {texto}
          </p>
        </div>
        <div className="w-[375px] mt-[1.55rem] relative mr-auto max-[600px]:w-full">
          {children}
        </div>
      </div>
    </div>
  )
};