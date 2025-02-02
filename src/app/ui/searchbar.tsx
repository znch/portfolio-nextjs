'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term:string)
    {
        const params = new URLSearchParams(searchParams);
        if(term) {
            params.set('query', term);
        } else{
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return(
        <>
        <div className="flex grow-0 shrink w-max h-12 border-b border-dashed border-black md:self-end mx-auto">
            
        
            <input type="text" className="appearance-none focus:outline-0 border-none my-2" size={16}  placeholder="Hledaný výraz..."
            onChange={(e) => {handleSearch(e.target.value)}}
            defaultValue={searchParams.get('query')?.toString()}
            />
            <div className="w-8 my-auto mx-2">
                <span><MagnifyingGlassIcon></MagnifyingGlassIcon></span>
            </div>
            
        </div>  
        
        </>
    );
}