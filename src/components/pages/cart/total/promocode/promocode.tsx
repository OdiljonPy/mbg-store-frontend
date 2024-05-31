import css from "./promocode.module.css";
import { useForm } from "react-hook-form";
import { IPromocodeForm } from "@/components/pages/cart/total/data-types/promocode";
import { useTranslations } from "next-intl";
import inputCss from "@/styles/input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { promo_code } from "@/slices/basket/basketSlice";
import Button from "@/components/shared/button";
import FormError from "@/components/shared/form-error/form-error";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchPromoCode } from "@/slices/promo-code/promoCodeSlice";

interface props {}

const PromoCode = (props: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading } = useSelector(
    (state: RootState) => state.promo_code,
  );
  const [err, setErr] = useState(error);
  const [code, setCode] = useState("");

  const { handleSubmit, formState } = useForm<IPromocodeForm>();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
    if (e.target.value !== code) setErr(false);
  };

  const onAcceptPromo = (values: IPromocodeForm) => {
    dispatch(fetchPromoCode(code)).then((res) => {
      if (res.payload?.ok) {
        setCode("");
        dispatch(promo_code(res.payload));
      }
    });
  };

  useEffect(() => {
    setErr(error);
  }, [error]);

  return (
    <form onSubmit={handleSubmit(onAcceptPromo)} className={css.promocode}>
      <div className={css.inputWrapper}>
        <input
          value={code}
          onChange={handleInput}
          placeholder={t("cart.promo_code")}
          className={`${inputCss.input} ${err && code ? inputCss.error : ""}`}
        />

        {err && code && (
          <FormError
            error={t("cart.invalid_code")}
            style={{ margin: "2px", position: "absolute", fontSize: "14px" }}
          ></FormError>
        )}
      </div>
      <Button full type={"submit"} disabled={!code} loading={loading}>
        {!loading && t("cart.accept")}
      </Button>
    </form>
  );
};

export default PromoCode;
