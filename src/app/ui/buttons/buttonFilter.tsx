import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import {Modal} from '@mui/material';
import { FunctionComponent } from "react";


interface Props{
    displaySidebar: boolean

}

function handleDisplayFilterSidebar(){

}

export const ButtonFilter : FunctionComponent<Props> = (props) => {

    return(
        <>
        <button onClick={handleDisplayFilterSidebar}>
        <div className="flex">
            <div className="my-auto">
                <span className="">Filtrovat</span>
            </div>
            <div className="w-8 ml-2">
                <span><AdjustmentsHorizontalIcon className=""></AdjustmentsHorizontalIcon></span>
            </div>
        </div>
        </button>
        </>
    );
}

export default ButtonFilter;