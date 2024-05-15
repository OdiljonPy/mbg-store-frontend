import css from "@/components/pages/cart/common/address-card/address-card.module.css";
import { IShipping } from "@/data-types/shipping";
import { IDeliveryAddress } from "@/data-types/address/delivery-address";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/cn";
interface props {
  shipping: IDeliveryAddress | IShipping;
  className?: string;
}
const AddressCard = ({ shipping, className }: props) => {
  const t = useTranslations();
  return (
    <div className={cn(css.cart, className)}>
      <div className={css.info}>
        <div>
          <p className={css.title}>
            {shipping?.address_name}{" "}
            <span className={css.badge}>{t("orders.delivery.main")}</span>{" "}
          </p>
          <p className={css.address}>{shipping?.address} </p>
        </div>
      </div>
      {/*<WarningText><p>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p></WarningText>*/}
    </div>
  );
};

export default AddressCard;
