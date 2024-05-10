import React, { useState } from "react";
import css from "./add-to-card.module.css";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { IProduct } from "@/data-types/products/common";
import { addProduct } from "@/slices/basket/basketSlice";
import { useToasts } from "react-toast-notifications";

interface props {
  product: IProduct;
}

const AddToCard = ({ product }: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();

  const { addToast } = useToasts();

  const [count, setCount] = useState(0);

  const addBasket = () => {
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
  };
  return (
    <button
      className={`${css.btn} ${product.available < 1 || count >= product.available ? css.disabled : ""}`}
      onClick={() => addBasket()}
    >
      {t("product.addToCart")}
    </button>
  );
};

export default AddToCard;
