import { data } from "../../data";
import StatementItem from "./statement-item/statement-item";
import SupportEmpty from "./support-empty/support-empty";

import css from "./statement-list.module.css";

function StatementList() {
	if (!data.length) {
		return <SupportEmpty />;
	}

	return (
		<ul className={css.list}>
			{data.map((item) => (
				<li key={item.id}>
					<StatementItem statementItem={item} />
				</li>
			))}
		</ul>
	);
}

export default StatementList;
