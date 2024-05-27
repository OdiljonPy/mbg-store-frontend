import css from "@/components/pages/cart/order_placed/order-pickup/order.module.css";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";
import Content from "@/components/pages/cart/order_placed/order-pickup/content/content";
import Status from "@/components/pages/cart/order_placed/common/order-status/status";
import DetailCart from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart";
import DetailPrice from "@/components/pages/cart/order_placed/common/detail-carts/detail-price/detail-price";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import { fetchOrderLast } from "@/slices/order/lastOrderSlice";
import OrderError from "@/components/pages/cart/order_placed/common/order-error/error/OrderError";
import CartEmpty from "@/components/pages/cart/common/cart-empty/cart-empty";
import OrderCostCard from "@/components/pages/account/orders/order/order-cost-card/order-cost-card";

interface props {}

const Wrapper = (props: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  const [err, setErr] = useState(false);
  const { last_order, loading } = useSelector(
    (state: RootState) => state.last_order,
  );

  useEffect(() => {
    dispatch(fetchOrderLast());
  }, [dispatch]);

  if (err) return <OrderError />;

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
            {
              path: "/cart/delivery",
              label: t("header.order_placed"),
            },
          ]}
        />
        <div>
          <div className={css.status}>
            <Status />
          </div>
          <div className={css.wrapper}>
            <Content />
            <div className={css.detail}>
              <DetailCart />
              <DetailPrice isDeleteAction setErr={(err) => setErr(err)} />
              <OrderCostCard order={last_order} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
