import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import { IOrderItem } from "@/data-types/order/order";
import Link from "next/link";
import css from "./products-slider.module.css";

interface Props {
	orderItems: IOrderItem[];
}

function ProductsSlider({ orderItems }: Props) {
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
				{orderItems.map((item, index) => (
					<Link
						href={`/product/${item.product.id}`}
						key={index}
						className={[css.product, "keen-slider__slide"].join(
							" "
						)}
					>
						<Image
							className={css.product_image}
							width={100}
							height={100}
							src={item.product.images?.[0].image}
							alt='product'
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ProductsSlider;
