import css from "./info_preloader.module.css";
import Skeleton from "react-loading-skeleton";
const InfoPreloader = () => {
  return (
    <div className={css.skeleton_container}>
      <Skeleton count={1} className={css.title} />
      <Skeleton count={1} className={css.weight} />
      <Skeleton count={1} className={css.store} />
      <Skeleton count={1} className={css.rank} />
      <Skeleton count={1} className={css.store} />
      <Skeleton count={1} className={css.discount} />
      <Skeleton
        count={2}
        className={css.type}
        containerClassName={css.type_container}
      />
      <Skeleton count={1} className={css.action} />
      <Skeleton count={1} className={css.product} />
    </div>
  );
};

export default InfoPreloader;
