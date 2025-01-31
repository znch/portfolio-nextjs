import {EshopPanelSide, ProductWrapper, EshopPanelTop} from "../ui/eshop";
import { Lexend_Giga } from "next/font/google";

const lexend = Lexend_Giga({
  weight : ['100', '400'],
  subsets : ['latin'],
  display: 'swap',
})



export default function Page() {

    return(
    <>
    <div className={`${lexend.className} pt-32 mx-auto w-screen md:w-10/12 mb-12`}>
        <EshopPanelTop></EshopPanelTop>

        <EshopPanelSide />

        <div className="w-full pt-16 flex content-center align-center">
        <ProductWrapper></ProductWrapper>
        </div>
        
        

    </div>
    </>
    );
    
}