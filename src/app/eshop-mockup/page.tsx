import {ProductWrapper, EshopPanelTop} from "../ui/eshop";


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
      <div>
        <ProductWrapper></ProductWrapper>
      </div>

    </>
    );
    
}