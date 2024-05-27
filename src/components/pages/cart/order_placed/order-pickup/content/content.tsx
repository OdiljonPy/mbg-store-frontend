import css from "@/components/pages/cart/order_placed/order-delivery/content/content.module.css";
import Address from "@/components/pages/cart/order_placed/order-pickup/content/address/address";
import OrderItems from "@/components/pages/cart/order_placed/common/order-items/order-items";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import OrderError from "@/components/pages/cart/order_placed/common/order-error/error/OrderError";
import { useTranslations } from "next-intl";
interface props {}
const Content = (props: props) => {
  const { last_order, loading } = useSelector(
    (state: RootState) => state.last_order,
  );
  const { order_items } = last_order;
  const t = useTranslations();
  return (
    <div className={css.content}>
      <h2 className={css.title}>{t("orders.order_method.title")}</h2>
      <Address products={order_items} loading={loading} />
      <OrderItems
        loading={loading}
        products={order_items}
        totalCountProduct={order_items?.length}
      />
    </div>
  );
};

export default Content;
