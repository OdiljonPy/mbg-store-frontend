import css from "@/components/pages/products/filters/mobile/categories/body/body.module.css";
import CustomCheckbox from "@/components/pages/products/filters/mobile/components/custom-checkbox/custom-checkbox";
import { useDeliveryOptions } from "@/components/pages/products/filters/mobile/hooks/use-delivery-options";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
interface props {}

const Body = (props: props) => {
	const deliveryOptions = useDeliveryOptions();
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const delivery: string[] | undefined = searchParams
		.get("delivery")
		?.split(",");
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const queries = {
			...query,
		};

		if (e.target.checked) {
			queries.delivery = delivery ? delivery + "," + value : value;
			queries.hasDelivery = "true";
		} else {
			if (delivery?.length === 1) {
				delete queries.delivery;
			} else {
				queries.delivery = delivery
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
			{deliveryOptions.map((item) => (
				<CustomCheckbox
					onChangeHandler={onChange}
					boolName={"hasDelivery"}
					name={"delivery"}
					item={item}
					key={item.id}
					hasCount={false}
				/>
			))}
		</div>
	);
};

export default Body;
