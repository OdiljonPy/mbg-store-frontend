import Header from "./components/header/header";
import OrdersList from "./components/order-list/order-list";
import Search from "./components/search/search";

import css from "./wrapper.module.css";

const Wrapper = () => {
	return (
		<section className={css.orders}>
			<Header />
			<div className={css.search_box}>
				<Search />
			</div>
			<OrdersList />
		</section>
	);
};

export default Wrapper;
