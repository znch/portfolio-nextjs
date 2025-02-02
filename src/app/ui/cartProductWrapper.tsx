'use client';
import { ProductRow } from "./productRow";
import { useState } from "react";


export default function CartProductWrapper({props}: {props: any}){

    const original = props;
    const originalUserAmount = [1, 1, 1, 1, 1];
    


    

    
    const [products, setProducts] = useState(original);
    const [userAmount, setUserAmount] = useState(originalUserAmount);

    



    function calculateTotalCosts(){
        let totalCost = 0;
        
        for (const index in products)
        {
            totalCost += products[index].price;
        }

        return totalCost.toFixed(2);
        
    }

    function handleOnChange(){

    }

    
    return(
    <>
        {products.map((product: any) => {return <div key={product.id} className="w-11/12 md:w-full lg:w-8/10 mx-auto md:mx-0"><ProductRow checkUserAmount={handleOnChange} onClick={() => setProducts(products.filter((e: any) => e.id !== product.id))} key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductRow></div>})}

        <div className="w-full flex justify-center md:justify-end">
            <h1 className="text-xl">Celkem: <span className="font-bold">{calculateTotalCosts()}€</span></h1>
        </div>
    </>
    );
}