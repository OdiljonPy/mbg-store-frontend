import Image from "next/image";
import css from "./hero-swiper-item.module.css";
import Info from "./info/info";
import MobileApp from "./mobile-app/mobile-app";

interface Props {
	
}

const HeroSwiperItem = () => {
	return (
		<div className={`keen-slider__slide ${css.swiperItem}`}>
			<Image
				className={css.banner_image}
				src={"/images/banner/banner_img.png"}
				width={1200}
				height={600}
				alt={"banner"}
			/>
			<Info />
			<MobileApp />
		</div>
	);
};

export default HeroSwiperItem;
