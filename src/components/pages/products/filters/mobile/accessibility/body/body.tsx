import { accessibilityList } from "@/components/pages/products/filters/desktop/accessibility/accessibility";
import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

interface props {}

const Body = (props: props) => {
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const accessibility = searchParams.get("accessibility")?.split(",");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
		<div className={css.wrapper}>
			{accessibilityList.map((item) => (
				<CustomCheckbox
					onChangeHandler={onChange}
					name={"accessibility"}
					item={item}
					key={item.id}
					hasCount={false}
				/>
			))}
		</div>
	);
};

export default Body;
