import CustomCheckbox from "@/components/shared/custom-checkbox/custom-checkbox";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
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

	const sale = searchParams.get("sale");

	const onChange = () => {
		const queries = {
			...query,
		};

		queries.sale = String(item.id);
		delete queries.onSales;

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
			{
				scroll: false,
			}
		);
	};

	return (
		<CustomCheckbox
			options={{
				onChange,
				disabled: false,
				checked: !!sale && !!sale?.includes(id.toString()),
			}}
			item={item}
		/>
	);
};

export default Option;
