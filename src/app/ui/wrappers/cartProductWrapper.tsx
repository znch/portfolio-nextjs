'use client';
import { ProductRow } from "../productUi/productRow";
import { useState } from "react";


export default function CartProductWrapper({props}: {props: any}){

    function parseCartContent(){
        

    }

    // json s daty z parent (Cart Page) ukládám pro použití ve statu
    const original = props;

    //simuluju počet objednaných kusů v košíku
    const originalUserAmount = [1, 2, 1, 2, 4];
    
    //state handling
    const [products, setProducts] = useState(original);
    const [userAmount, setUserAmount] = useState(originalUserAmount);
    const [cartItemsCost, setCartItemsCost] = useState(calculateTotalCosts(userAmount));

    //vypočítá celkovou částku na základě počtu objednaných kusů a ceny daného produktu
    function calculateTotalCosts(amount: any){
        let totalCost = 0;
        
        for (const index in products)
        {
            totalCost += products[index].price * amount[Number(index)];
        }

        return totalCost.toFixed(2);
        
    }

    function handleOnChange(fieldId: any, value: number){
        const nextAmount = userAmount.map((e, i) => {
            if(i == Number(fieldId)-1){
                e = value;
                return e;
            }
            else{return e;}
        })
        //updatuje state současného počtu (množství) jednotlivých položek
        setUserAmount(nextAmount);
        //updatuje state podle součtu cen aktuálních položek a jejich množství
        setCartItemsCost(calculateTotalCosts(nextAmount));
    }

    
    return(
    <>
        {products.map((product: any) => {return <div key={product.id} className="w-11/12 md:w-full lg:w-8/10 mx-auto md:mx-0"><ProductRow initUserAmount={userAmount[product.id-1]} checkUserAmount={handleOnChange} onClick={() => {setProducts(products.filter((e: any) => e.id !== product.id)); handleOnChange(product.id, 0)}} key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductRow></div>})}

        <div className="w-full flex justify-center md:justify-end">
            <h1 className="text-xl">Celkem: <span className="font-bold">{cartItemsCost}€</span></h1>
        </div>
    </>
    );
}