import Skeleton from "react-loading-skeleton";
import css from "./skeleton.module.css";

function OrderedItemSkeleton() {
	return (
		<div className={css.wrapper}>
			<div className={css.image_box}>
				<Skeleton width={90} height={100} />
			</div>
			<div className={css.info}>
				<div className={css.info_left}>
					<div>
						<Skeleton width={200} />
						<Skeleton width={100} height={10} />
					</div>
					<p className={css.seller}>
						<Skeleton width={250} />
					</p>
				</div>
				<div className={css.info_right}>
					<Skeleton width={120} />
					<Skeleton width={100} height={10} />
					<p className={css.count}>
						<Skeleton width={80} />
					</p>
				</div>
			</div>
		</div>
	);
}

export default OrderedItemSkeleton;
