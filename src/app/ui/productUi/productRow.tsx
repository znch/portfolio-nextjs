'use client'

import { FunctionComponent } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "next/link";



interface Props{
    id: number;
    productName: string;
    productCategory: string;
    productDescription: string;
    price: number;
    amountInStock: number;
    onClick: any;
    checkUserAmount: any;
    initUserAmount: number;
    assignedIndex: number;
    
}

export const ProductRow: FunctionComponent<Props> = (props) => {

    const initAmount = props.initUserAmount;
    

    const [amount, setAmount] = useState(initAmount);
    function handleOnChange(id:number , amount: number){
        props.checkUserAmount(id, amount); 
    }
    const [visible, setVisible] = useState(true);
    
    function handleHideComponent(){
        
        () => setVisible(false);
    }
    

    return(
      <>
      { visible &&
        <>
        <div className="border-y my-2 border-black w-full flex">
            <div className="h-24 bg-black w-24 content-center flex-none">
                <h1 className="mx-auto my-auto font-thin text-sm text-center text-white tracking-tighter text-balance">PLACE HOLDER</h1>
            </div>
            <div className="w-full flex justify-between">
                <div className="w-fit my-auto ml-px md:ml-2">
                    <Link href={`./item/${props.id}`} className="no-underline hover:underline">
                        <h1 className="text-xs md:text-lg tracking-tighter">{props.productName}</h1>
                    </Link>
                </div>
                <div className="flex content-baseline my-auto justify-end">
                    <h1 className="font-bold text-md md:text-lg mx-2 md:mx-4 my-auto align-middle">{(props.price * amount).toFixed(2)}€</h1>
                    <input className="w-10 flex-none" size={2} type="number" value={amount} onChange={(e) => {if(Number(e.target.value) > props.amountInStock){
                        setAmount(props.amountInStock);
                        handleOnChange(props.assignedIndex, props.amountInStock);
                    } else{
                        setAmount(Number(e.target.value));
                        handleOnChange(props.assignedIndex, Number(e.target.value))};}} min={0} max={props.amountInStock}/>
                    <button onClick={props.onClick}  className="w-8"><span><XMarkIcon onClick={() => setVisible(false)}></XMarkIcon></span></button>
                </div>
            </div>
        </div>
        </>
        }
    </>
    );

}