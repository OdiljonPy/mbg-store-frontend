import { IStoreLetter } from "@/components/pages/stores/data-types/store";
import StoreList from "@/components/pages/stores/store-list/store-list";
import css from "../store-list/store-letter.module.css";

interface props {
	storeLetter: IStoreLetter;
}

const StoreLetter = ({ storeLetter }: props) => {
	const { letter, stores } = storeLetter;
	return (
		<div id={letter} className={css.item}>
			<h3 className={css.title}>{letter}</h3>
			<StoreList store_list={stores} />
		</div>
	);
};

export default StoreLetter;
