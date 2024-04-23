export interface IStores{
    id:number
    legal_name:string
    brand_name:string
    description:string
    logo:string
    latitude:number
    longitude:number
    store_location_name:string
    customers_count:number
    rating:number
    rating_count:number
    view_count:number
    created_at?:string
    working_time?:string
}

export interface ICommonStores{
    result:IStores[],
    ok:boolean
}

export interface ICommonStoreSingle{
    result:IStores,
    ok:boolean
}