'use client'
import Image from "next/image";



export default function TechStackShowcase(){

    const iconStyle = "my-4 h-24 flex items-center mx-4";

    return(
    <>
    <div className="w-10/12 md:w-8/12 flex flex-wrap pt-8 mx-auto justify-center">
    
    
    <div className={`${iconStyle}`}><Image src="/w3_html5-ar21.svg" alt="" width={150} height={150}></Image></div>
    <div className={`${iconStyle}`}><Image src="/w3_css-icon.svg" alt="" width={75} height={75}></Image></div>
    <div className={`${iconStyle}`}><Image src="/tailwindcss-icon.svg" alt="" width={75} height={75}></Image></div>
    <div className={`${iconStyle}`}><Image src="/git-scm-ar21.svg" alt="" width={150} height={150}></Image></div>
    <div className={`${iconStyle}`}><Image src="/javascript-icon.svg" alt="" width={75} height={75}></Image></div>
    <div className={`${iconStyle}`}><Image src="/nodejs-horizontal.svg" alt="" width={150} height={150}></Image></div>
    <div className={`${iconStyle}`}><Image src="/reactjs-icon.svg" alt="" width={75} height={75}></Image></div>
    <div className={`${iconStyle}`}><Image src="/next.svg" alt="" width={150} height={150}></Image></div>
    

    </div>
    </>
    );

}