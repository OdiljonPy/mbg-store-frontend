import CancelModal from "@/components/pages/cart/order_placed/common/cancel-modal/cancel-modal";
import Button from "@/components/shared/button";
import Info from "@/components/shared/info/info";
import { generateClickUpPaymentLink } from "@/config/clickup";
import { siteConfig } from "@/config/site";
import {
  EnumDeliveryType,
  IOrder,
  OrderStatusChoices,
} from "@/data-types/order/order";
import { changeOrderStatus } from "@/slices/order/changeOrderSlice";
import { AppDispatch, RootState } from "@/store";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import css from "./order-cost-card.module.css";

interface Props {
  order: IOrder;
  loading: boolean;
  setErr?: (val: boolean) => void;
}

function OrderCostCard({ order, loading, setErr }: Props) {
  const t = useTranslations("orders.order_cost_card");
  const dispatch = useDispatch<AppDispatch>();
  const { addToast } = useToasts();
  const { push } = useRouter();

  const productsCost =
    order.sale_price + order.total_price + Number(order?.sale_price_promo_code);

  const [openCancelModal, setOpenCancelModal] = useState(false);
  const { createLoad } = useSelector((state: RootState) => state.orders);

  const orderCancel = (status: "cancel" | "close") => {
    if (status === "cancel") {
      const data = {
        id: order.id,
        status: 8,
      };
      dispatch(changeOrderStatus(data))
        .unwrap()
        .then((res) => {
          if (!res.ok) {
            setOpenCancelModal(false);
            if (setErr) {
              setErr(true);
            }
            addToast(t("notification.error"), {
              appearance: "error",
              autoDismiss: true,
            });
          } else {
            setOpenCancelModal(false);
            push("/account/orders");
          }
        });
    } else setOpenCancelModal(false);
  };

  const submitOrder = () => {
    const paymentLink = generateClickUpPaymentLink({
      orderId: order.id,
      returnUrl: siteConfig.url + `/account/orders/${order.id}`,
      amount: order.total_price,
    });
    push(paymentLink).then(() => true);
    localStorage.removeItem("storeCheckOne");
  };

  console.log(
    (order.status !== OrderStatusChoices.CANCELLED &&
      order.status !== OrderStatusChoices.PICKED_UP &&
      order.type === EnumDeliveryType.PICKUP) ||
      order.status === OrderStatusChoices.WAITING_FOR_PAYMENT,
  );

  return (
    <div className={css.card}>
      <header className={css.card_header}>
        <h2 className={css.card_title}>{t("title")}</h2>
      </header>
      <div className={css.card_body}>
        <ul className={css.list}>
          <li>
            <span>{t("products_cost")}</span>
            <span>
              {loading ? (
                <Skeleton width={100} />
              ) : (
                <>{priceFormatter(productsCost, true)}</>
              )}
            </span>
          </li>
          <li>
            <span>{t("discounts")}</span>
            <span>
              {loading ? (
                <Skeleton width={90} />
              ) : (
                <>
                  {priceFormatter(
                    order.sale_price ? -order.sale_price : 0,
                    true,
                  )}
                </>
              )}
            </span>
          </li>
          <li>
            <span>
              {t("promo_code")}{" "}
              <span className={css.promoname}>
                {order.promo_code?.promocode}
              </span>
            </span>
            <span>
              {loading ? (
                <Skeleton width={90} />
              ) : (
                <>
                  {priceFormatter(-(order?.sale_price_promo_code || -0), true)}
                </>
              )}
            </span>
          </li>
          {order.type === EnumDeliveryType.DELIVERY && (
            <li>
              <span>{t("delivery")}</span>
              <span>
                {loading ? (
                  <Skeleton width={90} />
                ) : (
                  <>{priceFormatter(order.delivery_price, true)}</>
                )}
              </span>
            </li>
          )}
          {order.type === EnumDeliveryType.PICKUP && (
            <li>
              <span>{t("pickup")}</span>
              <span>
                {loading ? (
                  <Skeleton width={90} />
                ) : (
                  <>{priceFormatter(0, true)}</>
                )}
              </span>
            </li>
          )}
          <div className={css.divider} />
          <li className={css.total}>
            <span>{t("total")}</span>
            <span>
              {loading ? (
                <Skeleton width={90} />
              ) : (
                <>{priceFormatter(order.total_price, true)}</>
              )}
            </span>
          </li>
        </ul>
        {!loading && (
          <footer className={css.card_footer}>
            {order.status !== OrderStatusChoices.PICKED_UP &&
              order.status !== OrderStatusChoices.CANCELLED &&
              order.type === EnumDeliveryType.PICKUP && (
                <Info>{t("payment_when_receiving")}</Info>
              )}
            {order.status === OrderStatusChoices.WAITING_FOR_PAYMENT &&
              order.type === EnumDeliveryType.DELIVERY && (
                <Button
                  type="submit"
                  full
                  onClick={submitOrder}
                  loading={createLoad}
                >
                  {t("checkout")}
                </Button>
              )}
            {(order.status !== OrderStatusChoices.CANCELLED &&
              order.status !== OrderStatusChoices.PICKED_UP &&
              order.type === EnumDeliveryType.PICKUP) ||
            order.status === OrderStatusChoices.WAITING_FOR_PAYMENT ? (
              <>
                <Button
                  full
                  variant="secondary"
                  onClick={() => setOpenCancelModal(true)}
                >
                  {t("cancel")}
                </Button>
                <CancelModal
                  open={openCancelModal}
                  onClose={orderCancel}
                  title={order.id}
                />
              </>
            ) : null}
          </footer>
        )}
      </div>
    </div>
  );
}

export default OrderCostCard;
