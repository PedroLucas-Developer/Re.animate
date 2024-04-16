interface VideoProps {
  Link: string
}


export default function Video({Link}: VideoProps ) {
  return (
    <div className="w-full flex flex-row justify-center">
      <video  
        src={Link}
        className="w-9/12 overflow-visible h-full flex max-[800px]:w-full " 
        autoPlay controls preload="none"/>
    </div>
  );
}
