import React from "react";
import css from "./slider-item.module.css";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import partner from "@/../public/images/partners/mock.svg";
import { IPartner } from "@/data-types/base/partner";
interface Props {
  partner: IPartner;
}

const SliderItem = ({ partner }: Props) => {
  return (
    <div className={`${css.img} keen-slider__slide`}>
      <ResponsiveImage
        src={partner?.logo}
        alt={partner?.partner_name}
        objectFit={"cover"}
        isStretch
      />
    </div>
  );
};

export default SliderItem;
