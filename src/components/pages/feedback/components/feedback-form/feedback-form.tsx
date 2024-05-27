import React, { ChangeEvent, useState } from "react";
import css from "./feedback-form.module.css";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { IFeedbackForm } from "@/components/pages/feedback/data-types/feedback";
import Title from "@/components/pages/product/wrapper/components/info/description/title/title";
import Seller from "@/components/pages/product/wrapper/components/info/description/seller/seller";
import { useTranslations } from "next-intl";
import Rates from "@/components/pages/feedback/components/feedback-form/rates/rates";
import inputCss from "@/styles/input.module.css";
import FormError from "@/components/shared/form-error/form-error";
import CustomSwitch from "@/components/shared/custom-switch/custom-switch";
import { raleway } from "@/constants/fonts/fonts";
import ImageUploader from "@/components/pages/feedback/components/feedback-form/image-uploader/image-uploader";
import uploaderCss from "./image-uploader/image-uploader.module.css";
import Image from "@/components/pages/feedback/components/feedback-form/image/image";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import SuccessfulModal from "@/components/pages/feedback/components/successful-modal/successful-modal";

import Skeleton from "react-loading-skeleton";
import { toNumber } from "@vue/shared";
import API from "@/utils/axios/axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { openLoginModal } from "@/slices/auth/login";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import Button from "@/components/shared/button";

interface props {
  info: IProductInner;
  loading: boolean;
}

const FeedbackForm = ({ info, loading }: props) => {
  const t = useTranslations();
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState<boolean>(false);
  const [submitLoad, setSubmitLoad] = useState(false);
  const router = useRouter();

  const { addToast } = useToasts();
  const {
    resetField,
    clearErrors,
    handleSubmit,
    watch,
    register,
    formState: { errors },
    control,
    setValue,
  } = useForm<IFeedbackForm>({
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray<IFeedbackForm>({
    control,
    name: "images",
  });

  const anonymus: boolean = watch("anonymus");
  const onUploadImage = (image: File) => {
    append({ file: image });
  };
  const onSendFeedback = async (values: IFeedbackForm) => {
    const formImages = values.images.map((images) => images.file);
    const data: any = new FormData();
    data.append("product_id", info?.id);
    data.append("rating", toNumber(values.rate));
    data.append("comment", values.message);
    for (let i = 0; i < formImages.length; i++) {
      data.append("images", formImages[i]);
    }
    if (!values.name) {
      data.append("name", null);
    } else {
      data.append("name", values.name);
    }

    const token = localStorage.getItem("access_token");
    if (token) {
      try {
        setSubmitLoad(true);
        const res = await API.post("/store/comment/", data);
        if (res.data.ok) {
          setOpen(true);
          resetField("name");
          resetField("message");
          resetField("rate");
          remove([...formImages.map((img, idx) => idx)]);
        }
      } catch (err) {
        // @ts-ignore
        addToast(err?.message, {
          appearance: "error",
          autoDismiss: true,
        });
      } finally {
        setSubmitLoad(false);
      }
    } else {
      dispatch(openLoginModal());
    }
  };

  // for modal

  const closeModal = () => {
    setOpen(false);
    router.back();
  };

  return (
    <div className={css.form}>
      <form onSubmit={handleSubmit(onSendFeedback)}>
        <div className={css.title}>
          {loading ? (
            <Skeleton count={1} height={"30px"} width={"350px"} />
          ) : (
            <>
              <Title title={info?.name} />
              {info?.available ? (
                <p className={css.weight}>{info?.amount_type}</p>
              ) : (
                ""
              )}
            </>
          )}
        </div>
        {loading ? (
          <Skeleton count={1} height={"25px"} width={"280px"} />
        ) : (
          <Seller store={info?.store} />
        )}
        <Rates
          register={register}
          watch={watch}
          errors={errors.rate?.message}
        />
        <div className={css.flex}>
          <div className={css.field}>
            <label className={css.label}>{t("feedback.name")}</label>
            <input
              {...register("name", {
                required: {
                  value: !anonymus,
                  message: t("errors.required"),
                },
              })}
              disabled={anonymus}
              placeholder={t("feedback.namePlaceholder")}
              className={`${inputCss.input} ${anonymus ? inputCss.disabled : ""} ${raleway.className} ${errors.name?.message ? inputCss.error : ""} `}
            />
            <FormError error={errors.name?.message} />
          </div>

          <Controller
            control={control}
            rules={{
              required: {
                value: false,
                message: t("errors.required"),
              },
              onChange: (e: { target: { value: boolean } }) => {
                setValue("anonymus", e.target.value);
                resetField("name");
                clearErrors("name");
              },
            }}
            render={({ field: { onChange, value } }) => (
              <div className={css.switch}>
                <label className={css.text}>{t("feedback.anonymus")}</label>
                <CustomSwitch onChange={onChange} checked={value} />
              </div>
            )}
            name={"anonymus"}
          />
        </div>
        <div className={css.textarea}>
          <label className={css.label}>{t("feedback.message")}</label>
          <textarea
            maxLength={300}
            {...register("message", {
              required: {
                value: true,
                message: t("errors.required"),
              },
              maxLength: 300,
            })}
            placeholder={t("feedback.messagePlaceholder")}
            className={`${inputCss.input} ${raleway.className} ${inputCss.textarea} ${errors.name?.message ? inputCss.error : ""} `}
          />
          <FormError error={errors.name?.message} />
        </div>
        <label className={` ${uploaderCss.label}`}>
          {t("feedback.photo")}{" "}
          <span className={uploaderCss.text}>
            ({t("feedback.photoDetails")})
          </span>
        </label>
        <div className={css.images}>
          <ImageUploader
            isHide={fields.length >= 4}
            onUploadImage={onUploadImage}
          />
          {fields?.map((image, i) => (
            <Image
              index={i}
              remove={remove}
              image={image.file}
              key={image.id}
            />
          ))}
        </div>
        <div className={css.actions}>
          <Button loading={submitLoad}>{t("feedback.send")}</Button>
        </div>
      </form>
      <SuccessfulModal open={open} onClose={closeModal} />
    </div>
  );
};

export default FeedbackForm;
