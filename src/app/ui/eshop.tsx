import SearchBar from "./searchbar";
import ProductCard from "./productUi/productCard";
import { ShoppingCartIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { fetchProducts } from "../data/route";
import Popup from "reactjs-popup";



export function EshopPanelTop() {

    return(
    <>
    <div className="w-full md:w-11/12 mx-auto h-24 flex flex-col md:flex-nowrap md:flex-row md:justify-between justify-center h-max">
        <div className="">
            <Link href="/eshop-mockup">
                <h1 className={`text-center md:text-left text-4xl font-bold`}>PORT<span className="font-normal">EFFO!</span></h1>
                <h2 className="text-center md:text-left mt-2 text-l italic tracking-tight">Přístav pro všechny vaše potřeby...</h2>
            </Link>
        </div>
        <div className="my-auto pt-4 md:pt-0 pl-0 md:pl-4">
            <SearchBar></SearchBar>
        </div>
        
    </div>
    </>
    );
}

export async function ProductWrapper() {
    //fetchování JSON dat produktů z SQLite DB přes api
    const fetchedProducts = await fetchProducts();

    //vytvoření listu komponent 
    const data = fetchedProducts.map((product: any) => {return <div key={product.id} className="w-min"><ProductCard key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard></div>}).slice(0,40);

    
    return(
        <>
        <div className="mx-auto pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-evenly gap-4">
                {data}
            </div>
        </div>
        </>
    );
    //alternativní vzhled se sidebarem
    /**
    <div className="w-full lg:w-11/12 pt-8 flex content-center justify-center mx-auto">
        <div className="w-0 invisible lg:visible lg:w-2/12 border border-black">
        
        </div>
        <div className="w-max px-2 lg:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-evenly gap-4">
        {data}
        </div>
    </div>
 */

}

