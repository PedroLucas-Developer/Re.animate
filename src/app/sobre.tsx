import Image from 'next/image';

import Reanimate from "../components/sobre/reanimate";

import Vector3 from "../../public/imagens/vector-3.png";
import Vector4 from "../../public/imagens/vector-4.png";

export default function About() {
  return (
    <div className="relative w-full flex flex-row justify-center">
      <div className="absolute select-none top-[-13rem] max-[600px]:top-0 left-0 z-0">
        <Image priority={true} src={Vector3} alt="" />
      </div>
      <div className="w-full mt-20 flex flex-row justify-center">
        <Reanimate />
      </div>
      <div className="absolute select-none bottom-[-5rem] max-[400px]:bottom-[20rem] max-[600px]:bottom-[35rem] right-0 z-0">
        <Image loading="lazy" src={Vector4} alt="" />
      </div>
    </div>
  );
}
