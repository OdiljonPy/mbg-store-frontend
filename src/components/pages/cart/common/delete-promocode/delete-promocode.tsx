import css from "@/components/pages/cart/common/delete-promocode/delete-promocode.module.css";
import DoneSVG from "@/components/pages/cart/delivery/total-sum/doneSVG";
import DeleteSVG from "@/components/pages/cart/delivery/total-sum/deleteSVG";
import { deletePromoCode } from "@/slices/basket/basketSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useTranslations } from "next-intl";

interface props {
  promo_code?: string;
}

const DeletePromoCode = ({ promo_code = "NEW10" }: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={css.totalDelete}>
      <div className={css.flex}>
        <DoneSVG />
        <span className={css.promocode}>
          {promo_code} <span className={css.black_text}>{t("cart.use")}</span>
        </span>
      </div>
      <DeleteSVG onClick={() => dispatch(deletePromoCode())} />
    </div>
  );
};

export default DeletePromoCode;
