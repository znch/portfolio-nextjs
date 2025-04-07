'use client'

import Link from "next/link";
import { AdjustmentsHorizontalIcon, ShoppingCartIcon} from "@heroicons/react/24/solid";
import ButtonShoppingCart from "./buttons/buttonShoppingCart";
import ButtonFilter from "./buttons/buttonFilter";



export default function EshopPanelFilter(){

    return(
        <>
            <div className="w-full md:w-11/12 mx-auto border-black border-y py-2 tracking-tighter">
                <div className="flex content-between justify-between w-full">
                
                <div className="my-auto mx-2">
                <ButtonFilter></ButtonFilter>
                </div>
                <div className="my-auto mx-2">
                <ButtonShoppingCart></ButtonShoppingCart>
                </div>

                </div>
            </div>
        </>
    );
}