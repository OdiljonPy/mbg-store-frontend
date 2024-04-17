import HeadingLine from "@/components/pages/home/heading-line/heading-line";
import { fetchNearestProducts } from "@/slices/product/productLocationSlice";
import { AppDispatch, RootState } from "@/store";
import { cn } from "@/utils/cn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./near-product-list";

import NearDialog from "./near-dialog";
import css from "./near.module.css";

const Near = () => {
	const { address_list } = useSelector((state: RootState) => state.address);

	const { data } = useSelector((state: RootState) => state.product_near);

	const dispatch = useDispatch<AppDispatch>();

	const isAddress = address_list.length > 0;

	useEffect(() => {
		const mainAddress = address_list.find((address) => address.is_default);

		if (isAddress && mainAddress) {
			dispatch(
				fetchNearestProducts({
					latitude: mainAddress.latitude,
					longitude: mainAddress.longitude,
				})
			);
		}
	}, [address_list, dispatch, isAddress]);

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
