import Skeleton from "react-loading-skeleton";
import css from "./loading.module.css";

interface Props {
	index: number;
}

const Loading = ({ index }: Props) => {
	return (
		<div className={css.loading}>
			<div className={css.info}>
				<p className={css.number}>0{index + 1}</p>
				<h4 className={css.question}>
					<Skeleton width={"75%"} />
				</h4>
			</div>
			<button className={css.btn} />
		</div>
	);
};

export default Loading;
