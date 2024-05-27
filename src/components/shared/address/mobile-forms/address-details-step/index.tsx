import Checkbox from "@/components/shared/checkbox";
import ErrorMessage from "@/components/shared/error-message";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import { UseFormReturn } from "react-hook-form";
import { IAddressForm } from "../../types";

import { YMapsApi } from "@pbe/react-yandex-maps/typings/util/typing";
import { useTranslations } from "next-intl";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import AddressMap from "../../address-map/address-map";
import css from "./address-details-step.module.css";

interface Props {
  form: UseFormReturn<IAddressForm>;
  mapConstructor?: YMapsApi;
  setMapConstructor: Dispatch<SetStateAction<YMapsApi | undefined>>;
  mapRef: MutableRefObject<ymaps.Map | undefined>;
}

function AddressDetailsStep({
  form,
  mapConstructor,
  setMapConstructor,
  mapRef,
}: Props) {
  const t = useTranslations("address");
  return (
    <div className={css.body}>
      <div className={css.body_top}>
        <div>
          <Label required>{t("name")}</Label>
          <Input
            className={css.input}
            placeholder={t("enter_name")}
            {...form.register("address_name", {
              required: {
                value: true,
                message: t("required"),
              },
            })}
          />
          <ErrorMessage>
            {form.formState.errors.address_name?.message}
          </ErrorMessage>
        </div>
        <div className={css.form_row}>
          <div>
            <Label>{t("entrance")}</Label>
            <Input
              className={css.input}
              type="number"
              placeholder={t("entrance")}
              {...form.register("entrance")}
            />
          </div>
          <div>
            <Label>{t("floor")}</Label>
            <Input
              className={css.input}
              type="number"
              placeholder={t("floor")}
              {...form.register("floor")}
            />
          </div>
          <div>
            <Label>{t("apartment")}</Label>
            <Input
              className={css.input}
              type="number"
              placeholder={t("apartment")}
              {...form.register("apartment")}
            />
          </div>
        </div>
        <div className={css.checkbox_wrapper}>
          <Checkbox id="main_address" {...form.register("main_address")} />
          <Label htmlFor="main_address">{t("make_address")}</Label>
        </div>
      </div>
      <div className={css.body_bottom}>
        <div className={css.map_disable}></div>
        <AddressMap
          mapRef={mapRef}
          form={form}
          mapConstructor={mapConstructor}
          setMapConstructor={setMapConstructor}
        />
      </div>
    </div>
  );
}

export default AddressDetailsStep;
