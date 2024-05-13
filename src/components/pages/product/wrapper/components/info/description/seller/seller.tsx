import star from "@/../public/images/icons/star.svg";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import css from "./seller.module.css";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { cn } from "@/utils/cn";

interface props {
  store?: IProductInner["store"];
  className?: string;
}

const Seller = ({ store, className }: props) => {
  const t = useTranslations();
  return (
    <div className={cn(css.wrapper, className)}>
      <p className={css.seller}>
        <span className={css.label}>{t("product.seller")}:</span>
        <span className={css.value}>{store?.brand_name}</span>
      </p>
      <div className={css.tooltip}>
        <div className={css.tooltip_arrow} />
        <div className={css.tooltip_content}>
          <span className={css.img}>
            <ResponsiveImage src={star} alt={"rating"} />
          </span>
          <div className={css.text}>
            {store?.rating} ({priceFormatter(store?.rating_count || 1)}{" "}
            {t("product.rates").toLowerCase()})
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
