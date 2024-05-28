import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";
import { ICustomCheckbox } from "@/components/shared/custom-checkbox/data-types/custom-checkbox";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";

interface props {
	storeList: ICustomCheckbox[];
}

const Body = ({ storeList }: props) => {
	const searchParams = useSearchParams();
	const { push, query } = useRouter();
	const pathname = usePathname();
	const stores: string[] | undefined = searchParams.get("stores")?.split(",");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
		<div className={css.wrapper}>
			{storeList.map((item) => (
				<CustomCheckbox
					hasCount={false}
					name={"stores"}
					item={item}
					key={item.id}
					onChangeHandler={onChange}
				/>
			))}
		</div>
	);
};

export default Body;
