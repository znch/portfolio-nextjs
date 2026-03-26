import { Lexend_Giga } from "next/font/google";
import EshopPanelNavigation from "../ui/eshopPanelNavigation";
import { EshopPanelTop } from "../ui/eshop";

const lexend = Lexend_Giga({
  weight : ['100', '400'],
  subsets : ['latin'],
  display: 'swap',
});





export default function EshopLayout({children}: {children: React.ReactNode}){
    return(
        <section className={`${lexend.className} antialiased`}>
          <div className={` pt-24 mx-auto w-screen mb-12 grid grid-cols-1`}>
                  <div className="w-full mx-auto">
                    <EshopPanelTop></EshopPanelTop>
                    <div className="pt-8">
                      <EshopPanelNavigation />
                    </div>
                  </div>
              </div>    
          {children}

          <div className="h-12">
          </div>
          </section>
    )
}