import SearchBar from "./searchbar"
import ProductCard from "./productCard";
import { Product } from "../data/definitions";

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



export async function ProductWrapper() {

    


    const fetchedProducts = await fetch('http://localhost:3000/data', {headers: {"Content-Type": "application/json"}}).then((response) => {return response.json()});
    
    const parseDebug = fetchedProducts;

    const data = fetchedProducts.map((product: any) => {return <ProductCard key={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard>});
    console.log(parseDebug);
    


    

    return(
    <>
    <div className="w-full">
        {data}
        
    </div>
    </>
    );
}
