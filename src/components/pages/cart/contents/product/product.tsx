import Actions from "@/components/pages/cart/contents/product/actions/actions";
import Description from "@/components/pages/cart/contents/product/description/description";
import Price from "@/components/pages/cart/contents/product/description/price/price";
import Button from "@/components/shared/button";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { IProduct } from "@/data-types/products/common";
import { removeFromNotAvailable } from "@/slices/basket/basketSlice";
import { AppDispatch } from "@/store";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import css from "./product.module.css";

interface props {
	product: IProduct;
	isAvailable?: boolean;
}

const Product = ({ product, isAvailable = false }: props) => {
	const t = useTranslations();

	const { push } = useRouter();

	const dispatch = useDispatch<AppDispatch>();
	const { images, name, id } = product;
	const [count, setCount] = useState<number>(
		product.count ? product.count : 0
	);
	const actionButton = (id: number, name: string) => {
		dispatch(removeFromNotAvailable(id));
		push(`/products?search=${name}&sort=popular`).then((r) => true);
	};

	useEffect(() => {
		setCount(product?.count ? product?.count : count);
	}, [product]);

	return (
		<div className={css.product_cart}>
			<div className={css.product}>
				<Link href={`/products/${id}`} className={css.img}>
					<ResponsiveImage
						src={
							images[0]?.image ||
							"/images/products/not-available.png"
						}
						alt={name}
					/>
				</Link>
				<div className={css.info}>
					<Description count={count} product={product} />
					<div className={css.desktop_action}>
						<Actions
							isAvailable={isAvailable}
							count={count}
							setCount={setCount}
							product={product}
						/>
					</div>
					<div className={css.price_mobile}>
						<Price
							discount={product.discount}
							discount_price={product.discount_price}
							price={product.price}
							count={count}
						/>
					</div>
				</div>
			</div>
			<div className={css.mobile_action}>
				<Actions
					isAvailable={isAvailable}
					count={count}
					setCount={setCount}
					product={product}
				/>
			</div>
			{isAvailable && (
				<div className={css.isAvailable}>
					<div className={css.available_action}>
						<Button
							className={css.available_btn}
							variant={"light_green"}
							onClick={() => actionButton(id, name)}
						>
							{t("products.some_product")}
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
