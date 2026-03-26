'use client'

import Image from "next/image";
import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useId } from "react";

interface Props{
    id: number;
    productName: string;
    productCategory: string;
    productDescription: string;
    price: number;
    amountInStock: number;
}

let cartItems: any = [];
//TODO: implementovat ukládání obsahu košíku do session storage
function saveItemInCart(id: number, amount: number, amountInStock: number) {
    let cartContent = new Object({productId: id, productAmount: amount});
    if(cartItems.length === 0){
        cartItems.push(cartContent);
        console.log(cartItems)
        return;
    }
    for(let i in cartItems)
    {
        if(cartItems[i].productId === id){
            cartItems[i].amount += amount;
            if(cartItems[i].amount > amountInStock){
                cartItems[i].amount = amountInStock;
                console.log(`Byla překročena maximální hodnota množství produktu. Nastavuji na amountInStock`)
            }
            console.log(`${cartItems}`)
            return;
        }
    }
    cartItems.push(cartContent);
    console.log(`${cartItems}`)
    
}



export const ProductCard : FunctionComponent<Props> = (props) => {

    const nazevProduktu = props.productName;
    const popisekProduktu = props.productDescription;
    const cenaProduktu = props.price;
    const popisekPridano = <span className="mx-2">Přidáno!</span>;

    const [selectedAmount, setSelectedAmount] = useState(1);
    const [showAddedToCart, setShowAddedToCart] = useState(false);

    function handleShowAddedToCart(){
        
        setShowAddedToCart(true);
    }

    return(
        <>

        <div className="mx-auto h-auto bg-black border-black border rounded-md">
            <div className="box-border overflow-hidden rounded-t-md h-64 content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700">
                <h1 className="mx-auto my-auto font-thin texxt-lg md:text-2xl text-center text-white p-2 whitespace-pre-line">PLACEHOLDER</h1>
            </div>

            <div className="h-[18rem] text-white">
                <div className="mx-2 py-2 flex flex-wrap h-full content-start flex-col">
                    <Link href={`/eshop-mockup/item/${props.id}`} className="no-underline hover:underline text-md md:text-lg lg:text-xl overflow-hidden text-ellipsis">{nazevProduktu}
                        
                    </Link>
                    <p className="font-thin text-md md:text-base h-max line-clamp-6 block">{popisekProduktu}</p>
                    
                    <div className="mt-auto">
                    <p>{cenaProduktu}€</p>
                    <input type="number" value={selectedAmount} size={8} 
                        onChange={(e) => {
                            if(Number(e.target.value) > props.amountInStock) {
                                    setSelectedAmount(props.amountInStock)}
                            else {
                                setSelectedAmount(Number(e.target.value))}
                        }} 
                        min={0}
                        max={props.amountInStock}
                        className="w-full mr-2 text-black pl-2 max-w-14"/>
                    <button className="border-white tracking-tighter border rounded-md px-2"
                        onClick={() => {
                            saveItemInCart(props.id, selectedAmount, props.amountInStock);
                            handleShowAddedToCart()}
                        }
                        ><span className="">Přidat</span></button>
                    </div>
                    
                </div>
            </div>
        </div>  
        
        </>
    );
}

export default ProductCard;

/*

<div className="h-64 w-full content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700">
    <h1 className="mx-auto my-auto font-thin text-2xl text-center text-white">PLACEHOLDER</h1>
</div>

<div className="h-64 overflow-hidden w-full content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700 rounded-t-md">
                
                <Image alt="fotografie produktu" src={'https://picsum.photos/id/'+(props.id+20)+'/200'} height={290} width={290} className="mx-auto"></Image>
                <div className="">PLACEHOLDER</div>
            </div>
*/