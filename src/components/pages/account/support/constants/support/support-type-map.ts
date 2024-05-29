import { EnumSupportType } from "@/data-types/support";

export const supportTypeMap: Record<EnumSupportType, string> = {
	[EnumSupportType.COMPLAINT]: "complaint",
	[EnumSupportType.QUESTION]: "ask_question",
	[EnumSupportType.FEEDBACK]: "comment_suggestions",
};
