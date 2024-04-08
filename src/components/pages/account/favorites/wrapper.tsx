import { useClientSearch } from "@/hooks/use-client-search";
import { RootState } from "@/store";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Header from "./components/header/header";
import Search from "./components/search/search";
import { FavoritesSearchContext } from "./context/favorites-search-context";
import css from "./wrapper.module.css";

export type AddressBookTab = "delivery" | "pickup";

const FavoriteList = dynamic(
	() =>
		import(
			"@/components/pages/account/favorites/components/favorites-list/favorites-list"
		),
	{
		ssr: false,
	}
);

const Wrapper = () => {
	const { favourites } = useSelector((state: RootState) => state.favorites);

	const { filteredData, onSearchValueChange, searchValue } = useClientSearch({
		data: favourites,
		searchBy: ["name", "description", 'price', 'discount_price'],
	});

	return (
		<FavoritesSearchContext.Provider
			value={{ filteredData, searchValue, onSearchValueChange }}
		>
			<section className={css.wrapper}>
				<Header />
				{favourites.length ? (
					<div className={css.search_box}>
						<Search />
					</div>
				) : null}
				<FavoriteList />
			</section>
		</FavoritesSearchContext.Provider>
	);
};

export default Wrapper;
