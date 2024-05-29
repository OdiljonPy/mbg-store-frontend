import css from "./contents.module.css";
import Product from "@/components/pages/cart/contents/product/product";
import CartEmpty from "@/components/pages/cart/common/cart-empty/cart-empty";
import { IBasketSlices } from "@/data-types/slices/basket";
import { Badge } from "antd";
import { useTranslations } from "next-intl";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";

interface props {
  basketSlices: IBasketSlices;
}

const Contents = ({ basketSlices }: props) => {
  const t = useTranslations();
  const { products, totalCountProduct, not_available } = basketSlices;
  return (
    <div className={css.contents}>
      {not_available?.length ? (
        <div className={css.info_not_available}>
          <WarningText type={"error"} color={"#FF6C6C"}>
            <p>{t("products.warning_products")}</p>
          </WarningText>
        </div>
      ) : (
        ""
      )}

      {!totalCountProduct ? (
        <CartEmpty text={"cart.orders.empty"} />
      ) : (
        products?.map((product) => (
          <Product product={product} key={product.id} />
        ))
      )}

      {not_available?.length ? (
        <div className={css.unavailable}>
          <h1 className={css.title}>
            {t("products.unavailable_product")}{" "}
            <Badge count={not_available?.length} color={"#FF6C6C"} />
          </h1>
          <div className={css.contents}>
            {not_available?.map((product) => (
              <Product isAvailable product={product} key={product.id} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contents;
