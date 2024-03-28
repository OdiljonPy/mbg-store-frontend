import { EnumSupportType } from "@/data-types/support";

export const supportTypeMap: Record<EnumSupportType, string> = {
	[EnumSupportType.COMPLAINT]: "Жалоба",
	[EnumSupportType.QUESTION]: "Задать вопрос",
	[EnumSupportType.FEEDBACK]: "Отзывы и предложения",
};
