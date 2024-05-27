import { useTranslations } from "next-intl";
import css from "@/components/pages/cart/order_placed/common/detail-carts/detail-price/detail-price.module.css";
import DetailItem from "@/components/pages/cart/order_placed/common/detail-carts/components/detail-items/detail-item";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import React, { useState } from "react";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
import CancelModal from "@/components/pages/cart/order_placed/common/cancel-modal/cancel-modal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeOrderStatus } from "@/slices/order/changeOrderSlice";
import { useToasts } from "react-toast-notifications";
import Button from "@/components/shared/button";
import { useRouter } from "next/navigation";

interface props {
  isDeleteAction?: boolean;
  setErr?: (val: boolean) => void;
}

const DetailCart = ({ isDeleteAction, setErr }: props) => {
  const { addToast } = useToasts();
  const { delivery_price } = useSelector((state: RootState) => state.basket);
  const { last_order } = useSelector((state: RootState) => state.last_order);
  const { promo_code, sale_price_promo_code, id, total_price, sale_price } =
    last_order;

  const salePromoCode = sale_price_promo_code ? sale_price_promo_code : 0;

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const t = useTranslations();
  const [onOpen, setOnOpen] = useState(false);

  const openModal = () => {
    setOnOpen(true);
  };
  const onClose = (status: "cancel" | "close") => {
    if (status === "cancel") {
      const data = {
        id,
        status: 8,
      };
      dispatch(changeOrderStatus(data)).then((res) => {
        if (!res.payload?.ok) {
          if (setErr) {
            setErr(true);
          }
          addToast(t("notification.error"), {
            appearance: "error",
            autoDismiss: true,
          });
        }
        setOnOpen(false);
        router.push("/account/orders");
      });
    } else {
      setOnOpen(false);
    }
  };

  return (
    <div className={css.total}>
      <h3 className={css.title}>{t("order_placed.order_cost_title")}</h3>
      <div className={css.info}>
        <DetailItem
          label={t("order_placed.order_cost")}
          value={priceFormatter(total_price + sale_price, true)}
        />
        <DetailItem
          className={css.paddingTop}
          label={t("cart.sales")}
          value={priceFormatter(
            sale_price > 0 ? -sale_price : sale_price,
            true,
          )}
        />
        {promo_code?.discount ? (
          <DetailItem
            className={css.paddingTop}
            label={t("cart.promo_code")}
            label_prefix={
              <span className={css.promo_code}>{promo_code?.promocode}</span>
            }
            value={priceFormatter(-salePromoCode, true)}
          />
        ) : (
          ""
        )}
        <DetailItem
          className={css.bordered}
          label={t("filters.delivery.title")}
          value={priceFormatter(delivery_price, true)}
        />

        <DetailItem
          className={css.all_price}
          label={t("order_placed.order_all")}
          value={priceFormatter(total_price + delivery_price, true)}
        />
        {isDeleteAction && (
          <div className={css.action}>
            <WarningText>
              <p>{t("order_placed.warning_text")}</p>
            </WarningText>
            <Button full variant="secondary" onClick={openModal}>
              {t("orders.order_cost_card.cancel")}
            </Button>
          </div>
        )}
      </div>
      <CancelModal open={onOpen} onClose={onClose} title={id} />
    </div>
  );
};

export default DetailCart;
