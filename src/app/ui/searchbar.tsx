'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar(){

    return(
        <>
        <div className="flex flex-inline grow-0 shrink w-max h-12 border-y border-black md:self-end mx-auto">
            <div className="w-8 my-auto mx-2">
                <span><MagnifyingGlassIcon></MagnifyingGlassIcon></span>
            </div>
        
            <input type="text" className="appearance-none focus:outline-0 border-none my-2" size={12}  placeholder="Hledaný výraz..."/>
            <button className="ml-2 px-2 h-full bg-black text-white">Vyhledat</button>

            
        </div>  
        
        </>
    );
}