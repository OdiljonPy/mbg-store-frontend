import React from "react";
import css from "./product-info.module.css";
import ProductRate from "@/components/shared/product/components/product-info/product-rate/product-rate";
import ProductPrice from "@/components/shared/product/components/product-info/product-price/product-price";
import Link from "next/link";
import { IProduct } from "@/data-types/products/common";
import ProductSeller from "@/components/shared/product/components/product-info/product-seller/product-seller";

interface props {
  product: IProduct;
}

const ProductInfo = ({ product }: props) => {
  const { id, rating, rating_count, name, price, discount_price, discount } =
    product;
  return (
    <div className={css.info}>
      <ProductRate rating={rating} total_rate_count={rating_count} />
      <Link href={`/products/${id}`} className={css.title}>
        {name}
      </Link>
      <ProductPrice
        discount={discount}
        price={price}
        discount_price={discount_price}
      />
      <ProductSeller store={product?.store} className={css.seller} />
    </div>
  );
};

export default ProductInfo;
