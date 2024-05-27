import css from "./address.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ShippingCard from "@/components/pages/cart/common/address-card/shipping-card";
import { IDeliveryAddress } from "@/data-types/address/delivery-address";
import { useTranslations } from "next-intl";

interface props {
  address: IDeliveryAddress | null;
}
const Address = ({ address }: props) => {
  const t = useTranslations("cart.delivery");
  return (
    <div className={css.address}>
      <p className={css.title}>{t("delivery_to")}</p>
      <div className={css.active_address}>
        {address ? (
          <ShippingCard
            className={css.active_address}
            shipping={address}
            key={address?.id}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Address;
