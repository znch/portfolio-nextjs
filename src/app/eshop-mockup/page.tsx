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
    <div className={`${lexend.className} pt-32 mx-4 md:mx-auto md:w-10/12 `}>
        <EshopPanelTop></EshopPanelTop>

        <div className="w-full">
        <ProductWrapper></ProductWrapper>
        </div>
        
        <EshopPanelSide></EshopPanelSide>

    </div>
    </>
    );
    
}