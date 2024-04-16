import { Botao } from "../button";

export default function Form() {

  function enviar(){
    alert('Enviado')
  };

  return (
    <div id='Form' className="w-full flex mt-4 flex-row justify-center">
      <div className="relative w-full flex flex-row justify-between max-[900px]:flex-col">
        <div className="w-1/3 pr-3 flex flex-col relative max-[900px]:w-11/12 max-[500px]:mx-auto">
          <p className="text-[32px] font-bold text-[#E8336A] font-['Fira Sans'] max-[475px]:text-[23px] max-[900px]:text-[30px] max-[1100px]:text-[28px]">
            Agende sua demo
          </p>
          <p className="max-w-[230px] text-[24px] pt-3 text-black font-['Fira Sans'] max-[900px]:text-[22px] max-[500px]:text-[18px] max-[1100px]:text-[18px]">
            Nos conte um pouco
            sobre você e como
            podemos te ajudar.
          </p>
        </div>
        <div className="w-2/3 flex relative max-w-[557px] flex-col max-[900px]:mt-8 max-[900px]:w-11/12 max-[500px]:mr-auto ">
          <input 
            id="nome"
            name="Nome"
            type="text" 
            placeholder="Nome:" 
            autoComplete="name"
            className="w-[557px] max-[1100px]:w-full py-2 px-7 h-[40px] border-2 border-[#E8336A] text-[18px] font-['Fira Sans'] rounded-[29px] bg-opacity-25 focus:outline-none" />
          <input 
            id="Email"
            name="Email"
            type="email" 
            placeholder="E-mail:" 
            autoComplete="email"
            className="mt-3 w-[557px] max-[1100px]:w-full py-2 px-7 h-[40px] border-2 border-[#E8336A] text-[18px] font-['Fira Sans'] rounded-[29px] bg-opacity-25 focus:outline-none" />
          <input 
            id="produto"
            name="Produto"
            type="text" 
            autoComplete="organization"
            placeholder="Agência/Produto:" 
            className="mt-3 w-[557px] max-[1100px]:w-full py-2 px-7 h-[40px] border-2 border-[#E8336A] text-[18px] font-['Fira Sans'] rounded-[29px] bg-opacity-25 focus:outline-none" />
          <input 
            id="telefone"
            name="Telefone"
            type="text" 
            autoComplete="tel"
            placeholder="Telefone:" 
            className="mt-3 w-[557px] max-[1100px]:w-full py-2 px-7 h-[40px] border-2 border-[#E8336A] text-[18px] font-['Fira Sans'] rounded-[29px] bg-opacity-25 focus:outline-none" />
          <textarea 
            id="mensagem"
            name="Mensagem"
            placeholder="Mensagem:" 
            autoComplete="off"
            className="mt-3 w-[557px] resize-none max-[1100px]:w-full py-2 px-7 h-[142px] border-2 border-[#E8336A] text-[18px] font-['Fira Sans'] rounded-[10px] bg-opacity-25 focus:outline-none">
          </textarea>
          <div className="w-[182px] pt-7 max-[1100px]:w-full">
            <Botao 
              TextoBotao="Enviar" 
              Click={enviar} 
              Link="#Enviar" 
              Font="text-[18px]" 
              Tamanho="w-[182px] h-[42px] " 
              Types="text-[#ffffff] bg-[#E8336A] hover:bg-[#000000]"/>
          </div>  
        </div>
      </div>
    </div>
  );
}
