import SearchBar from "./searchbar";
import ProductCard from "./productUi/productCard";
import Link from "next/link";
import { fetchCategories, fetchProducts } from "../data/fetches";
import Popup from "reactjs-popup";
import { FunctionComponent } from "react";
import { hpBanner, hpCategory } from "../data/definitions";
import Image from "next/image";
import { parseCategories } from "../data/tools";



export function EshopPanelTop() {

    return(
    <>
    <div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-nowrap md:flex-row md:justify-between justify-center">
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

//deprecate this
export async function ProductWrapper() {
    //fetchování JSON dat produktů z SQLite DB přes api
    const fetchedProducts = await fetchProducts();

    //vytvoření listu komponent (.slice na prvních 40 produktů);
    const data = fetchedProducts.map((product: any) => {return <div key={product.id} className=""><ProductCard key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard></div>}).slice(0,40);
    //TODO - přidání pagination

    
    return(
        <>
        <div className="mx-auto pt-8 w-full px-2 md:px-0 md:w-11/12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-evenly gap-1 md:gap-4">
                {data}
            </div>
        </div>
        </>
    );
   
}

export async function TargetProductWrapper(products: any) {

    let data = products.products.map((product: any) => {
        return <div key={product.id} className=""><ProductCard key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard></div>})
    

    return(
        <>
        {/* {grid-flow-col auto-cols-max}, změnit u všech 3 */}
        <div className="mx-auto pt-8 w-full px-2 md:px-0 md:w-11/12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-evenly gap-1 md:gap-4">
                {data}
            </div>
        </div>
        
        </>
    )
}

export async function ProductWrapperByCategory(props: any) {
    const fetchedProducts = props.props;

    const data = fetchedProducts.map((product: any) => {return <div key={product.id} className="w-fit"><ProductCard key={product.id} id={product.id} productName={product.product_name} productCategory={product.product_category} productDescription={product.product_description} price={product.price} amountInStock={product.amount_in_stock}></ProductCard></div>});

    return(
        <>
        {/* {grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-evenly gap-1 md:gap-4} */}
        <div className="mx-auto pt-8 w-full px-2 md:px-0 md:w-11/12">
            <div className="grid grid-flow-col md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-evenly gap-1 md:gap-4">
                {data}
            </div>
        </div>
        </>
    );
}

export const HomepageCategory : FunctionComponent<hpCategory> = (props) => {

    let renderedSubtitle;
    if(props.subtitle === null) {
        renderedSubtitle = <div className="hidden"></div>
    } else {
        renderedSubtitle = <div><h2 className="text-md italic">{props.subtitle}</h2></div>
    }

    let targetProducts = props.products

    return(
        <>
        <div>
            <div className="mx-auto w-full px-2 md:px-0 md:w-11/12">
            <h1 className="text-2xl">{props.title}</h1>
            {renderedSubtitle}
            </div>
            <TargetProductWrapper products={targetProducts}></TargetProductWrapper>
        </div>
        </>
    )

}

export const HomepageBanner : FunctionComponent<hpBanner> = (props) => {



    return(
        <>
        <Image alt="" src={""} width={0}>
        </Image>
        </>
    );
}


export const HomepageSidebar : FunctionComponent = () => {

    const fetchedCategories = fetchCategories()
    const categoriesList = parseCategories(fetchedCategories)
    const featuredCategories = categoriesList.map(category => {
        return(
        <li></li>
    )}) 

    return(
        <>
        <div>
            
            <ul>
                <span>Doporučené kategorie!</span>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
        </>
    );
}