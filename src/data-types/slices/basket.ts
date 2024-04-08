import {IProduct, IStore} from "@/data-types/products/common";

export interface IBasketSlices{
    products:IProduct[]
    store_list:IStore[],
    totalCountProduct : number
    all_prices:number
    discount_price:number
    cost_price:number
    promo_code: {
        name:string
        code:number
    }
}