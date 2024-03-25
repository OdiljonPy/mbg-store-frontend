export interface IImages{
    id:number
    product:number
    image:string
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
    store:number
    images:IImages[]
}

