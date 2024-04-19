import {IComments, IPagination} from "@/data-types/products/common";

export interface IRatingCount {
    1:number
    2:number
    3:number
    4:number
    5:number
}

export interface IProductComments extends IPagination{
    content : IComments[],
    rating_count:IRatingCount
}

export interface ICommonComment{
    result : IProductComments,
    ok:boolean
}