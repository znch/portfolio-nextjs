import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ButtonFilter(){

    return(
        <>
        <Link href="#">
        <div className="flex inline-flex">
            <div className="my-auto">
                <button className="">Seřadit</button>
            </div>
            <div className="w-8 ml-2">
                <span><AdjustmentsHorizontalIcon className=""></AdjustmentsHorizontalIcon></span>
            </div>
        </div>
        </Link>
        </>
    );
}