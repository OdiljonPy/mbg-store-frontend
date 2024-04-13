import PlusBtn from "@/components/shared/plus-btn/plus-btn";
import { IFaq } from "@/data-types/base/faq";
import css from "./header.module.css";

interface Props {
	item: IFaq;
	onToggle: () => void;
	open: boolean;
}

const Header = ({ item, onToggle, open }: Props) => {
	const { question, id } = item;
	return (
		<div
			role={"button"}
			onClick={onToggle}
			className={`${css.header} ${open ? css.opened : ""}`}
		>
			<div className={css.info}>
				<p className={css.number}>0{id}</p>
				<h4 className={css.question}>{question}</h4>
			</div>
			<PlusBtn open={open} />
		</div>
	);
};

export default Header;
