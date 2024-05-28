import CustomLabel from "@/components/pages/products/filters/desktop/rating/custom-label/custom-label";
import CustomRadio from "@/components/shared/custom-radio/custom-radio";
import { ICustomRadio } from "@/components/shared/custom-radio/data-types/custom-radio";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

interface props {
	item: ICustomRadio;
}

const Option = ({ item }: props) => {
	const { key, title, count } = item;

	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const rating = searchParams.get("rating");
	const onSetValue = () => {
		push(
			{
				pathname,
				query: {
					...query,
					rating: key,
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
		<CustomRadio
			radio={item}
			options={{
				onChange: onSetValue,
				disabled: false,
				checked: rating === key,
			}}
		>
			<CustomLabel title={title} count={count} />
		</CustomRadio>
	);
};

export default Option;
