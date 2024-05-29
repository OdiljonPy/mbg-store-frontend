export interface IAddressForm {
	address_name: string;
	address: string;
	entrance?: string;
	floor?: string;
	apartment?: string;
	latitude: number;
	longitude: number;
	main_address: boolean;
}

export interface ILocationForm {
	is_default: boolean;
	address: string;
	latitude: number;
	longitude: number;
}
