export interface IShipping {
	id: number;
	address_name: string;
	address: string;
	entrance?: number;
	floor?: number;
	apartment?: number;
	latitude: number;
	longitude: number;
	main_address: boolean;
	phone_number?:string | undefined
}
