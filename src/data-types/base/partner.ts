export interface IPartner{
    partner_name:string,
    logo:string
}

export interface IPartnerRes{
    ok:boolean,
    result:IPartner[]
}