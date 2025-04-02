import { FunctionComponent } from "react";
import Link from "next/link";

interface Props{
    product_id: Number;
    product_name: String;
}

export const ProductCardSmall: FunctionComponent<Props> = (props) => {

    

    return(
        <>
        <div className="w-full md:w-1/3 lg:w-1/5 flex-col h-64 align-middle">
            
            {/** Obrázek */}
            <div className="rounded-sm flex-none my-auto size-32 mx-auto content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700">
                <h1 className="md:pt-0 mx-auto align-middle font-thin text-2xl text-center text-white">PLACE
                    HOLDER</h1>
            </div>

            {/** Text link */}
            <div className="mx-auto my-2 h-max py-auto flex w-40">
                <Link href={`/eshop-mockup/item/${props.product_id}`} className="no-underline hover:underline"><h1 className="text-xl text-center">{props.product_name}</h1></Link>
            </div>
            
        </div>
        </>
    );
}