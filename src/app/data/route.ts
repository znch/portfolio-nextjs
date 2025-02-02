import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: any = null;

export async function GET(req: Request, res: Response) {

    if(!db){
        db = await open({
            filename: "eshopMockupData.db",
            driver: sqlite3.Database,
        });
    }

    const products = await db.all("SELECT * FROM products");
    return new Response(JSON.stringify(products), {
        headers: {"content-type" : "application/json"},
        status: 200,
    })
    
}

export async function fetchProducts(){

    const fetchedProducts = await fetch('http://localhost:3000/data', {headers: {"Content-Type": "application/json"}}).then((response) => {return response.json()});

    return fetchedProducts;
}
 
