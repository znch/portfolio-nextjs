import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/solid"
import {LogoPortfolio} from "./logoPortfolio"


export default function Navbar() {


    return(
        <>
        
        <div className="bg-black w-full text-white text-2xl py-2 overflow-hidden">
            <div className="flex flex-row">
                <div className="mx-10 basis-1/12">
                    <Link href="/">
                        <LogoPortfolio textSize="text-sm" borderStyle="border-y border-white"></LogoPortfolio>
                    </Link>

                

                </div>
                <div className="">
                    <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
      
                    <span
                    className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.   75-.75z"
                    clipRule="evenodd" />
                    </svg>
                    </span>
                    </button>
                </div>
                <div className="invisible md:visible md:flex my-auto basis-7/12 w-full justify-evenly">
                    <div className="w-max mx-2 border-x border-white"><Link href="/rizeni-zasob"><h1 className="px-3">E-shop Mockup</h1></Link></div>
                    <div className="w-max mx-2 border-x border-white"><Link href="/rizeni-zasob"><h1 className="px-3">Ukázka komponent</h1></Link></div>
                    <div className="w-max mx-2 border-x border-white"><Link href="/rizeni-zasob"><h1 className="px-3">Autentizace</h1></Link></div>
                    <div className="w-max mx-2 border-x border-white"><Link href="/rizeni-zasob"><h1 className="px-3">Řízení zásob</h1></Link></div>
                </div>
            </div>

        </div>
        </>
    )
}