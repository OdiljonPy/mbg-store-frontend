import HeroSwiperDots from "@/components/pages/home/hero/components/hero-swiper/hero-swiper-dots/hero-swiper-dots";
import HeroSwiperItem from "@/components/pages/home/hero/components/hero-swiper/hero-swiper-item/hero-swiper-item";
import SwiperArrow from "@/components/shared/swiper-arrow/swiper-arrow";
import { RootState } from "@/store";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import css from "./hero-swiper.module.css";

const HeroSwiper = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		breakpoints: {
			"(min-width: 320px)": {
				slides: {
					origin: "center",
					perView: 1,
					spacing: 15,
				},
			},
			"(min-width: 575px)": {
				slides: {
					origin: "auto",
					perView: 1,
					spacing: 15,
				},
			},
		},

		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		},
	});

	const { banners, loading, error } = useSelector(
		(state: RootState) => state.banner
	);

	if (loading) return <Skeleton className={css.skeleton} />;

	if (error) return null;

	if (!banners.length) return null;

	const onChangeSlide = (index: number) => {
		instanceRef.current?.moveToIdx(index);
	};

	const onPrevSlide = () => {
		instanceRef.current?.prev();
	};
	const onNextSlide = () => {
		instanceRef.current?.next();
	};

	const slides: number[] =
		instanceRef.current?.track.details?.slides.map(({ abs }) => abs) ?? [];

	return (
		<>
			<div className={css.wrapper}>
				{banners.length > 1 && <SwiperArrow onClick={onPrevSlide} />}
				{banners.length > 1 && (
					<SwiperArrow onClick={onNextSlide} isNext={true} />
				)}
				<div
					className={`${css.swiper} ${
						loaded ? css.show : ""
					} keen-slider`}
					ref={sliderRef}
				>
					{banners.map((banner) => (
						<HeroSwiperItem key={banner.link} banner={banner} />
					))}
				</div>
			</div>
			{banners.length > 1 && (
				<HeroSwiperDots
					slides={slides}
					onChangeSlide={onChangeSlide}
					current={currentSlide}
				/>
			)}
		</>
	);
};

export default HeroSwiper;
