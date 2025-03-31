import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ButtonFilter(){

    return(
        <>
        <Link href="#">
        <div className="flex">
            <div className="my-auto">
                <button className="">Filtrovat</button>
            </div>
            <div className="w-8 ml-2">
                <span><AdjustmentsHorizontalIcon className=""></AdjustmentsHorizontalIcon></span>
            </div>
        </div>
        </Link>
        </>
    );
}