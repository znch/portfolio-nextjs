import { HomepageSidebar, HomepageBanner, HomepageCategory, ProductWrapper, EshopPanelTop} from "../ui/eshop";
import { getProductsById } from "../data/controller";
import { parseCategories } from "../data/tools";

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

    const categoriesList = await parseCategories()

    return(
    <>
      <div className="flex flex-wrap">

        <div className="mx-auto w-full px-2 md:px-0 md:w-11/12 min-h-48 flex flex-wrap mb-12">
          <div className="w-1/5 h-full">
            <HomepageSidebar categories={categoriesList}></HomepageSidebar>  
          </div>
          <div className="w-4/5 pl-12 flex">
            {/* <HomepageBanner></HomepageBanner> */}
            <span className="h-full w-full bg-red-400 flex">
              <span className="mx-auto my-auto w-max h-max text-2xl text-white lg:text-6xl">PLACEHOLDER</span>
            </span>
          </div>
        </div>
        
        <HomepageCategory title={"Kuchyně"} subtitle={"To nejlepší z našich produktů do kuchyně!"} products={kitchenProducts}></HomepageCategory>
      
      </div>

    </>
    );
    
}