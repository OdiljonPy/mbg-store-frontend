import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import Product from "@/components/shared/product/product";
import { useSlider } from "@/hooks/use-slider";

import { RootState } from "@/store";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

import css from "./near.module.css";
import ProductSkeleton from "@/components/shared/product/product-skeleton/product-skeleton";

const ProductList = () => {
  const { sliderRef, loaded, onNext, onPrev, currentSlide } = useSlider();
  const { data, loading } = useSelector(
    (state: RootState) => state.product_near,
  );

  if (loading)
    return (
      <div className={css.skeleton_container}>
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </div>
    );

  return (
    <>
      <ProductSwiperArrow onClick={onPrev} isDisabled={currentSlide === 0} />
      <ProductSwiperArrow onClick={onNext} isNext />
      <div
        ref={sliderRef}
        className={`keen-slider ${css.wrapper} ${loaded ? css.show : ""}`}
      >
        {data?.content?.slice(0, 10).map((product) => (
          <div className={`keen-slider__slide`} key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
