import {IProduct} from "@/data-types/products/common";

export interface IProductAvailable{
    ok:boolean,
    result:IProduct[]
}