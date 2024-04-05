export enum EnumSupportType {
	QUESTION,
	FEEDBACK,
	COMPLAINT,
}

export interface ISupport {
	id: number;
	email: string;
	date: string;
	topic: string;
	is_closed: boolean;
	description: string;
	files: {
		id: number;
		supportId: number;
		file: string;
	}[];
}
