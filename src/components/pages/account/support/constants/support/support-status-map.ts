import { EnumSupportStatus } from "@/data-types/support";

export const supportStatusMap: Record<EnumSupportStatus, string> = {
	[EnumSupportStatus.CLOSED]: "closed",
	[EnumSupportStatus.ACCEPTED]: "accepted",
	[EnumSupportStatus.IN_PROGRESS]: "in_progress",
};
