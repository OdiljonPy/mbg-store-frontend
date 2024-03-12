export const enum EnumGender {
	M = "M",
	F = "F",
}

export interface IUser {
	id: number;
	full_name?: string;
	phone_number: string;
	gender?: EnumGender;
	birth_date?: string;
}
