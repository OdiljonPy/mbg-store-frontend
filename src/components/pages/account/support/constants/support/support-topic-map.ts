import { EnumSupportTopic } from "@/data-types/support";

export const supportTypeMap: Record<EnumSupportTopic, string> = {
	[EnumSupportTopic.COMPLAINT]: "complaint",
	[EnumSupportTopic.QUESTION]: "ask_question",
	[EnumSupportTopic.FEEDBACK]: "comment_suggestions",
};
