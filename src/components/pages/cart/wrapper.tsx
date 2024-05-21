import css from "./wrapper.module.css";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";
import { Badge } from "antd";
import Favourites from "@/components/pages/cart/favourites/favourites";
import Contents from "@/components/pages/cart/contents/contents";
import Total from "@/components/pages/cart/total/total";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { calcPrices, checkProductAvailable } from "@/slices/basket/basketSlice";
import { useEffect } from "react";
import { fetchFavourites } from "@/slices/favorites/favoritesSlice";
interface props {}

const Wrapper = (props: props) => {
  const basketSlices = useSelector((state: RootState) => state.basket);
  const { favourites, total_count } = useSelector(
    (state: RootState) => state.favorites,
  );

  const { newFavourites } = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations();

  dispatch(calcPrices());

  const products = basketSlices.products.map((product) => {
    return {
      id: product.id,
      count: product?.count,
    };
  });

  basketSlices.not_available?.forEach((product) => {
    const idx = products.findIndex(
      (allProduct) => allProduct.id === product.id,
    );
    if (idx === -1) {
      products.push({
        id: product.id,
        count: product.count,
      });
    }
  });

  useEffect(() => {
    dispatch(checkProductAvailable([...products]));
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch(fetchFavourites());
    }
  }, []);
  return (
    <section className={css.cart}>
      <div className={"container"}>
        <Breadcrumbs
          items={[
            {
              path: "/",
              label: t("header.home"),
            },
            {
              path: "/cart",
              label: t("header.basket"),
            },
          ]}
        />
        <h1 className={css.title}>
          {t("header.basket")}{" "}
          <Badge
            count={
              basketSlices.totalCountProduct
                ? basketSlices.totalCountProduct
                : 0
            }
            color={"#39B969"}
          />
        </h1>
        <div className={css.wrapper}>
          <Contents basketSlices={basketSlices} />
          <Total basketSlice={basketSlices} />
        </div>

        {total_count ? <Favourites favourites={favourites} /> : ""}
      </div>
    </section>
  );
};

export default Wrapper;
