import sqlite3 from "sqlite3";
import { open } from 'sqlite';

let db: any = null;

export async function getProductsById(id: Number | Number[]) {
    
    // otevřu DB connection
    if(!db){
            db = await open({
                filename: "eshopMockupData.db",
                driver: sqlite3.Database,
            });
    }

    const parsedIds = parseProductIds(id)
    // console.log(parsedIds)
    const products = await db.all(`SELECT * FROM products WHERE id IN (${parsedIds})`)
    return new Response(JSON.stringify(products), {
        headers: {"content-type" : "application/json"},
        status: 200,
    })

}

function parseProductIds(input: any) {
    if((typeof input) == (typeof Number)) {
        return input;
    } else if(input.length) {
        let stringOfIds = "";
        for(let i = 0; i < input.length; i++) {
            stringOfIds += String(input[i])
            if(i < (input.length -1))
            {
                stringOfIds += ", "
            }
        }
        
        return stringOfIds
    }
}