import { RootState } from "@/store";
import { useSelector } from "react-redux";
import ProductList from "./components/favorites-list/favorites-list";
import Header from "./components/header/header";
import Search from "./components/search/search";
import css from "./wrapper.module.css";

export type AddressBookTab = "delivery" | "pickup";

const Wrapper = () => {
	const favorites = useSelector((state: RootState) => state.favorites);

	return (
		<section className={css.wrapper}>
			<Header />
			{favorites.length ? (
				<div className={css.search_box}>
					<Search />
				</div>
			) : null}
			<ProductList />
		</section>
	);
};

export default Wrapper;
