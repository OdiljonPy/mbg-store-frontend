import css from "./detail-item.module.css";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";

interface props {
  label: string;
  value?: string | number;
  className?: string;
  label_prefix?: ReactElement;
  loading?: boolean;
}

const DetailItem = ({
  label,
  value,
  className,
  label_prefix,
  loading,
}: props) => {
  return (
    <div className={`${css.item} ${className ? className : ""}`}>
      <h5 className={css.label}>
        {label}
        {label_prefix}
      </h5>
      <p className={`${css.value} `}>
        {value}
        {loading ? <Skeleton count={1} className={css.skeleton} /> : ""}
      </p>
    </div>
  );
};

export default DetailItem;
