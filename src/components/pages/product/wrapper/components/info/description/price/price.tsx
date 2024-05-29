import React from "react";
import css from "./price.module.css";
import DiscountBadge from "@/components/shared/discount-badge/discount-badge";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import Skeleton from "react-loading-skeleton";

interface IProps {
  discount_price?: number;
  price: number;
  discount_percentage?: number;
}

const Price = ({ discount_percentage, price, discount_price }: IProps) => {
  return (
    <div className={`${css.price}`}>
      {discount_percentage !== 0 ? (
        <DiscountBadge
          className={css.discount}
          discount_percentage={discount_percentage}
        />
      ) : null}
      <p
        className={`${css.discountPrice} ${!discount_percentage ? css.noDiscountPrise : ""}`}
      >
        {discount_price && priceFormatter(discount_price, true)}
      </p>
      {discount_percentage !== 0 ? (
        <p className={css.actualPrice}>{priceFormatter(price, true)}</p>
      ) : null}
    </div>
  );
};

export default Price;
