import { clearSearchHistory } from "@/slices/search_history/searchHistorySlice";
import { AppDispatch } from "@/store";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import css from "./index.module.css";

interface Props {
	title: string;
	isClear?: boolean;
}

function ProductSearchGroup({ title, isClear }: Props) {
	const dispatch = useDispatch<AppDispatch>();
	const t = useTranslations("search");

	const onClickHistoryHandle = () => {
		dispatch(clearSearchHistory());
	};

	return (
		<div className={css.wrapper}>
			<h4 className={css.title}>{title}</h4>
			{isClear && (
				<div onClick={onClickHistoryHandle} className={css.clear}>
					{t("clear")}
				</div>
			)}
		</div>
	);
}

export default ProductSearchGroup;
