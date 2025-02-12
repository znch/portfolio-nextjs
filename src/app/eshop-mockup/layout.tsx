import { Lexend_Giga } from "next/font/google";

const lexend = Lexend_Giga({
  weight : ['100', '400'],
  subsets : ['latin'],
  display: 'swap',
});





export default function EshopLayout({children}: {children: React.ReactNode}){
    return(
        <section className={`${lexend.className}`}>{children}</section>
    )
}