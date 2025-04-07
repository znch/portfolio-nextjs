'use client';
import { ProductRow } from "../productUi/productRow";
import { useState } from "react";


export default function CartProductWrapper({props}: {props: any}){

    // po implementaci čtení z session/storage
    function parseCartContent(){
        

    }

    // json s daty z parent (Cart Page) ukládám pro použití ve statu + kalkulace ceny
    const original = props;
    

    //simuluju počet objednaných kusů v košíku
    const originalUserAmount = [1, 2, 1, 2, 4];
    
    //state handling
    const [products, setProducts] = useState(original);
    const [userAmount, setUserAmount] = useState(originalUserAmount);
    const [cartItemsCost, setCartItemsCost] = useState(calculateTotalCosts(originalUserAmount));

    //vypočítá celkovou částku na základě počtu objednaných kusů a ceny daného produktu
    function calculateTotalCosts(amount: any){
        let totalCost = 0;
        console.log(products);
        console.log(userAmount);
        
            for (const index in original)
            {
                totalCost += original[index].price * amount[index];
            
                      
            }
         
        
        
        return totalCost.toFixed(2);
        
    }

    function handleOnChange(fieldIndex: number, value: number){
        const nextAmount = userAmount.map((e, i) => {
            if(i == Number(fieldIndex)){
                e = value;
                return e;
            }
            else{return e;}
        })
        //updatuje state současného počtu (množství) jednotlivých položek
        setUserAmount(nextAmount);
        
        //updatuje state podle součtu cen aktuálních položek a jejich množství
        const costs = calculateTotalCosts(nextAmount)
        setCartItemsCost(costs);
    }
    
    //  setProducts(products.filter((e: any) => e.id !== product.id));

    const productList = products.map((product: any, i: number) => {return <div key={product.id} className="w-11/12 md:w-full lg:w-8/10 mx-auto md:mx-0"><ProductRow assignedIndex={i} initUserAmount={userAmount[i]} checkUserAmount={handleOnChange} onClick={() => {handleOnChange(i, 0);}} key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductRow></div>})
    
    return(
    <>
        {productList}
        
        

        <div className="w-full flex justify-center md:justify-end">
            <h1 className="text-xl">Celkem: <span className="font-bold">{cartItemsCost}€</span></h1>
        </div>
    </>
    );
}