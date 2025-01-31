import SearchBar from "./searchbar"
import ProductCard from "./productCard";
import { Product } from "../data/definitions";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


export function EshopPanelTop() {

    return(
    <>
    <div className="w-full h-24 flex flex-col md:flex-nowrap md:flex-row md:justify-between justify-center">
        <div className="">
            <h1 className={`text-center md:text-left text-4xl font-bold`}>PORT<span className="font-normal">EFFO!</span></h1>
            <h2 className="text-center md:text-left mt-2 text-l italic">Přístav pro všechny vaše potřeby...</h2>
        </div>
        
        
        <div className="my-auto pt-4 md:pt-0">

    
            <SearchBar></SearchBar>
        </div>
        
    </div>
    </>
    );
}

export function EshopPanelSide(){

    return(
        <>
            <div>
                <div className="w-8">
                    <span><ShoppingCartIcon></ShoppingCartIcon></span>
                </div>
                

            </div>
        </>
    );
}



export async function ProductWrapper() {

    


    const fetchedProducts = await fetch('http://localhost:3000/data', {headers: {"Content-Type": "application/json"}}).then((response) => {return response.json()});
    
    const parseDebug = fetchedProducts;

    const data = fetchedProducts.map((product: any) => {return <div key={product.id} className="w-full h-full"><ProductCard key={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard></div>});
    


    

    return(
    <>
    <div className="w-10/12 mx-auto md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
        {data}
        
    </div>
    </>
    );
}
