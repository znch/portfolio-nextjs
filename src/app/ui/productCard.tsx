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

        <div className="flex">

        <div className="w-80 h-full border-black border-2 relative">
            <div className="h-64 w-full flex content-center">
                
                <h1 className="mx-auto my-auto font-thin text-2xl">PLACEHOLDER</h1>
            </div>
            <div className="bg-black h-2/5 text-white">
                <div className="mx-2 py-2 overflow-hidden">
                    <h1 className="text-2xl">{nazevProduktu}</h1>
                    <p className="font-thin">{popisekProduktu}</p>
                    <p>{cenaProduktu} Kč</p>
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