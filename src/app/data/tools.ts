import { fetchCategories } from "./fetches"

export async function parseCategories() {

    const input = await fetchCategories()
    const parsedCategories = []
    let distinctBuffer: any[] = []
    for(let i = 0; i < input.length; i++) {
        
        let category = input[i].product_category;
        if(category.includes(" -")) {
            const newcat = category.split(" -")
            if(!distinctBuffer.includes(newcat[0])) {
                parsedCategories[i] = newcat[0]
            }
            distinctBuffer[i] = newcat[0]
        } else {
            parsedCategories[i] = category
        }
    }

    return parsedCategories;
}

