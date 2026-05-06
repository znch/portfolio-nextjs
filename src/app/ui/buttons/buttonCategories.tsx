"use client"

import { FunctionComponent } from "react"
import Link from "next/link"
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { parseCategories } from "@/app/data/tools";
import { Categories } from "@/app/data/definitions";

function handleToggleDisplay() {
    const ulToggle = document.getElementById("category-toggle");
    ulToggle?.classList.toggle("hidden")

}

export const ButtonCategories : FunctionComponent<Categories> = (props) => {


    const parsedCategories = props.categories

    // list render všech kategorií -> přesměruje na slug category
    const mappedCategories = parsedCategories.map((val: String, i: any) => {
        return <li key={i}><Link href={`/eshop-mockup/category/${val}`}>{val}</Link></li>
    })

    return(
        <>
        <div className="relative">
            <p className="hover:cursor-pointer select-none px-2 inline-flex gap-2" onClick={handleToggleDisplay}>Kategorie <span className="w-4 self-center"><ChevronDownIcon/></span></p>
            <ul className="hidden absolute bg-stone-100 py-2 top-8 pl-2 pr-24 rounded-md border-black border flex-col" id="category-toggle">
                {mappedCategories}
            </ul>
        </div>
        </>
    )
}