import Recipient from "@/components/pages/cart/delivery/content/recipient/recipient";
import css from "./content.module.css";
import Order from "@/components/pages/cart/delivery/content/order/order";
import Obtaining from "@/components/pages/cart/delivery/content/obtaining/obtaining";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IPostOrder } from "@/data-types/order/order";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
interface props {
  form: UseFormReturn<IPostOrder>;
}
const Content = ({ form }: props) => {
  const { products, totalCountProduct } = useSelector(
    (state: RootState) => state.basket,
  );
  const { setValue } = useFormContext<IPostOrder>();
  const router = useRouter();

  useEffect(() => {
    if (products?.length < 1) {
      router.push("/cart");
    }
    setValue(
      "products",
      products?.map((item) => {
        return {
          product: item.id,
          quantity: item.count ? item.count : 0,
        };
      }),
    );
  }, [products]);

  return (
    <div className={css.content}>
      <Recipient />
      <Obtaining />
      {totalCountProduct ? (
        <Order products={products} totalCountProduct={totalCountProduct} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
