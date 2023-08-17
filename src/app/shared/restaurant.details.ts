export interface restaurantDetails {
    id: number;
    name: string;
    address: string;
    feature_image: string;
    cuisines:string;
    thumbnail_image:string;
    rating:string;
    review: string;
    menu: Menu[];
}

export interface Menu {
    desc: string;
    id: number;
    name: string;
    price: number;
}
