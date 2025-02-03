import {ProductRow} from "@/app/ui/productRow"; 
import { fetchProducts } from "@/app/data/route";
import CartProductWrapper from "@/app/ui/cartProductWrapper";

export default async function Page(){

        // fetchování json dat o produktech -> slice simuluje že uživatel má v košíku 5 produktů, passuju jako props do CartProductWrapper komponenty
        const fetchedProducts = await fetchProducts();
        const slicedProducts = fetchedProducts.slice(0, 5);
        const data = slicedProducts;

    return(
        <>
        <div className="h-screen pt-32">
            <div className="w-full md:w-11/12 mx-auto">
                <h1 className="text-4xl text-center md:text-left ml-0 tracking-tighter mb-12">Váš nákup</h1>
                <CartProductWrapper props={data}></CartProductWrapper>
                

                <div className="w-full flex justify-center md:justify-end pt-4">
                    <button className="bg-black px-4 py-4 text-white rounded-xl">Přejít k platbě
                    </button>
                </div>
                
            </div>
            
            <div className="pb-12">
            </div>
        </div>
        </>
    );
}