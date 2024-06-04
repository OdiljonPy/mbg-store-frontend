import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export const useReset = (paramsResetList?: string[]) => {
	const searchQuery = useSearchParams();
	const { push, query } = useRouter();
	const onReset = () => {
		if (!paramsResetList) return;
		paramsResetList.forEach((param) => {
			delete query[param];
		});
		push({
			pathname: "/products",
			query: {
				...query,
				changeFilter:
					searchQuery.get("changeFilter") === "true"
						? "false"
						: "true",
			},
		});
	};

	return {
		onReset,
	};
};
