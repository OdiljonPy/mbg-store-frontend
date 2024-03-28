import { EnumSupportStatus } from "@/data-types/support";

export const supportStatusMap: Record<EnumSupportStatus, string> = {
	[EnumSupportStatus.CLOSED]: "Закрыта",
	[EnumSupportStatus.PROCESSING]: "В обработке",
};
