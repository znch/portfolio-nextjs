import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: any = null;

export function getTargetCategory () {

}

export async function GET(req: Request, res: Response) {

    const requestedCategory = ""

    if(!db){
        db = await open({
            filename: "eshopMockupData.db",
            driver: sqlite3.Database,
        });
    }

    const products = await db.all(`SELECT * FROM products WHERE product_category = '${requestedCategory+"%"}'`);
    return new Response(JSON.stringify(products), {
        headers: {"content-type" : "application/json"},
        status: 200,
    })
    
}