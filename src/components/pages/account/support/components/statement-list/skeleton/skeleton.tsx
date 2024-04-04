import Skeleton from "react-loading-skeleton";
import css from "./skeleton.module.css";

function StatementItemSkeleton() {
	return (
		<div className={css.card}>
			<div className={css.header}>
				<div className={css.header_left}>
					<Skeleton width={150} />
					<p className={css.date}>
						<Skeleton width={200} />
					</p>
				</div>
				<div className={css.header_right}>
					<div className={css.receiving_method}>
						<Skeleton width={100} />
					</div>
					<Skeleton width={80} />
				</div>
			</div>
			<div className={css.body}>
				<div className={css.text_wrapper}>
					<p className={css.description}>
						<Skeleton width={"90%"} />
						<Skeleton width={"60%"} />
					</p>
				</div>
				<div className={css.files}>
					<Skeleton className={css.file_wrapper} />
					<Skeleton className={css.file_wrapper} />
					<Skeleton className={css.file_wrapper} />
				</div>
			</div>
		</div>
	);
}

export default StatementItemSkeleton;
