
export async function fetchProducts(){

    const fetchedProducts = await fetch('http://localhost:3000/data/products', {headers: {"Content-Type": "application/json"}}).then((response) => {return response.json()});

    return fetchedProducts;
}

export async function fetchCategories() {
    const fetchedCategories = await fetch('http://localhost:3000/data/categories', {headers: {"Content-Type": "application/json"}}).then((response) => {return response.json()});

    return fetchedCategories; 
}


// deprecated endpoint
export async function fetchCategorized(category: any) {
    const fetchCategorized = await fetch('http://localhost:3000/data/categorized', {headers: {"Content-Type": "application/json"}}).then((response) => {return response.json()});

    return fetchCategorized; 
}

//TODO - předělat endpointy na direct cally v SQLite do unified TS souboru