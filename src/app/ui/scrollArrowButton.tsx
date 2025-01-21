'use client'

import { ArrowLongDownIcon } from "@heroicons/react/24/solid";
import { FunctionComponent } from "react";


interface Props {
    elementId: string;
}



export const ScrollArrowButton : FunctionComponent<Props> = (props) => {
    const elementId = props.elementId;



    
    return(
        <>
        
        <div className={`h-10 w-10 mx-auto self-end pb-24`}>
          <a href="" onClick={(e => {let scrollElement = document.getElementById(`${elementId}`); e.preventDefault(); scrollElement && scrollElement.scrollIntoView({behavior: "smooth"})})}><span><ArrowLongDownIcon className="fill-white"></ArrowLongDownIcon></span></a>
        </div>
        </>

    );
}
