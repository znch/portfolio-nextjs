import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const db = new sqlite3.Database(
    "./eshopMockupData.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) =>{
        if(err) {
            return console.error(err.message);
        } 
        console.log("Database created successfully.")
    }
)

db.serialize(() => {

    db.run(
        `DROP TABLE products;`
    )

        


});
