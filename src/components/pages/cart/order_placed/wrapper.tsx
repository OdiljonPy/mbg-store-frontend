import DetailCart from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart";
import Status from "@/components/pages/cart/order_placed/common/order-status/status";
import Content from "@/components/pages/cart/order_placed/content";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchOrderLast } from "@/slices/order/lastOrderSlice";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";
import OrderCostCard from "@/components/pages/account/orders/order/order-cost-card/order-cost-card";
import OrderError from "@/components/pages/cart/order_placed/common/order-error/OrderError";
import { cn } from "@/utils/cn";
interface props {}

const Wrapper = (props: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();

  const { last_order, loading } = useSelector(
    (state: RootState) => state.last_order,
  );
  const [err, setErr] = useState(false);

  useEffect(() => {
    dispatch(fetchOrderLast());
  }, [dispatch]);

  if (err) return <OrderError />;
  return (
    <section className={cn("container", css.cart)}>
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
      <div className={css.status}>
        <Status last_order={last_order} loading={loading} />
      </div>
      <div className={css.wrapper}>
        <Content loading={loading} last_order={last_order} />
        <aside className={css.detail}>
          <DetailCart />
          <OrderCostCard setErr={setErr} order={last_order} loading={loading} />
        </aside>
      </div>
    </section>
  );
};

export default Wrapper;
