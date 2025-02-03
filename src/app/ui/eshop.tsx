import SearchBar from "./searchbar";
import ProductCard from "./productCard";
import { ShoppingCartIcon, FunnelIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { fetchProducts } from "../data/route";



export function EshopPanelTop() {

    return(
    <>
    <div className="w-full md:w-10/12 mx-auto h-24 flex flex-col md:flex-nowrap md:flex-row md:justify-between justify-center h-max">
        <div className="">
            <h1 className={`text-center md:text-left text-4xl font-bold`}>PORT<span className="font-normal">EFFO!</span></h1>
            <h2 className="text-center md:text-left mt-2 text-l italic tracking-tight">Přístav pro všechny vaše potřeby...</h2>
        </div>
        
        
        <div className="my-auto pt-4 md:pt-0 pl-0 md:pl-4">

    
            <SearchBar></SearchBar>
        </div>
        
    </div>
    </>
    );
}

export function EshopPanelFilter(){

    return(
        <>
            <div className="h-12 w-full md:w-11/12 xl:w-10/12 mx-auto flex flex-column justify-around xl:justify-between px-4 content-center border-y border-black border-double">
                <div className="flex inline-flex">
                    <div className="my-auto">
                        <button className="">Filtrovat</button>
                    </div>
                    <div className="w-8 ml-2 my-auto">
                        <span><FunnelIcon className=""></FunnelIcon></span>
                    </div>
                </div>
                <Link className="my-auto" href="eshop-mockup/cart">
                <div className="flex inline-flex">
                    <div className="my-auto">
                        <button className="">Košík</button>
                    </div>
                    <div className="ml-2 h-8 w-8 my-auto">
                        <span><ShoppingCartIcon  className=""></ShoppingCartIcon></span>
                    </div>
                </div>
                </Link>
            </div>
        </>
    );
}



export async function ProductWrapper() {
    //fetchování JSON dat produktů z SQLite DB přes api
    const fetchedProducts = await fetchProducts();

    //uložení listu komponent 
    const data = fetchedProducts.map((product: any) => {return <div key={product.id} className="w-min"><ProductCard key={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard></div>});
    

    

    return(
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly gap-4">
        {data}
        
    </div>
    
    </>
    );
}
