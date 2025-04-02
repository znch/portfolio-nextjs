'use client'

import { FunctionComponent, useState } from "react";


interface Props{
    id: number;
    productName: string;
    productCategory: string;
    productDescription: string;
    price: number;
    amountInStock: number;
    }


export const ProductPage: FunctionComponent<Props> = (props) => {

    const [selectedAmount, setSelectedAmount] = useState(1);


    return(
        <>
        <div className="w-11/12 mx-auto flex flex-col md:flex-row content-center">
            <div className="rounded-sm flex-none my-auto size-64 mx-auto lg:size-96 content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700">
                <h1 className="md:pt-0 mx-auto align-middle font-thin text-2xl text-center text-white">PLACEHOLDER</h1>
            </div>
            <div className="w-full mx-auto md:mx-2 mt-8 md:mt-0 basis-2/3 bg-neutral-100 p-4 rounded-md">
                <h1 className="text-xl lg:text-4xl tracking-tighter">{props.productName}</h1>
                <h1 className="py-2 text-lg lg:text-2xl tracking-tighter font-thin">{props.productCategory}</h1>
                <p className="py-2">{props.price}€</p>
                <p className="py-2">Skladem: <strong>{props.amountInStock}</strong> ks</p>
                <div className="">
                    
                    <input type="number" value={selectedAmount} size={8} onChange={(e)=>{
                        if(Number(e.target.value) > props.amountInStock){setSelectedAmount(props.amountInStock)}
                        else {setSelectedAmount(Number(e.target.value))}
                        }} min={0} max={props.amountInStock} className="w-max mr-2 text-black"/>
                    <button className="ml-4 border-black border-2"><span className="px-2">Přidat</span></button>
                
                </div>
                <p className="tracking-tighter my-2">{props.productDescription}</p>
            </div>
        </div>
        
        
        </>
    );
}