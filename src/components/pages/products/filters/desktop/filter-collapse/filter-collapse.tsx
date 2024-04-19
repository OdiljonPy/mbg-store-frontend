import useCustomCollapse from "@/components/pages/about/faq/hooks/useCustomCollapse";
import Body from "@/components/pages/products/filters/desktop/filter-collapse/body/body";
import PlusBtn from "@/components/shared/plus-btn/plus-btn";
import { PropsWithChildren } from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import css from "./filter-collapse.module.css";

interface props {
	title: string;
	queryResetList: string[];
}

const FilterCollapse = ({
	title,
	children,
	queryResetList: paramsResetList,
}: PropsWithChildren<props>) => {
	const { open, onToggle } = useCustomCollapse();
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

	return (
		<>
			<div onClick={onToggle} className={css.header}>
				<h4 className={css.title}>{title}</h4>
				<div className={css.control}>
					<button onClick={onReset} className={css.btn}>
						{open && "Reset"}
					</button>
					<PlusBtn open={open} onClick={onToggle} />
				</div>
			</div>
			<Body open={open}>{children}</Body>
		</>
	);
};

export default FilterCollapse;
