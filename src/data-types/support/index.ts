export enum EnumSupportType {
	QUESTION,
	FEEDBACK,
	COMPLAINT,
}

export enum EnumSupportStatus {
	PROCESSING,
	CLOSED,
}

export interface ISupport {
	id: number;
	email: string;
	date: string;
	type: EnumSupportType;
	status: EnumSupportStatus;
	description: string;
	files?: {
		id: number;
		supportId: number;
		file: string;
	}[];
}
