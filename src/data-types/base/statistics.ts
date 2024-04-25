export interface IStatistics{
    product_count:number,
    stores_count:number,
    orders_count:number
}

export interface IResponseStatistics{
    ok:boolean,
    result:IStatistics
}