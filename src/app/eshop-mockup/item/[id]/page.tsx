import { fetchProducts } from "@/app/data/route";
import {ProductPage} from "@/app/ui/productUi/productPage";
import { EshopPanelTop } from "@/app/ui/eshop";
import Link from 'next/link';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ButtonShoppingCart from "@/app/ui/buttons/buttonShoppingCart"; 
import { RecommendedProducts } from "@/app/ui/productUi/recommendedProducts";
import { ProductRow } from "@/app/ui/productUi/productRow";

export default async function Page({params}: {params:Promise<{id: number}>}){

    const id = (await params).id;
    const fetchedProducts = await fetchProducts();
    //v databázi začíná id od jedničky, index ale začíná od nuly (první produkt bude na nule) -> odečítám 1
    const selectedProduct = fetchedProducts[id-1];
    

    // do tohoto arraye se vloží a vyfiltruje (Array.prototype.filter) 5 produktů se stejnou props.product_category
    const selectedCategoryReccomended = [];
    
    return(
        <>
        <div className="h-screen w-full pt-24">
            <EshopPanelTop></EshopPanelTop>
            <div className="w-11/12 h-fit border-y border-black mx-auto my-8 py-2 tracking-tighter flex justify-end">
            <div className="my-auto mx-2">
                
                <div className="flex">
                    <ButtonShoppingCart></ButtonShoppingCart>
                </div>
                
                </div>
            </div>

            <ProductPage 
            amountInStock={Number(selectedProduct.amount_in_stock)}
            id={Number(selectedProduct.id)}
            price={Number(selectedProduct.price)}
            productCategory={String(selectedProduct.product_category)}
            productDescription={String(selectedProduct.product_description)}
            productName={String(selectedProduct.product_name)}
            ></ProductPage>
            <div className="h-24"></div>
            <RecommendedProducts category={selectedProduct.product_category} data={""}></RecommendedProducts>
            


        </div>

        
        </>
    );
}