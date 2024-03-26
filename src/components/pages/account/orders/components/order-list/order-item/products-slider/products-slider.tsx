import Image from "next/image";
import React from "react";
import { images } from "../data";
import { useKeenSlider } from "keen-slider/react";

import css from "./products-slider.module.css";

function ProductsSlider() {
	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		slides: {
			perView: 3.4,
			spacing: 8,
		},
	});

	return (
		<div className={css.mobile_products}>
			<div
				ref={sliderRef}
				className='keen-slider'
			>
				{images.map((item) => (
					<div
						key={item.src}
						className={[css.product, "keen-slider__slide"].join(
							" "
						)}
					>
						<Image
							className={css.product_image}
							src={item}
							alt='product'
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductsSlider;
