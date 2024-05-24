import Button from "@/components/shared/button";
import Info from "@/components/shared/info/info";
import {
  EnumDeliveryType,
  IOrder,
  OrderStatusChoices,
} from "@/data-types/order/order";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import Skeleton from "react-loading-skeleton";
import css from "./order-cost-card.module.css";
import CancelModal from "@/components/pages/cart/order_placed/order-pickup/content/modal/cancel-modal/cancel-modal";
import React, { useState } from "react";
import { changeOrderStatus } from "@/slices/order/changeOrderSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/navigation";

interface Props {
  order: IOrder;
  loading: boolean;
}

function OrderCostCard({ order, loading }: Props) {
  const t = useTranslations("orders.order_cost_card");
  const dispatch = useDispatch<AppDispatch>();
  const { addToast } = useToasts();
  const { push } = useRouter();

  const productsCost =
    order.sale_price + order.total_price + Number(order.promo_code?.discount);

  const [openCancelModal, setOpenCancelModal] = useState(false);

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
                <>{priceFormatter(-(order.promo_code?.discount || -0), true)}</>
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
        {order.type === EnumDeliveryType.PICKUP &&
          order.status !== OrderStatusChoices.CANCELLED && (
            <footer className={css.card_footer}>
              <Info>{t("payment_when_receiving")}</Info>
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
            </footer>
          )}
      </div>
    </div>
  );
}

export default OrderCostCard;
