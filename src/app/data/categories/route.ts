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

    const categories = await db.all("SELECT DISTINCT product_category FROM products");
    return new Response(JSON.stringify(categories), {
        headers: {"content-type" : "application/json"},
        status: 200,
    })
    
}