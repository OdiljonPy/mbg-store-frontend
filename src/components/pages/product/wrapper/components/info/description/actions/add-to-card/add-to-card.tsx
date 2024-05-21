import React, { useState } from "react";
import css from "./add-to-card.module.css";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { IProduct } from "@/data-types/products/common";
import { addProduct } from "@/slices/basket/basketSlice";
import { useToasts } from "react-toast-notifications";
import NotificationStore from "@/components/shared/notification-store/NotificationStore";
import { CheckStoreList } from "@/utils/checking-store-list/checkStoreList";

interface props {
  product: IProduct;
}

const AddToCard = ({ product }: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.basket);

  const [openNotification, setOpenNotification] = useState(false);

  const { addToast } = useToasts();

  const [count, setCount] = useState(0);

  const addBasket = () => {
    if (CheckStoreList(products, product.store)) {
      setCount(count + 1);
      if (count < product.available) {
        dispatch(addProduct({ quantity: 1, product }));
        addToast(t("products.addToCart"), {
          autoDismiss: true,
          appearance: "success",
        });
      } else {
        addToast(t("products.no_product"), {
          autoDismiss: true,
          appearance: "info",
        });
      }
    } else setOpenNotification(true);
  };
  return (
    <>
      <NotificationStore
        open={openNotification}
        setOpen={setOpenNotification}
      />
      <button
        className={`${css.btn} ${product.available < 1 || count >= product.available ? css.disabled : ""}`}
        onClick={() => addBasket()}
      >
        {t("product.addToCart")}
      </button>
    </>
  );
};

export default AddToCard;
