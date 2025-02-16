import {ProductWrapper, EshopPanelTop} from "../ui/eshop";
import EshopPanelFilter from "../ui/eshopPanelFilter";




export default function Page() {
/** 
 * props: {searchParams?: Promise<{query?: string; page?: string;}>}
 * 
  const searchParams = await props.searchParams;
  const query = searchParams.query || '';
  const currentPage = Number(searchParams?.page);
*/
    return(
    <>
    <div className={` pt-24 mx-auto w-screen mb-12 grid grid-cols-1`}>
        <div className="w-full mx-auto">
          <EshopPanelTop></EshopPanelTop>
          <div className="pt-8">
            <EshopPanelFilter />
          </div>
        </div>
        
        

        
        <ProductWrapper></ProductWrapper>
        
        
        

    </div>
    </>
    );
    
}