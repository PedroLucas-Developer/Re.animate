interface BotaoProps {
  TextoBotao: string;
  Link?: string;
  Click?: React.MouseEventHandler<HTMLDivElement>;
  Types: string;
  Tamanho: string;
  Font: String;
}

export function Botao({ TextoBotao, Link, Click, Types , Tamanho , Font }: BotaoProps) {
  return (
    <a href={Link}>
      <div onClick={Click} className={Types + ' ' + Tamanho + ' ' + 'cursor-pointer justify-center flex rounded-[35px] duration-100'}>
        <p className={"my-auto font-['Fira Sans'] font-bold" + ' ' + Font}>
          {TextoBotao}
        </p>
        <div className={'ml-[5px] mt-[5px] absolute rounded-[35px] border-2 border-black' + ' ' + Tamanho}>
        
        </div>
      </div>
    </a>
  );
}
