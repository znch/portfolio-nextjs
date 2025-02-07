import {ProductRow} from "@/app/ui/productUi/productRow"; 
import { fetchProducts } from "@/app/data/route";
import CartProductWrapper from "@/app/ui/wrappers/cartProductWrapper";
import { EshopPanelTop } from "@/app/ui/eshop";


export default async function Page(){

        // fetchování json dat o produktech -> slice simuluje že uživatel má v košíku 5 produktů, passuju jako props do CartProductWrapper komponenty
        const fetchedProducts = await fetchProducts();
        const slicedProducts = fetchedProducts.slice(0, 5);
        const data = slicedProducts;

    return(
        <>
        <div className="h-screen pt-32">
            <EshopPanelTop />
            <div className="my-8 w-full md:w-11/12 mx-auto">
                <h1 className="text-4xl text-center md:text-left ml-0 tracking-tighter mb-4">Váš nákup</h1>
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