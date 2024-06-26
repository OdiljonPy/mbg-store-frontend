import Image from "next/image";
import React, { useEffect } from "react";

import Button from "@/components/shared/button";
import { IOrderItem } from "@/data-types/order/order";
import Link from "next/link";
import { useReorderProducts } from "../../../../hooks/use-reorder-products";
import css from "./products.module.css";

interface Props {
	orderItems: IOrderItem[];
}

function Products({ orderItems }: Props) {
	const [products, setProducts] = React.useState<IOrderItem[]>([]);

	useEffect(() => {
		const updateProducts = () => {
			if (window.innerWidth < 575) {
				setProducts(orderItems);
			} else if (window.innerWidth < 767) {
				setProducts(orderItems.slice(0, 3));
			} else if (window.innerWidth < 1199) {
				setProducts(orderItems.slice(0, 4));
			} else {
				setProducts(orderItems.slice(0, 6));
			}
		};

		updateProducts();

		window.addEventListener("resize", updateProducts);

		return () => window.removeEventListener("resize", updateProducts);
	}, [orderItems]);

	const { reorderItems } = useReorderProducts(orderItems);

	return (
		<div className={css.grid_wrapper}>
			<div className={css.products}>
				{products.map((item) => (
					<Link
						href={`/products/${item.product.id}`}
						key={item.id}
						className={css.product}
					>
						<Image
							className={css.product_image}
							width={100}
							height={100}
							src={item.product?.images?.[0]?.image || '/images/products/not-available.png'}
							alt='product'
						/>
					</Link>
				))}
			</div>
			<div>
				{products.length > products.length && (
					<div className={css.more}>
						<span>+{products.length - products.length}</span>
					</div>
				)}
			</div>
			<div className={css.btn_wrapper}>
				<Button iconOnly rounded onClick={reorderItems}>
					<svg
						width='28'
						height='28'
						viewBox='0 0 28 28'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M24.2966 6.43891C24.2144 6.34062 24.1117 6.26156 23.9957 6.20732C23.8796 6.15308 23.7531 6.12498 23.625 6.125H5.98063L5.44578 3.18719C5.37252 2.78396 5.16007 2.41923 4.84546 2.15659C4.53085 1.89395 4.13405 1.75006 3.72422 1.75H1.75C1.51794 1.75 1.29538 1.84219 1.13128 2.00628C0.967187 2.17038 0.875 2.39294 0.875 2.625C0.875 2.85706 0.967187 3.07962 1.13128 3.24372C1.29538 3.40781 1.51794 3.5 1.75 3.5H3.71875L6.51438 18.8442C6.59673 19.2993 6.79783 19.7245 7.09734 20.0769C6.68396 20.463 6.38559 20.956 6.23531 21.5014C6.08504 22.0467 6.08874 22.623 6.246 23.1664C6.40326 23.7097 6.70794 24.1989 7.12625 24.5797C7.54456 24.9605 8.06015 25.218 8.61586 25.3236C9.17157 25.4292 9.74568 25.3789 10.2745 25.1782C10.8034 24.9774 11.2663 24.6341 11.612 24.1864C11.9576 23.7386 12.1725 23.2039 12.2328 22.6414C12.2931 22.079 12.1965 21.5109 11.9536 21H16.9214C16.7257 21.4098 16.6244 21.8583 16.625 22.3125C16.625 22.9182 16.8046 23.5103 17.1411 24.0139C17.4776 24.5176 17.9559 24.9101 18.5155 25.1419C19.0751 25.3737 19.6909 25.4343 20.285 25.3162C20.879 25.198 21.4247 24.9063 21.853 24.478C22.2813 24.0497 22.573 23.504 22.6912 22.91C22.8093 22.3159 22.7487 21.7001 22.5169 21.1405C22.2851 20.5809 21.8926 20.1026 21.3889 19.7661C20.8853 19.4296 20.2932 19.25 19.6875 19.25H9.09672C8.89181 19.25 8.6934 19.178 8.5361 19.0467C8.37879 18.9154 8.27257 18.733 8.23594 18.5314L7.88922 16.625H20.5767C21.1915 16.6249 21.7867 16.4091 22.2586 16.0151C22.7305 15.6212 23.0492 15.0741 23.1591 14.4692L24.4891 7.15641C24.5116 7.03001 24.506 6.90021 24.4727 6.77621C24.4395 6.65221 24.3793 6.53706 24.2966 6.43891ZM10.5 22.3125C10.5 22.5721 10.423 22.8258 10.2788 23.0417C10.1346 23.2575 9.9296 23.4258 9.68977 23.5251C9.44994 23.6244 9.18604 23.6504 8.93144 23.5998C8.67684 23.5491 8.44298 23.4241 8.25942 23.2406C8.07587 23.057 7.95086 22.8232 7.90022 22.5686C7.84958 22.314 7.87557 22.0501 7.97491 21.8102C8.07425 21.5704 8.24248 21.3654 8.45831 21.2212C8.67415 21.077 8.92791 21 9.1875 21C9.5356 21 9.86944 21.1383 10.1156 21.3844C10.3617 21.6306 10.5 21.9644 10.5 22.3125ZM21 22.3125C21 22.5721 20.923 22.8258 20.7788 23.0417C20.6346 23.2575 20.4296 23.4258 20.1898 23.5251C19.9499 23.6244 19.686 23.6504 19.4314 23.5998C19.1768 23.5491 18.943 23.4241 18.7594 23.2406C18.5759 23.057 18.4509 22.8232 18.4002 22.5686C18.3496 22.314 18.3756 22.0501 18.4749 21.8102C18.5742 21.5704 18.7425 21.3654 18.9583 21.2212C19.1742 21.077 19.4279 21 19.6875 21C20.0356 21 20.3694 21.1383 20.6156 21.3844C20.8617 21.6306 21 21.9644 21 22.3125ZM21.4375 14.1564C21.4008 14.3586 21.2941 14.5414 21.1361 14.6728C20.9781 14.8041 20.7789 14.8757 20.5734 14.875H7.57094L6.29891 7.875H22.5761L21.4375 14.1564Z'
							fill='white'
						/>
					</svg>
				</Button>
			</div>
		</div>
	);
}

export default Products;
