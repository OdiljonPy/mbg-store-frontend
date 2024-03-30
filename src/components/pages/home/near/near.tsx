import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import css from "@/components/pages/home/sales/sales.module.css";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import Product from "@/components/shared/product/product";
import { productClose } from "@/constants/product/product";
import { useSlider } from "@/hooks/use-slider";
import { useEffect, useState } from "react";
import { cn } from "../../../../utils/cn";
import AddressFormModal from "./address-form-modal/address-form-modal";
import nearCss from "./near.module.css";

interface props {}

const Near = (props: props) => {
	const { sliderRef, loaded, onNext, onPrev, currentSlide } = useSlider();
	const [address, setAddress] = useState<string | null>("");

	useEffect(() => {
		setAddress(localStorage.getItem("address") || null);
	}, []);

	return (
		<section className={css.sales}>
			<div className='container'>
				<HeadingLine
					heading={{
						title: "products.near",
						count: 978,
					}}
				/>
				<div className={cn(css.wrapperOuter, nearCss.wrapper)}>
					{!address && (
						<div className={nearCss.card_wrapper}>
							<div className={nearCss.card}>
								<p className={nearCss.card_text}>
									Укажите адрес, чтобы видеть товары
									поблизости
								</p>
								<AddressFormModal />
							</div>
						</div>
					)}
					{!!address && (
						<>
							<ProductSwiperArrow
								onClick={onPrev}
								isDisabled={currentSlide === 0}
							/>
							<ProductSwiperArrow
								onClick={onNext}
								isNext
							/>
						</>
					)}

					<div
						ref={sliderRef}
						className={`keen-slider ${css.wrapper} ${
							loaded ? css.show : ""
						}`}
					>
						{productClose.map((product) => (
							<div
								className={`keen-slider__slide`}
								key={product.id}
							>
								<Product product={product} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Near;
