export enum EnumSupportTopic {
	QUESTION,
	FEEDBACK,
	COMPLAINT,
}

export enum EnumSupportStatus {
	CLOSED = 0,
	ACCEPTED = 1,
	IN_PROGRESS = 2,
}

export interface ISupport {
	id: number;
	email: string;
	date: string;
	topic: string;
	type: EnumSupportStatus;
	description: string;
	files: {
		id: number;
		supportId: number;
		file: string;
	}[];
}
