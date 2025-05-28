import Image from "next/image";
import { LogoPortfolio } from "@/app/ui/logoPortfolio";
import { ScrollArrowButton } from "./ui/scrollArrowButton";
import KdoCoInfo from "./ui/kdoCoInfo";


export default function Home() {

  ;
  

  return (
    <>
      
        {/** Container pro obrázek a child content */}
        <div className="bg-fixed h-screen shadow-inner bg-cover bg-no-repeat flex flex-col gap-x-20" style={{backgroundImage: "url(/images/2024-07-16-Zlin-Heat-Wandering-34.jpg)"}}>
      
        {/** Container pro logo */}
        <div className="pt-24 xl:pt-36 px-5 xl:mx-auto static flex flex-none">
        <LogoPortfolio textSize="text-6xl" borderStyle="border-y-2 border-black"></LogoPortfolio>
        </div>
        {/** Container pro šipku se scrollem */}
        <div className="h-full flex items-stretch pb-12 xl:pb-0">
        <ScrollArrowButton elementId="infoAbout"></ScrollArrowButton>
        </div>
        </div>
        
    

        <div className="">
        <KdoCoInfo></KdoCoInfo>
        </div>
        
        
      
    </>
    
  );
}
