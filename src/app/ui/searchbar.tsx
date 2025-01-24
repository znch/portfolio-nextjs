'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar(){

    return(
        <>
        <div className="flex flex-inline w-full h-12 border-y border-black">
            <div className="w-8 my-auto mx-2">
                <span><MagnifyingGlassIcon></MagnifyingGlassIcon></span>
            </div>
        
            <input type="appearance-none focus:outline-0 border-none" size={14}  placeholder="Hledaný výraz..."/>
            <button className="ml-2 px-2 h-full bg-black text-white">Vyhledat</button>
        </div>  
        </>
    );
}