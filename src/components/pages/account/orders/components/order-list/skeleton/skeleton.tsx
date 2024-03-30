import "keen-slider/keen-slider.min.css";

import Button from "@/components/shared/button";
import Skeleton from "react-loading-skeleton";
import css from "./skeleton.module.css";

function OrderItemSkeleton() {
	return (
		<div className={css.card}>
			<div className={css.header}>
				<div className={css.header_left}>
					<Skeleton width={150} />
					<p className={css.date}>
						<Skeleton width={200} />
					</p>
				</div>
				<div className={css.status_box}>
					<div className={css.receiving_method}>
						<Skeleton width={100} />
					</div>
					<Skeleton width={80} />
				</div>
			</div>
			<div className={css.body}>
				<Skeleton
					width={100}
					height={116}
				/>
				<Skeleton
					width={100}
					height={116}
				/>
				<Skeleton
					width={100}
					height={116}
				/>
				<Skeleton
					width={100}
					height={116}
				/>
				<Skeleton
					width={100}
					height={116}
				/>
				<Skeleton
					width={100}
					height={116}
				/>
			</div>
			<div className={css.footer}>
				<Button
					className={css.btn}
					full
					variant='tertiary'
				>
					Повторить заказ
				</Button>
			</div>
		</div>
	);
}

export default OrderItemSkeleton;
