import { useDispatch, useSelector } from "react-redux";
import Header from "./components/header/header";
import NewStatement from "./components/new-statement/new-statement";
import StatementList from "./components/statement-list/statement-list";

import FormError from "@/components/shared/form-error/form-error";
import { fetchSupports } from "@/slices/support/supportSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import css from "./wrapper.module.css";

const Wrapper = () => {
	const { supports, error } = useSelector(
		(state: RootState) => state.supports
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchSupports());
	}, [dispatch]);

	return (
		<section className={css.wrapper}>
			<Header />
			<div className={css.btn_wrapper}>
				{!!supports.length && <NewStatement className={css.btn} />}
			</div>
			<StatementList />
		</section>
	);
};

export default Wrapper;
