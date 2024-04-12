import HeroSwiper from "@/components/pages/home/hero/components/hero-swiper/hero-swiper";
import { fetchBanners } from "@/slices/base/banner/bannerSlice";
import { AppDispatch } from "@/store";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./hero.module.css";

const Hero = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchBanners());
	}, [dispatch]);

	return (
		<section className={css.hero}>
			<div className={"container"}>
				<HeroSwiper />
			</div>
		</section>
	);
};

export default Hero;
