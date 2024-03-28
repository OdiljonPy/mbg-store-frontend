import Header from "./components/header/header";
import NewStatement from "./components/new-statement/new-statement";
import StatementList from "./components/statement-list/statement-list";
import { data } from "./data";

import css from "./wrapper.module.css";

const Wrapper = () => {
	return (
		<section className={css.wrapper}>
			<Header />
			<div className={css.btn_wrapper}>
				{!!data.length && <NewStatement className={css.btn} />}
			</div>
			<StatementList />
		</section>
	);
};

export default Wrapper;
