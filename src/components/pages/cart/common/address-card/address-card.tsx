import css from "@/components/pages/cart/common/address-card/address-card.module.css";
import StoreSVG from "@/components/pages/cart/common/address-card/components/icon/StoreSVG";
import ClockSVG from "@/components/pages/cart/common/address-card/components/icon/ClockSVG";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
import { IStore } from "@/data-types/products/common";
import dayjs from "dayjs";
import Info from "@/components/shared/info/info";
import { useTranslations } from "next-intl";
interface props {
  type: "delivery" | "pick_up";
  store: IStore;
  create_at?: string;
}
const AddressCard = ({ type, store, create_at }: props) => {
  const t = useTranslations();
  const createdTime = new Date(create_at ? create_at : "");
  const availableTime = createdTime.setHours(createdTime.getHours() + 4);
  return (
    <div className={css.cart}>
      <div className={css.info}>
        {type == "pick_up" ? <StoreSVG /> : ""}
        <div>
          <p className={css.title}>
            {store?.brand_name}{" "}
            {type == "delivery" ? (
              <span className={css.badge}>основной</span>
            ) : (
              ""
            )}
          </p>
          <p className={css.address}>{store?.store_location_name} </p>
          {type == "pick_up" ? (
            <div className={css.time}>
              <ClockSVG /> {store?.working_time}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/*<WarningText>*/}
      {/*  <p>*/}
      {/*    Примерная дата доставки: <span>18 декабря 2023 г.</span>{" "}*/}
      {/*  </p>*/}
      {/*</WarningText>*/}
      {type == "pick_up" ? (
        <div className={css.notice}>
          <Info>
            {t("orders.pickup.available_for_pickup")}{" "}
            <b>{dayjs(availableTime).format("H:mm, D MMMM YYYY г.")}</b>
          </Info>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddressCard;
