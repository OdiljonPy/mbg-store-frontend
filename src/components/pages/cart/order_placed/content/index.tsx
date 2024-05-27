import css from "./content.module.css";
import OrderItems from "@/components/pages/cart/order_placed/common/order-items/order-items";
import { useTranslations } from "next-intl";
import { EnumDeliveryType, IOrder } from "@/data-types/order/order";
import DeliveryAddress from "@/components/pages/cart/order_placed/common/order-address/delivery-address";
import PickupAddress from "@/components/pages/cart/order_placed/common/order-address/pickup-address";
interface props {
  last_order: IOrder;
  loading: boolean;
}
const Content = ({ last_order, loading }: props) => {
  const { delivery_address, order_items } = last_order;
  const t = useTranslations();
  return (
    <div className={css.content}>
      {last_order.type === EnumDeliveryType.DELIVERY && (
        <>
          <h2 className={css.title}>{t("orders.order_method.title")}</h2>
          <DeliveryAddress address={delivery_address} />
        </>
      )}
      {last_order.type === EnumDeliveryType.PICKUP && (
        <>
          <h2 className={css.title}>{t("orders.order_method.title")}</h2>
          <PickupAddress products={order_items} loading={loading} />
        </>
      )}

      <OrderItems
        loading={loading}
        products={order_items}
        totalCountProduct={order_items?.length}
      />
    </div>
  );
};

export default Content;
