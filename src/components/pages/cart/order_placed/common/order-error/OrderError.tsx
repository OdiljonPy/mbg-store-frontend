import css from "./order-error.module.css";
import IconError from "@/components/pages/cart/order_placed/common/order-error/icon/IconError";
const OrderError = () => {
  return (
    <div className={css.error_order}>
      <IconError />
      <h2 className={css.error_title}>Что-то пошло не так :(</h2>
      <p className={css.error_description}>
        Попробуйте еще раз позже или свяжитесь со службой поддержки{" "}
      </p>
    </div>
  );
};

export default OrderError;
