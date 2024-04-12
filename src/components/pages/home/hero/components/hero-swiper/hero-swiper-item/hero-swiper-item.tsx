import { IBanner } from "@/data-types/base/banner";
import Image from "next/image";
import Link from "next/link";
import css from "./hero-swiper-item.module.css";

interface Props {
	banner: IBanner;
}

const HeroSwiperItem = ({ banner }: Props) => {
	return (
		<div className={`keen-slider__slide ${css.swiperItem}`}>
			<Link href={banner.link} target="_blank">
				<Image
					className={css.banner_image}
					src={banner.image}
					width={1200}
					height={400}
					alt={"banner"}
				/>
			</Link>
		</div>
	);
};

export default HeroSwiperItem;
