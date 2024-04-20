import Skeleton from "react-loading-skeleton";

import css from "./skeleton.module.css";

function StoresSkeleton() {
	return Array.from({ length: 4 }).map((_, index) => (
		<>
			<Skeleton
				key={index}
				height={26}
				width={30}
				className={css.letterSkeleton}
				containerClassName={css.letterSkeletonContainer}
			/>
			<Skeleton
				count={10}
				width={200}
				height={20}
				className={css.storesSkeleton}
				containerClassName={css.storesSkeletonContainer}
			/>
		</>
	));
}

export default StoresSkeleton;
