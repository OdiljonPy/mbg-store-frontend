import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import { fetchNearestProducts } from "@/slices/product/productLocationSlice";
import { AppDispatch, RootState } from "@/store";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./near-product-list";

import NearDialog from "./near-dialog";
import css from "./near.module.css";

const Near = () => {
	const { main_address } = useSelector((state: RootState) => state.address);

	const { data } = useSelector((state: RootState) => state.product_near);

	const dispatch = useDispatch<AppDispatch>();

	const [isAddress, setIsAddress] = useState(false);

	useEffect(() => {
		if (main_address.address) {
			setIsAddress(true);
			dispatch(
				fetchNearestProducts({
					latitude: main_address.latitude,
					longitude: main_address.longitude,
				})
			);
		}
	}, [dispatch, main_address, main_address.address]);

	// if (products.content.length === 0 && !loading) return;

	return (
		<section className={css.near}>
			<div className='container'>
				<HeadingLine
					heading={{
						title: "products.near",
						count: data.content?.length,
					}}
				/>
				<div className={cn(css.wrapperOuter, css.wrapper)}>
					{isAddress ? <ProductList /> : <NearDialog />}
				</div>
			</div>
		</section>
	);
};

export default Near;
