import Content from "@/components/pages/cart/delivery/content/content";
import TotalSum from "@/components/pages/cart/delivery/totalSum/totalSum";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { generateClickUpPaymentLink } from "@/config/clickup";
import { siteConfig } from "@/config/site";
import { IPostOrder } from "@/data-types/order/order";
import { clearBasket } from "@/slices/basket/basketSlice";
import { createOrder } from "@/slices/order/ordersSlice";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = (props: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  const methods = useForm<IPostOrder>();
  const router = useRouter();
  const { addToast } = useToasts();

  const { cost_price } = useSelector((state: RootState) => state.basket);

  const submitOrder = (values: IPostOrder) => {
    if (values.type == "D" && !values.delivery_address) {
      return addToast(t("cart.info_enter_address"), {
        appearance: "info",
        autoDismiss: true,
      });
    }
    dispatch(createOrder(values))
      .unwrap()
      .then((res) => {
        if (res.ok) {
          if (router.query.type === "pickup") {
            router
              .replace("/cart/order-placed")
              .then((r) => dispatch(clearBasket()));
          } else {
            const paymentLink = generateClickUpPaymentLink({
              orderId: res.result.id,
              returnUrl: siteConfig.url + "/cart/order-placed",
              amount: cost_price,
            });
            router.replace(paymentLink).then((r) => dispatch(clearBasket()));
          }
          localStorage.removeItem("storeCheckOne");
        } else throw new Error("error");
      })
      .catch((err) => {
        return addToast(t("cart.orders.error"), {
          appearance: "error",
          autoDismiss: true,
        });
      });
  };

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
              label: t("header.delivery"),
            },
          ]}
        />

        <FormProvider {...methods}>
          <form
            className={css.wrapper}
            onSubmit={methods.handleSubmit(submitOrder)}
          >
            <Content form={methods} />
            <TotalSum />
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Wrapper;
