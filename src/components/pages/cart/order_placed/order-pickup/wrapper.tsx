import css from "@/components/pages/cart/order_placed/order-pickup/order.module.css";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";
import Content from "@/components/pages/cart/order_placed/order-pickup/content/content";
import Status from "@/components/pages/cart/order_placed/common/order-status/status";
import DetailCart from "@/components/pages/cart/order_placed/common/detail-carts/detail-cart/detail-cart";
import DetailPrice from "@/components/pages/cart/order_placed/common/detail-carts/detail-price/detail-price";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useEffect, useState } from "react";
import { fetchOrderLast } from "@/slices/order/lastOrderSlice";
import OrderError from "@/components/pages/cart/order_placed/order-pickup/notification/error/OrderError";
import CartEmpty from "@/components/pages/cart/common/cart-empty/cart-empty";

interface props {}

const Wrapper = (props: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  const [err, setErr] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    dispatch(fetchOrderLast())
      .unwrap()
      .then((res) => {
        if (res?.ok) if (res?.response?.status == 8) setDone(true);
      });
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
        {done ? (
          <CartEmpty text={"cart.orders.done"} />
        ) : (
          <div>
            <div className={css.status}>
              <Status status_text={"status.PROGRESSING"} status="warning" />
            </div>
            <div className={css.wrapper}>
              <Content />
              <div className={css.detail}>
                <DetailCart />
                <DetailPrice
                  isDeleteAction
                  setErr={(err) => setErr(err)}
                  setDone={(done) => setDone(done)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Wrapper;
