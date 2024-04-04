import StatementItem from "./statement-item/statement-item";
import SupportEmpty from "./support-empty/support-empty";

import FormError from "@/components/shared/form-error/form-error";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import StatementItemSkeleton from "./skeleton/skeleton";
import css from "./statement-list.module.css";

function StatementList() {
	const { supports, loading, error } = useSelector(
		(state: RootState) => state.supports
	);

	if (loading) {
		return (
			<ul className={css.list}>
				{Array.from({ length: 3 }).map((undefined, index) => (
					<StatementItemSkeleton key={index} />
				))}
			</ul>
		);
	}

	if (error)
		return (
			<div>
				<FormError error={"Что-то пошло не так"} />
			</div>
		);

	if (!supports.length) {
		return <SupportEmpty />;
	}

	return (
		<ul className={css.list}>
			{supports.map((item) => (
				<li key={item.id}>
					<StatementItem statementItem={item} />
				</li>
			))}
		</ul>
	);
}

export default StatementList;
