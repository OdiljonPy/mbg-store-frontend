import { RootState } from "@/store";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import Header from "./components/header/header";
import Search from "./components/search/search";
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

	return (
		<section className={css.wrapper}>
			<Header />
			{favourites.length ? (
				<div className={css.search_box}>
					<Search />
				</div>
			) : null}
			<FavoriteList />
		</section>
	);
};

export default Wrapper;
