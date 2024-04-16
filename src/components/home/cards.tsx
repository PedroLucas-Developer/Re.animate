import Card from './card';

import Scale from "../../../public/imagens/scale.png";
import Agility from "../../../public/imagens/agility.png";
import Check from "../../../public/imagens/check.png";

export default function CardsHome () {
  return (
    <div className="flex flex-row w-full justify-between max-w-[1200px] max-[1100px]:flex-col">
      <div className="w-8/12 flex flex-row justify-between max-[1100px]:mx-auto max-[1100px]:w-11/12 max-[600px]:flex-col">
        <div className="w-1/2 max-w-[350px] max-[1100px]:w-full ml-[0.8rem] max-[1100px]:ml-0 max-[600px]:mx-auto">
          <Card Img={Check} titulo="Mais qualidade">
            Replique a peça master
            <br />
            em diversos formatos tanto
            <br />
            animados quanto estáticos.
          </Card>
        </div>
        <div className="w-1/2 max-w-[350px] mr-[0.7rem] max-[1100px]:mr-0 max-[1100px]:w-full max-[600px]:mt-10 max-[600px]:mx-auto">
          <Card Img={Scale} titulo="Mais escalabilidade">
            Crie milhares de peças
            <br />
            a partir de uma só.
          </Card>
        </div>
      </div>
      <div className="w-full max-w-[300px] ml-auto max-[1100px]:mx-auto flex justify-center flex-col max-[1100px]:mt-10">
        <Card Img={Agility} titulo="Mais agilidade">
          Tenha uma campanha
          <br />
          inteira nas mãos em
          <br />
          poucos cliques.
        </Card>
      </div>
    </div>
  )
};