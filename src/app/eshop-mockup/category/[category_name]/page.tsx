import { fetchCategorized } from "@/app/data/fetches"
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { ProductWrapperByCategory } from "@/app/ui/eshop";

let db: any = null;

//sqlite call na requested category, kterou si vytahne ze slugu / page params
export async function getProductsByCategory(categoryName: any) {

    const requestedCategory = parseRequestedCategory(categoryName)

    if(!db){
        db = await open({
            filename: "eshopMockupData.db",
            driver: sqlite3.Database,
        });
    }

    const products = await db.all(`SELECT * FROM products WHERE product_category LIKE '${requestedCategory}%'`);
    return new Response(JSON.stringify(products), {
        headers: {"content-type" : "application/json"},
        status: 200,
    })
    
}

// parsne url znak %20 na mezeru, aby vrátil správný výsledek v callu do DB 
function parseRequestedCategory(input: any) {
    if(input.includes("%20")) {
        return String(input.replace("%20", " "))
    } else {
        return String(input)
    }
}

export default async function Page(
    {params}: {params : Promise<{category_name: String}>}
) {

    const categoryName = (await params).category_name

    const fetchedProducts = await getProductsByCategory(categoryName).then((response) => {return response.json()})
    

    return(
        <>
        <ProductWrapperByCategory props={fetchedProducts}></ProductWrapperByCategory>
        </>
    )
}