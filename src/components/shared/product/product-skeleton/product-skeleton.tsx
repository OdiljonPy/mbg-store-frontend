import css from "./skeleton.module.css";
import Skeleton from "react-loading-skeleton";

interface props {}
const ProductSkeleton = ({}: props) => {
  return (
    <div className={css.skeleton}>
      <Skeleton className={css.image} />
      <Skeleton className={css.rate} />
      <Skeleton className={css.title} />
      <Skeleton className={css.price} />
      <Skeleton className={css.sold} />
    </div>
  );
};

export default ProductSkeleton;
