import star from "@/../public/images/icons/star.svg";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { priceFormatter } from "@/utils/price-formatter/price-formatter";
import { useTranslations } from "next-intl";
import css from "./seller.module.css";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { cn } from "@/utils/cn";
import logo from "public/images/icons/map.svg";

interface props {
  store?: IProductInner["store"];
  className?: string;
}

const Seller = ({ store, className }: props) => {
  const t = useTranslations();
  return (
    <div className={cn(css.wrapper, className)}>
      <p className={css.seller}>
        <p className={css.label}>{t("product.seller")}:</p>
        <div className={css.value}>
          {store?.brand_name}
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
        <div className={css.location}>
          <a
            href={`https://www.google.com/maps/@${store?.latitude},${store?.longitude}z?entry=ttu`}
            target="_blank"
          >
            <ResponsiveImage src={logo} alt="Store location" />
          </a>
        </div>
      </p>
    </div>
  );
};

export default Seller;
