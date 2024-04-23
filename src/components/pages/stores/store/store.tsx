import { IStore } from "@/components/pages/stores/data-types/store";
import Link from "next/link";
import css from "./store.module.css";

interface props {
	store: IStore;
}

const Store = ({ store }: props) => {
	const { brand_name: title } = store;
	return (
		<Link
			href={`/stores/${store?.id}?stores=${store?.id}`}
			className={css.store}
		>
			{title}
		</Link>
	);
};

export default Store;
