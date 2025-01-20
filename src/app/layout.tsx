import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import { Afacad_Flux } from "next/font/google"

const afacadFlux = Afacad_Flux({
  subsets : ['latin'],
  display : 'swap',
})




const roboto = Roboto({
  weight : ['100', '400'],
  subsets : ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Portfolio. by znch",
  description: "Portfolio app by znch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${roboto.className} no-scrollbar scroll-smooth`}
      >

        <div className={`${afacadFlux.className} font-thin`}>
          <Navbar></Navbar>
        </div>
        <div>
        {children}
        </div>
        
        
        
        
      </body>
    </html>
  );
}
