import { Product } from './definitions';

/*
import { sql, db } from '@vercel/postgres';
*/


import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';


/*
let db = new sqlite3.Database( 'eshopMockupData.db', sqlite3.OPEN_READWRITE );
*/

let db: any = null;

/*
export async function fetchProducts(){

    const data = await sql<Product>`SELECT * FROM products`;

    return data.rows;

}


export async function insertData(){
    const createTable = sql`
    
    CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY,
            product_name TEXT,
            product_category TEXT,
            product_description TEXT,
            price REAL,
            amount_in_stock INTEGER
        )
    `;

    const insertRows = sql`
        
    `;


}
*/



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
 
