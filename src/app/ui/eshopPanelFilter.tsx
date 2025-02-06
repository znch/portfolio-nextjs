import Link from "next/link";
import { AdjustmentsHorizontalIcon, ShoppingCartIcon} from "@heroicons/react/24/solid";

export default function EshopPanelFilter(){

    return(
        <>
            <div className="w-full md:w-11/12 mx-auto border-black border-y py-2 tracking-tighter">
                <div className="flex inline-flex content-between justify-between w-full">
                
                <div className="my-auto mx-2">
                    <div className="flex inline-flex w-full md:w-fit">
                        <div className="my-auto">
                            <button className="">Seřadit</button>
                        </div>
                        <div className="w-8 ml-2">
                            <span><AdjustmentsHorizontalIcon className=""></AdjustmentsHorizontalIcon></span>
                        </div>
                    </div>
                </div>
                <div className="my-auto mx-2">
                <Link href="eshop-mockup/cart">
                <div className="flex inline-flex">
                    <div className="my-auto">
                        <button className="">Košík</button>
                    </div>
                    <div className="ml-2 w-8">
                        <span><ShoppingCartIcon  className=""></ShoppingCartIcon></span>
                    </div>
                </div>
                </Link>
                </div>

                </div>
            </div>
        </>
    );
}