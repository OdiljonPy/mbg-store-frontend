import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { useTranslations } from "use-intl";
import { cn } from "@/utils/cn";
import css from "./product-seller.module.css";

interface props {
  store?: IProductInner["store"];
  className?: string;
}

const ProductSeller = ({ store, className }: props) => {
  const t = useTranslations();
  return (
    <div className={cn(css.wrapper, className)}>
      <p className={css.seller}>
        <span className={css.label}>{t("product.seller")}:</span>
        <span className={css.value}>{store?.brand_name}</span>
      </p>
    </div>
  );
};

export default ProductSeller;
