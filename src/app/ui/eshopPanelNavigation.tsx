import { AdjustmentsHorizontalIcon, ShoppingCartIcon} from "@heroicons/react/24/solid";
import ButtonShoppingCart from "./buttons/buttonShoppingCart";
import {ButtonFilter} from "./buttons/buttonFilter";
import {ButtonCategories} from "./buttons/buttonCategories";
import { fetchCategories } from "../data/fetches";
import { parseCategories } from "../data/tools"


export default async function EshopPanelNavigation(){

    const parsedCategories = await parseCategories()

    return(
        <>
            <div className="w-full md:w-11/12 mx-auto border-black border-y py-2 tracking-tighter">
                <div className="flex content-between justify-between w-full">
                

                <div className="my-auto mx-2">
                {/* <ButtonFilter displaySidebar></ButtonFilter> */}
                <ButtonCategories categories={parsedCategories}></ButtonCategories>
                </div>
                <div className="my-auto mx-2">
                <ButtonShoppingCart></ButtonShoppingCart>
                </div>

                </div>
            </div>
        </>
    );
}