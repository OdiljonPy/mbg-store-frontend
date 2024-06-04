import { StaticImageData } from "next/image";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

import css from "@/components/pages/product/wrapper/components/feedbacks/list/feedback/feedback.module.css";
import { formatDate } from "@/utils/format-date/format-date";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import star from "../../../../../../../../../../public/images/icons/star.svg";
import React, { useEffect, useState } from "react";
import { IComments } from "@/data-types/products/common";

interface props {
  feedback: IComments;
}

interface ILightBoxImages {
  src?: string | StaticImageData;
  alt: string | number;
}
const Question = ({ feedback }: props) => {
  const { name, rating, comment, images, created_at } = feedback;
  const [isOpen, setIsOpen] = useState(false);
  const [lightBoxImages, setLightBoxImages] = useState<ILightBoxImages[]>([]);

  useEffect(() => {
    if (images?.length) {
      const image: ILightBoxImages[] = images.map((image) => {
        return {
          src: image?.image,
          alt: image?.id,
        };
      });

      setLightBoxImages(image);
    }
  }, [feedback]);
  return (
    <div>
      <div className={css.header}>
        <h3 className={css.name}>{!(name === "null") ? name : ""}</h3>
        <div className={css.info}>
          <p className={css.date}>{formatDate(created_at)}</p>
          <p className={css.point}>
            <span className={css.star}>
              <ResponsiveImage src={star} alt={name} />
            </span>
            <span className={css.count}>{rating}</span>
          </p>
        </div>
      </div>
      <div className={css.body}>
        <p className={css.message}>{comment} </p>
        {images?.length ? (
          <div className={css.images}>
            {images?.map((item) => (
              <div
                key={item?.id}
                className={css.img}
                onClick={() => setIsOpen(true)}
              >
                <ResponsiveImage
                  src={item?.image || "/images/products/not-available.png"}
                  alt={""}
                />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <SlideshowLightbox
        backgroundColor={"rgba(0,0,0,0.6)"}
        images={lightBoxImages}
        showThumbnails={true}
        iconColor="white"
        open={isOpen}
        lightboxIdentifier="lbox1"
        onClose={() => {
          setIsOpen(false);
        }}
      ></SlideshowLightbox>
    </div>
  );
};

export default Question;
