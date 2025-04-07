'use client'

import Image from "next/image";
import { FunctionComponent, useState } from "react";
import Link from "next/link";

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

        

        <div className="w-[19rem] md:w-[18rem] mx-auto h-auto bg-black border-black border-2">
            <div className="h-64 w-full content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700">
                
                <h1 className="mx-auto my-auto font-thin text-2xl text-center text-white">PLACEHOLDER</h1>
            </div>
            <div className="h-[16rem] text-white">
                <div className="mx-2 py-2 flex flex-wrap h-full content-normal">
                    <Link href={`/eshop-mockup/item/${props.id}`} className="no-underline hover:underline">
                        <h1 className="text-lg lg:text-xl">{nazevProduktu}</h1>
                    </Link>
                    <p className="font-thin h-max">{popisekProduktu}</p>
                    
                    <div className="self-end">
                    <p>{cenaProduktu}€</p>
                    <input type="number" value={selectedAmount} size={8} onChange={(e)=>{
                        if(Number(e.target.value) > props.amountInStock){setSelectedAmount(props.amountInStock)}
                        else {setSelectedAmount(Number(e.target.value))}
                        }} min={0} max={props.amountInStock} className="w-max mr-2 text-black"/>
                    <button className="border-white border-2" onClick={() => {saveItemInCart(props.id, selectedAmount, props.amountInStock); handleShowAddedToCart()}}><span className="px-2">Přidat</span></button>{showAddedToCart && popisekPridano}
                    </div>
                    
                </div>
            </div>
        </div>  
        

        </>
    );
}

export default ProductCard;