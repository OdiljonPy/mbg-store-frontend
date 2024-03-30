import {
	EnumDeliveryType,
	EnumOrderStatusPickup,
	IOrder,
} from "@/data-types/order/order";

import dayjs from "dayjs";

import "keen-slider/keen-slider.min.css";

import {
	deliveryStatusMap,
	pickupStatusMap,
	receivingMethodMap,
} from "../../../constants/orders/status-map";

import Button from "@/components/shared/button";
import { EnumOrderStatusDelivery } from "@/data-types/order/order";
import Link from "next/link";
import Badge from "../../badge/badge";
import css from "./order-item.module.css";
import ProductsSlider from "./products-slider/products-slider";
import Products from "./products/products";

interface Props {
	order: IOrder;
}

function OrderItem({ order }: Props) {
	return (
		<div className={css.card}>
			<div className={css.header}>
				<div className={css.header_left}>
					<Link
						className={css.title_link}
						href={`/account/orders/${order.id}`}
					>
						<h2 className={css.title}>№ {order.id}</h2>
					</Link>
					<p className={css.date}>
						{dayjs(order.created_at).format("D MMMM YYYY г. H:mm")}
					</p>
				</div>
				<div className={css.status_box}>
					<div className={css.receiving_method}>
						{order.type === EnumDeliveryType.DELIVERY ? (
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M23.1956 10.9688L21.8831 7.6875C21.7718 7.40988 21.5796 7.17209 21.3316 7.00494C21.0835 6.83778 20.791 6.74897 20.4919 6.75H17.25V6C17.25 5.80109 17.171 5.61032 17.0303 5.46967C16.8897 5.32902 16.6989 5.25 16.5 5.25H2.25C1.85218 5.25 1.47064 5.40804 1.18934 5.68934C0.908035 5.97064 0.75 6.35218 0.75 6.75V17.25C0.75 17.6478 0.908035 18.0294 1.18934 18.3107C1.47064 18.592 1.85218 18.75 2.25 18.75H3.84375C4.00898 19.3953 4.38428 19.9673 4.91048 20.3757C5.43669 20.7842 6.08387 21.0059 6.75 21.0059C7.41613 21.0059 8.06331 20.7842 8.58952 20.3757C9.11573 19.9673 9.49102 19.3953 9.65625 18.75H14.3438C14.509 19.3953 14.8843 19.9673 15.4105 20.3757C15.9367 20.7842 16.5839 21.0059 17.25 21.0059C17.9161 21.0059 18.5633 20.7842 19.0895 20.3757C19.6157 19.9673 19.991 19.3953 20.1563 18.75H21.75C22.1478 18.75 22.5294 18.592 22.8107 18.3107C23.092 18.0294 23.25 17.6478 23.25 17.25V11.25C23.2503 11.1536 23.2318 11.0581 23.1956 10.9688ZM17.25 8.25H20.4919L21.3919 10.5H17.25V8.25ZM2.25 6.75H15.75V12.75H2.25V6.75ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45737 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.25 18.3978 8.09197 18.7794 7.81066 19.0607C7.52936 19.342 7.14783 19.5 6.75 19.5ZM14.3438 17.25H9.65625C9.49102 16.6047 9.11573 16.0327 8.58952 15.6243C8.06331 15.2158 7.41613 14.9941 6.75 14.9941C6.08387 14.9941 5.43669 15.2158 4.91048 15.6243C4.38428 16.0327 4.00898 16.6047 3.84375 17.25H2.25V14.25H15.75V15.4041C15.4051 15.6034 15.1032 15.8692 14.8619 16.1861C14.6205 16.5029 14.4444 16.8646 14.3438 17.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7507 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.75 18.3978 18.592 18.7794 18.3107 19.0607C18.0294 19.342 17.6478 19.5 17.25 19.5ZM21.75 17.25H20.1563C19.989 16.6063 19.613 16.0362 19.0871 15.629C18.5612 15.2218 17.9151 15.0006 17.25 15V12H21.75V17.25Z'
									fill='#232323'
								/>
							</svg>
						) : (
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M21.75 9C21.7504 8.93027 21.7409 8.86083 21.7219 8.79375L20.3766 4.0875C20.2861 3.77523 20.0971 3.50059 19.8378 3.30459C19.5784 3.10858 19.2626 3.00174 18.9375 3H5.0625C4.73741 3.00174 4.4216 3.10858 4.16223 3.30459C3.90287 3.50059 3.71386 3.77523 3.62344 4.0875L2.27906 8.79375C2.2597 8.86079 2.24991 8.93022 2.25 9V10.5C2.25 11.0822 2.38554 11.6563 2.6459 12.1771C2.90625 12.6978 3.28427 13.1507 3.75 13.5V19.5C3.75 19.8978 3.90804 20.2794 4.18934 20.5607C4.47064 20.842 4.85218 21 5.25 21H18.75C19.1478 21 19.5294 20.842 19.8107 20.5607C20.092 20.2794 20.25 19.8978 20.25 19.5V13.5C20.7157 13.1507 21.0937 12.6978 21.3541 12.1771C21.6145 11.6563 21.75 11.0822 21.75 10.5V9ZM5.0625 4.5H18.9375L20.0081 8.25H3.99469L5.0625 4.5ZM9.75 9.75H14.25V10.5C14.25 11.0967 14.0129 11.669 13.591 12.091C13.169 12.5129 12.5967 12.75 12 12.75C11.4033 12.75 10.831 12.5129 10.409 12.091C9.98705 11.669 9.75 11.0967 9.75 10.5V9.75ZM8.25 9.75V10.5C8.25 11.0967 8.01295 11.669 7.59099 12.091C7.16903 12.5129 6.59674 12.75 6 12.75C5.40326 12.75 4.83097 12.5129 4.40901 12.091C3.98705 11.669 3.75 11.0967 3.75 10.5V9.75H8.25ZM18.75 19.5H5.25V14.175C5.4969 14.2248 5.74813 14.2499 6 14.25C6.58217 14.25 7.15634 14.1145 7.67705 13.8541C8.19776 13.5937 8.6507 13.2157 9 12.75C9.3493 13.2157 9.80224 13.5937 10.3229 13.8541C10.8437 14.1145 11.4178 14.25 12 14.25C12.5822 14.25 13.1563 14.1145 13.6771 13.8541C14.1978 13.5937 14.6507 13.2157 15 12.75C15.3493 13.2157 15.8022 13.5937 16.3229 13.8541C16.8437 14.1145 17.4178 14.25 18 14.25C18.2519 14.2499 18.5031 14.2248 18.75 14.175V19.5ZM18 12.75C17.4033 12.75 16.831 12.5129 16.409 12.091C15.9871 11.669 15.75 11.0967 15.75 10.5V9.75H20.25V10.5C20.25 11.0967 20.0129 11.669 19.591 12.091C19.169 12.5129 18.5967 12.75 18 12.75Z'
									fill='#232323'
								/>
							</svg>
						)}
						{receivingMethodMap[order.type]}
					</div>
					{order.type === EnumDeliveryType.DELIVERY ? (
						<Badge status={EnumOrderStatusDelivery[order.status]}>
							{deliveryStatusMap[order.status]}
						</Badge>
					) : (
						<Badge status={EnumOrderStatusPickup[order.status]}>
							{pickupStatusMap[order.status]}
						</Badge>
					)}
				</div>
			</div>
			<div className={css.body}>
				<Products orderItems={order.order_items} />
				<ProductsSlider orderItems={order.order_items} />
			</div>
			<div className={css.footer}>
				<Button
					full
					variant='tertiary'
					className={css.btn}
				>
					Повторить заказ
				</Button>
			</div>
		</div>
	);
}

export default OrderItem;
