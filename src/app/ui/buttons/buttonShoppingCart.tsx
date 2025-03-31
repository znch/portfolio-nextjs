import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


export default function ButtonShoppingCart(){
 
    return(
        <>
        <Link href="/eshop-mockup/cart">
            <div className="flex">
                <div className="my-auto">
                    <button className="">Košík</button>
                </div>
                <div className="mx-2 w-8">
                    <span><ShoppingCartIcon></ShoppingCartIcon></span>
                </div>
            </div>
        </Link>
        </>
    );
}