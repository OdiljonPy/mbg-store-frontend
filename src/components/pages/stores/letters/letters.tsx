import Letter from "@/components/pages/stores/letters/letter/letter";
import { letters } from "@/constants/letters/letters";
import { IStoreLetter } from "../data-types/store";
import css from "./letters.module.css";

interface props {
	stores: IStoreLetter[];
}

const Letters = ({ stores }: props) => {
	return (
		<div className={css.letters}>
			{letters.map((letter) => {
				const isLetterActive =
					stores?.some((store) => store.letter === letter) || false;
				return (
					<Letter
						isActive={isLetterActive}
						letter={letter}
						key={letter}
					/>
				);
			})}
		</div>
	);
};

export default Letters;
