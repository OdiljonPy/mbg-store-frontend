import React, { useEffect, useState } from "react";
import css from "./gallery.module.css";
import { useKeenSlider } from "keen-slider/react";
import { ThumbnailPlugin } from "@/components/pages/product/wrapper/plugins/thumbnail/thumbnail";
import Thumbnail from "@/components/pages/product/wrapper/components/info/gallery/thumbnail/thumbnail";
import Preview from "@/components/pages/product/wrapper/components/info/gallery/preview/preview";
import "keen-slider/keen-slider.min.css";
import NavigationBtn from "@/components/pages/product/wrapper/components/info/gallery/navigation-btn/navigation-btn";
import Dots from "@/components/pages/product/wrapper/components/info/gallery/dots/dots";
import Skeleton from "react-loading-skeleton";
import { IProductInner } from "@/data-types/products/product-inner/product-inner";

interface props {
  gallery: IProductInner;
  loading: boolean;
}
const Gallery = ({ gallery, loading }: props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 12,
    },
    created: () => setLoaded(true),
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      vertical: true,
      slides: {
        perView: 3,
        spacing: 12,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );

  const onPrev = () => {
    if (gallery?.images?.length > 2) instanceRef?.current?.prev();
  };

  const onNext = () => {
    if (gallery?.images?.length > 2) instanceRef?.current?.next();
  };

  const onChangeSlide = (i: number) => instanceRef.current?.moveToIdx(i);

  useEffect(() => {
    const slider = instanceRef.current;
    return () => {
      slider?.update();
    };
  }, [instanceRef, thumbnailRef, sliderRef]);

  return (
    <>
      {loading ? (
        <Skeleton
          count={1}
          className={css.skeleton}
          containerClassName={css.skeleton_container}
        />
      ) : (
        <div className={`${css.wrapper} ${loaded ? css.show : ""}`}>
          <Preview ref={sliderRef} gallery={gallery} loading={loading} />
          {
            <div className={css.thumbnail}>
              <NavigationBtn onClick={onPrev} />
              <Thumbnail
                currentSlide={currentSlide}
                ref={thumbnailRef}
                gallery={gallery}
                loading={loading}
              />
              <NavigationBtn onClick={onNext} isNext />
            </div>
          }
          {gallery?.images?.length > 1 ? (
            <Dots
              onChangeSlide={onChangeSlide}
              currentSlide={currentSlide}
              items={gallery?.images?.length}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
