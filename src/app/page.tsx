import Image from "next/image";
import { LogoPortfolio } from "@/app/ui/logoPortfolio";
import { ArrowLongDownIcon, ArrowDownCircleIcon } from "@heroicons/react/24/solid";


export default function Home() {

  const infoAbout = <div className="h-screen flex mt-20" id="infoAbout">
  <div className="w-1/2"><h1 className="text-white text-center text-3xl font-thin">.</h1></div>
  <div className="w-1/2"><h1 className="text-white text-center text-3xl font-thin">Kdo jsem.</h1></div>
  </div>;

  return (
    <>
      
        {/** Container pro fixnutý obrázek a child content */}
        <div className="bg-fixed h-screen shadow-inner bg-cover bg-no-repeat flex flex-col gap-x-20" style={{backgroundImage: "url(/images/2024-07-16-Zlin-Heat-Wandering-34.jpg)"}}>
      
        {/** Container pro logo */}
        <div className="pt-24 lg:pt-36 px-5 lg:mx-auto static flex flex-none">
        <LogoPortfolio textSize="text-6xl" borderStyle="border-y-2 border-black"></LogoPortfolio>
        </div>
        {/** Container pro šipku se scrollem */}
        <div className="h-full flex items-stretch">
        <div className="h-10 w-10 mx-auto self-end pb-24">
          <a href="#infoAbout"><span><ArrowLongDownIcon className="fill-white"></ArrowLongDownIcon></span></a>
        </div>
        </div>
        </div>

    

    
        {infoAbout}
      
    </>
    
  );
}
