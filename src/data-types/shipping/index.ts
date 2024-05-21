export interface IShipping {
	id: number;
	address_name: string;
	address: string;
	entrance?: number;
	floor?: number;
	apartment?: number;
	latitude: string;
	longitude: string;
	main_address: boolean;
	phone_number?:string | undefined
}
