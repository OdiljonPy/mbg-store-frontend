import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import css from "@/components/pages/home/sales/sales.module.css";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import Product from "@/components/shared/product/product";
import { useSlider } from "@/hooks/use-slider";
import { fetchProductBestSeller } from "@/slices/product/productBestSellerSlices";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

interface props {}

const Top = (props: props) => {
	const isRef = useRef(false);
	const { sliderRef, loaded, onNext, onPrev, currentSlide } = useSlider();
	const { data, loading } = useSelector(
		(state: RootState) => state.product_bestseller
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (!isRef.current) {
			dispatch(fetchProductBestSeller());
		}

		return () => {
			isRef.current = true;
		};
	}, [dispatch]);

	if (data.content?.length === 0 && !loading) return;

	return (
		<section className={css.sales}>
			<div className={"container"}>
				<HeadingLine
					heading={{
						title: "products.top",
						count: data?.totalElements,
						link: "products?sort=popular",
					}}
				/>
				{loading ? (
					<Skeleton
						count={4}
						containerClassName={css.skeleton_cointainer}
						className={css.skeleton}
					/>
				) : (
					<div className={css.wrapperOuter}>
						<ProductSwiperArrow
							onClick={onPrev}
							isDisabled={currentSlide === 0}
						/>
						<ProductSwiperArrow onClick={onNext} isNext />
						<div
							ref={sliderRef}
							className={`keen-slider ${css.wrapper} ${
								loaded ? css.show : ""
							}`}
						>
							{data?.content?.map((product: any) => {
								return (
									<div
										className={`keen-slider__slide`}
										key={product.id}
									>
										<Product product={product} />
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Top;
