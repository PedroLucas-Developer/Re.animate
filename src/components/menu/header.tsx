import MenuDesktop from "./menudesktop";
import Mobile from "./mobile";

export default function Header(){
  return (
    <div className='flex w-full justify-center'>
      <div className="w-full sticky flex flex-row justify-center z-[49]">
        <div className="max-[1150px]:hidden w-full flex justify-center pt-9">
          <MenuDesktop />
        </div>
        <div className="min-[1151px]:hidden fixed flex w-full justify-end">
          <Mobile />
        </div>
      </div>
    </div>
  );
}