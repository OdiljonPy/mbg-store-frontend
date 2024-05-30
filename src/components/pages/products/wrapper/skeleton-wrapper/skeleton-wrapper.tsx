import css from "./skeleton-wrapper.module.css";
import React from "react";
import ProductSkeleton from "@/components/shared/product/product-skeleton/product-skeleton";
const SkeletonWrapper = () => {
  return (
    <div className={css.skeleton_container}>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  );
};
export default SkeletonWrapper;
