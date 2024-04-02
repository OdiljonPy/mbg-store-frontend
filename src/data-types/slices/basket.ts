import {IProduct} from "@/data-types/products/common";

export interface IBasketSlices{
    products:IProduct[]
    totalCountProduct : number
    all_prices:number
    discount_price:number
    cost_price:number
}