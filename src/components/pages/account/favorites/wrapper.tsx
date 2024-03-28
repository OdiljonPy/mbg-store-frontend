import Header from "./components/header/header";
import ProductList from "./components/favorites-list/favorites-list";
import Search from "./components/search/search";
import { data } from "./data";
import css from "./wrapper.module.css";

export type AddressBookTab = "delivery" | "pickup";

const Wrapper = () => {
	return (
		<section className={css.wrapper}>
			<Header />
			{data.length ? (
				<div className={css.search_box}>
					<Search />
				</div>
			) : null}
			<ProductList />
		</section>
	);
};

export default Wrapper;
