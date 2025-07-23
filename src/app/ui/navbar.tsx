'use client'

import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/solid"
import {LogoPortfolio} from "./logoPortfolio"
import { useState } from "react"


export default function Navbar() {

    const [useMobileNav, setUseMobileNav] = useState(false);
    
    const navbarSm = <div className="w-full visible lg:invisible flex flex-col md:flex-row my-auto text-nowrap overflow-hidden justify-start text-center">
        <div className="w-full shrink py-2 md:py-0 mx-2 border-b md:border-b-0 md:border-x border-white overflow-hidden">
            <Link href="/component-showcase"><h1 className="px-3">Ukázka komponent</h1></Link></div>
        <div className="w-full shrink py-2 md:py-0 mx-2 md:border-x border-white overflow-hidden">
            <Link href="/eshop-mockup"><h1 className="px-3">E-shop mockup</h1></Link></div>
        <div className="w-full shrink py-2 md:py-0 mx-2 border-t md:border-t-0 md:border-x border-white overflow-hidden">
            <Link href="/rizeni-zasob"><h1 className="px-3">Autentizace</h1></Link></div>
    </div>;

    const navbarDefault = <div className="invisible lg:visible flex flex-nowrap my-auto w-px lg:basis-full lg:w-screen justify-start text-nowrap">
        
            <div className="w-max mx-4 border-x border-white overflow-hidden">
                <Link href="/component-showcase"><h1 className="px-3">Ukázka komponent</h1></Link>
            </div>
            <div className="w-max mx-4 border-x border-white overflow-hidden">
                <Link href="/eshop-mockup"><h1 className="px-3">E-shop mockup</h1></Link>
            </div>
            <div className="w-max mx-4 border-x border-white overflow-hidden">
                <Link href="/rizeni-zasob"><h1 className="px-3">Autentizace</h1></Link>
            </div>
    
    
    </div>;

    function isExpanded(){
        setUseMobileNav(!useMobileNav);
        
    }

    return(
        <>
        
        <div className="shadow-lg border-stone-800 border-b h-fit bg-black w-screen text-white text-2xl py-2 overflow-hidden fixed z-50">
            <div className="flex flex-row flex-nowrap grow-0 justify-between lg:justify-normal my-auto">
                <div className="ml-4 lg:mx-4 my-auto basis-1/12">
                    <Link href="/">
                        <LogoPortfolio textSize="text-sm" borderStyle="border-y border-white"></LogoPortfolio>
                    </Link>
                </div>
                
                
                {navbarDefault}
                {useMobileNav && navbarSm}

                <div className="flex mr-2">
                    <button
                    onClick={() => isExpanded()}
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button">
                        <span
                        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white">
                            <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.   75-.75z"
                            clipRule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

        </div>
        </>
    )
}