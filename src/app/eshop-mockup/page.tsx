import {HomepageCategory, ProductWrapper, EshopPanelTop} from "../ui/eshop";
import { getProductsById } from "../data/controller";

export default async function Page() {

//TODO: implementovat searchParams
    /** 
   * props: {searchParams?: Promise<{query?: string; page?: string;}>}
   * 
    const searchParams = await props.searchParams;
    const query = searchParams.query || '';
    const currentPage = Number(searchParams?.page);
  */

    const kitchenIds = [1, 2, 3, 5, 7] //arbitrarni cisla podle vyberu -> implementovat do adminu moznost pridavat HP kategorie a které produkty tam vybrat
    const kitchenProducts = await getProductsById(kitchenIds).then(
      (response) => {return response.json()}
    )

  
    return(
    <>
      <div>


        {/* {<ProductWrapper></ProductWrapper>} */}
        <HomepageCategory title={"Kuchyně"} subtitle={"To nejlepší z našich produktů do kuchyně!"} products={kitchenProducts}></HomepageCategory>

      </div>

    </>
    );
    
}