
import sqlite3 from "sqlite3";
import SQL from 'sql-template-strings'
import { open } from 'sqlite';
import SearchBar from "./searchbar"
import ProductCard from "./productCard";

export function EshopPanelTop() {

    return(
    <>
    <div className="w-full h-24 flex flex-infline justify-between">
        <div className="flex-column">
            <h1 className={`text-4xl font-bold`}>PORT<span className="font-normal">EFFO!</span></h1>
            <h2 className="mt-2 text-l italic">Přístav pro všechny vaše potřeby...</h2>
        </div>
        <div className="my-auto">
            <SearchBar></SearchBar>
        </div>
        
    </div>
    </>
    );
}

export function EshopPanelSide(){

    return(
        <>

        </>
    );
}



export function ProductWrapper() {


    return(
    <>
    <div className="w-full">
        <ProductCard productName="Název produktu" productCategory="" productDescription="Lorem ipsum popis produktu..." amountInStock={0} price={0}></ProductCard>
    </div>
    </>
    );
}
