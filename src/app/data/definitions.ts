export type Product = {
    id: number;
    product_name: string;
    product_category: string;
    product_description: string;
    price: number;
    amount_in_stock: number;
}

export type hpCategory = {
    title: String;
    subtitle: String | null;
    products: any;
}

export type hpBanner = {
    title: String;
    subtitle: String;
    imageOptions: {
        alt: String;
        src: String;
        width: Number;
        height: Number;
    }
    position: Number;
}

export type Categories = {
    categories: Array<String>
}