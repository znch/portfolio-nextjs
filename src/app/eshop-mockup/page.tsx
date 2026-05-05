import { HomepageSidebar, HomepageBanner, HomepageCategory, ProductWrapper, EshopPanelTop} from "../ui/eshop";
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

    const kitchenIds = [1, 2, 3, 25, 63] //arbitrarni cisla podle vyberu -> implementovat do adminu moznost pridavat HP kategorie a které produkty tam vybrat
    const kitchenProducts = await getProductsById(kitchenIds).then(
      (response) => {return response.json()}
    )

  
    return(
    <>
      <div className="flex flex-wrap">

        <div className="mx-auto w-full px-2 md:px-0 md:w-11/12 min-h-48 flex flex-wrap">
          <div className="w-1/3 h-full">
            <HomepageSidebar></HomepageSidebar>  
          </div>
          <div className="w-2/3 h-full bg-red-400">
            {/* <HomepageBanner></HomepageBanner> */}
          </div>
        </div>
        
        <HomepageCategory title={"Kuchyně"} subtitle={"To nejlepší z našich produktů do kuchyně!"} products={kitchenProducts}></HomepageCategory>
      
      </div>

    </>
    );
    
}