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
	const { push, query } = useRouter();

	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const accessibility = searchParams.get("accessibility")?.split(",");

	const onChange = (e: CheckboxChangeEvent) => {
		const value = e.target.value;
		const queries = {
			...query,
		};

		if (e.target.checked) {
			queries.accessibility = accessibility
				? accessibility + "," + value
				: value;
		} else {
			if (accessibility?.length === 1) {
				delete queries.accessibility;
			} else {
				queries.accessibility = accessibility
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
				checked:
					!!accessibility && !!accessibility?.includes(id.toString()),
			}}
			item={item}
			hasCount={false}
		/>
	);
};

export default Option;
