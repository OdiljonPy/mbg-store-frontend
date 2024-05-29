import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

interface props {
	item: ICustomCheckbox;
}

const Option = ({ item }: props) => {
	const { id } = item;
	const searchParams = useSearchParams();
	const { push, query } = useRouter();
	const pathname = usePathname();
	const stores: string[] | undefined = searchParams.get("stores")?.split(",");

	const onChange = (e: CheckboxChangeEvent) => {
		const value = e.target.value;
		const queries = {
			...query,
		};

		if (e.target.checked) {
			queries.stores = stores ? stores + "," + value : value;
		} else {
			if (stores?.length === 1) {
				delete queries.stores;
			} else {
				queries.stores = stores
					?.filter((item) => item !== value.toString())
					.join(",");
			}
		}

		push(
			{
				pathname,
				query: {
					...queries,
					changeFilter:
						searchParams.get("changeFilter") === "true"
							? "false"
							: "true",
				},
			},
			undefined,
			{ scroll: false }
		);
	};

	return (
		<CustomCheckbox
			options={{
				onChange,
				disabled: false,
				checked: !!stores && !!stores?.includes(id.toString()),
			}}
			item={item}
			hasCount={false}
		/>
	);
};

export default Option;
