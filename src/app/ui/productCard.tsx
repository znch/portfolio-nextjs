import Image from "next/image";
import { FunctionComponent } from "react";

interface Props{
    productName: string;
    productCategory: string;
    productDescription: string;
    price: number;
    amountInStock: number;
}


export const ProductCard : FunctionComponent<Props> = (props) => {

    const nazevProduktu = props.productName;
    const popisekProduktu = props.productDescription;
    const cenaProduktu = props.price;

    return(
        <>

        

        <div className="w-[19rem] md:w-[18rem] mx-auto h-auto bg-black border-black border-2">
            <div className="h-64 w-full content-center bg-gradient-to-tr from-stone-300 via-gray-500 to-zinc-700">
                
                <h1 className="mx-auto my-auto font-thin text-2xl text-center text-white">PLACEHOLDER</h1>
            </div>
            <div className="h-[16rem] text-white">
                <div className="mx-2 py-2 flex flex-wrap h-full content-normal">
                    <h1 className="text-xl lg:text-2xl">{nazevProduktu}</h1>
                    <p className="font-thin h-max">{popisekProduktu}</p>
                    
                    <div className="self-end">
                    <p>{cenaProduktu}€</p>
                    <input type="number" className="w-1/5 mr-2"/>
                    <button className="border-white border-2"><span className="px-2">Přidat</span></button>
                    </div>
                    
                </div>
            </div>
        </div>  
        

        </>
    );
}

export default ProductCard;