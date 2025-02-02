import {EshopPanelFilter, ProductWrapper, EshopPanelTop} from "../ui/eshop";



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
    <div className={` pt-32 mx-auto w-screen mb-12 grid grid-cols-1`}>
        <div className="w-full mx-auto">
          <EshopPanelTop></EshopPanelTop>
          <div className="pt-8">
            <EshopPanelFilter />
          </div>
        </div>
        
        

        <div className="w-max pt-8 content-center align-center mx-auto">
        <ProductWrapper></ProductWrapper>
        </div>
        
        

    </div>
    </>
    );
    
}