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

let cartItemIds: Array<number> = [];

// uloží id předmětu do sesionu, který accessuju v košíku -> logika na sestavení listu z id a množství
function saveItemInCart(id: number, amount: number) {
    //funguje jen za předpokladu že do sessionStorage nepřidávám žádná další data!!! -> bandaid solution v produ bych musel udělat nějaký parse algoritmus
    let length = sessionStorage.length;
    const cartItemKey = "cartItem".concat(String(length/2));
    if(cartItemIds.length === 0){
        cartItemIds.push(id);
        sessionStorage.setItem(cartItemKey, String(id));
        sessionStorage.setItem(cartItemKey.concat("amount"), String(amount));
        console.log(`Ke klíči ${cartItemKey} bylo přiřazeno id ${id}`);
        console.log(`Ke klíči ${cartItemKey.concat("amount")} bylo přiřazeno množství ${amount}`);
        return;
    }

    for(let i in cartItemIds){
        console.log(i);
        if(cartItemIds[i] == id)
        {
            const currentAmount: number = Number(sessionStorage.getItem(String("cartItem"+(i)+"amount")));
            sessionStorage.setItem(String("cartItem"+(i)+"amount"), String(currentAmount+amount));
            console.log(`U klíče ${"cartItem"+(i)+"amount"} bylo nastaveno množství ${currentAmount+amount} z předešlého ${currentAmount}`);
            

        } else {
            sessionStorage.setItem(cartItemKey, String(id));
            sessionStorage.setItem(cartItemKey.concat("amount"), String(amount));
            cartItemIds.push(id);
            console.log(`Ke klíči ${cartItemKey} bylo přiřazeno id ${id}`);
            console.log(`Ke klíči ${cartItemKey.concat("amount")} bylo přiřazeno množství ${amount}`);
            console.log(cartItemIds);
            return;
        }
    
    }
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
                    <Link href={`eshop-mockup/item/${props.id}`} className="no-underline hover:underline">
                        <h1 className="text-xl lg:text-2xl">{nazevProduktu}</h1>
                    </Link>
                    <p className="font-thin h-max">{popisekProduktu}</p>
                    
                    <div className="self-end">
                    <p>{cenaProduktu}€</p>
                    <input type="number" value={selectedAmount} size={8} onChange={(e)=>{
                        if(Number(e.target.value) > props.amountInStock){setSelectedAmount(props.amountInStock)}
                        else {setSelectedAmount(Number(e.target.value))}
                        }} min={0} max={props.amountInStock} className="w-max mr-2 text-black"/>
                    <button className="border-white border-2" onClick={() => {saveItemInCart(props.id, selectedAmount); handleShowAddedToCart()}}><span className="px-2">Přidat</span></button>{showAddedToCart && popisekPridano}
                    </div>
                    
                </div>
            </div>
        </div>  
        

        </>
    );
}

export default ProductCard;