import { FunctionComponent } from "react";

interface Props{

    category: String;
    data: any;
}


export const RecommendedProducts: FunctionComponent<Props> = (props) => {



    return(
        <>
            <div className="flex mx-auto w-11/12">
                <h1 className="text-xl tracking-tighter">Další produkty z kategorie <span className="font-bold">{props.category}</span></h1>
            </div>
        </>
    );
};