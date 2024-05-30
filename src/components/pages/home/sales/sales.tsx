import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import Product from "@/components/shared/product/product";
import { useSlider } from "@/hooks/use-slider";
import { fetchProductDiscount } from "@/slices/product/productDiscountSlices";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./sales.module.css";
import ProductSkeleton from "@/components/shared/product/product-skeleton/product-skeleton";

interface props {}

const Sales = (props: props) => {
  const { data, loading } = useSelector(
    (state: RootState) => state.product_discount,
  );
  const dispatch = useDispatch<AppDispatch>();
  const { sliderRef, loaded } = useSlider();

  useEffect(() => {
    dispatch(fetchProductDiscount());
  }, [dispatch]);

  if (data.content?.length === 0 && !loading) return;

  return (
    <section className={css.sales}>
      <div className={"container"}>
        <HeadingLine
          heading={{
            title: "sales.title",
            count: data?.totalElements,
            link: "products?sort=popular&onSales=true",
          }}
        />

        {loading ? (
          <div className={css.skeleton_container}>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        ) : (
          <div
            ref={sliderRef}
            className={`keen-slider ${css.wrapper} ${loaded ? css.show : ""}`}
          >
            {data?.content?.map((product) => {
              return (
                <div className={`keen-slider__slide`} key={product.id}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Sales;
