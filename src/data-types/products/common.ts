export interface IImages{
    id:number
    product:number
    image:string
}

export interface IStore{
    id:number
    brand_name:string
    logo:string
    latitude:number
    longitude:number
    store_location_name:string
    working_time:string
}

export interface IComments{
    id:number
    user:number
    name:string
    product:number
    rating:number
    comment:string
    images:IImages[]
}
export interface IProduct{
    id:number
    name:string
    price:number
    discount_price:number
    discount:number
    description:string
    available:number
    number_of_sales:number
    rating:number
    rating_count:number
    view_count:number
    free_shipping:boolean
    pickup:boolean
    store:IStore
    images:IImages[]
    count?:number
}

