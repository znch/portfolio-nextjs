import { FunctionComponent } from "react";
import { ProductCardSmall } from "./productCardSmall";

interface Props{

    category: String;
    data: any;
}




export const RecommendedProducts: FunctionComponent<Props> = (props) => {
    
    const recProductsCap = props.data.slice(0, 5);

    const recommendedProductCardList = recProductsCap.map((recProducts: any) => {return <ProductCardSmall key={recProducts.id} product_id={recProducts.id} product_name={recProducts.product_name} />;})

    return(
        <>
            <div className="flex flex-col mx-auto w-11/12">
            
                <h1 className="text-xl tracking-tighter">Další produkty z kategorie <span className="font-bold">{props.category}</span></h1>
                <div className="border-b border-black my-4"></div>
                <div className="flex flex-wrap w-full my-4 justify-around md:justify-start">
                    {recommendedProductCardList}
                </div>
            </div>
        </>
    );
};