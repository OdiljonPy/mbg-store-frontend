import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import css from "@/components/pages/home/sales/sales.module.css";
import ProductSwiperArrow from "@/components/shared/product-swiper-arrow/product-swiper-arrow";
import Product from "@/components/shared/product/product";
import ProductSkeleton from "@/components/shared/product/product-skeleton/product-skeleton";
import { useSlider } from "@/hooks/use-slider";
import { updateFavourites } from "@/slices/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Favourites = () => {
	const { onPrev, onNext, currentSlide, loaded, sliderRef, instanceRef } =
		useSlider();

	const { favourites, loading } = useSelector(
		(state: RootState) => state.favorites
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const token = localStorage.getItem("access_token");
		if (token) {
			dispatch(updateFavourites());
		}
	}, [dispatch]);

	useEffect(() => {
		const slider = instanceRef.current;
		return () => {
			slider?.update();
		};
	}, [instanceRef, favourites]);

	if (loading)
		return (
			<div className={css.skeleton_container}>
				{Array.from({ length: 4 }).map((_, i) => (
					<ProductSkeleton key={i} />
				))}
			</div>
		);

	return (
		<section className={css.sales}>
			<div className={"container"}>
				<HeadingLine
					small
					heading={{
						title: "header.favourites",
					}}
				/>
				<div className={css.wrapperOuter}>
					<ProductSwiperArrow
						onClick={onPrev}
						isDisabled={currentSlide === 0}
					/>
					<ProductSwiperArrow
						onClick={onNext}
						isNext
					/>
					<div
						ref={sliderRef}
						className={`keen-slider ${css.wrapper} ${loaded ? css.show : ""}`}
					>
						{favourites.map((product) => (
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

export default Favourites;
