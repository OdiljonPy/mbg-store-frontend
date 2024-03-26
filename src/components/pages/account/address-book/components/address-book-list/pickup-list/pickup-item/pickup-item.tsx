import { IPickupAddress } from "@/data-types/address/pickup-address";

import { cn } from "@/utils/cn";
import css from "./pickup-item.module.css";

interface Props {
	pickupItem: IPickupAddress;
}

function PickupItem({ pickupItem }: Props) {
	return (
		<div className={css.card}>
			{/* // TODO */}
			<span className={css.icon}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M21.75 9C21.7504 8.93027 21.7409 8.86083 21.7219 8.79375L20.3766 4.0875C20.2861 3.77523 20.0971 3.50059 19.8378 3.30459C19.5784 3.10858 19.2626 3.00174 18.9375 3H5.0625C4.73741 3.00174 4.4216 3.10858 4.16223 3.30459C3.90287 3.50059 3.71386 3.77523 3.62344 4.0875L2.27906 8.79375C2.2597 8.86079 2.24991 8.93022 2.25 9V10.5C2.25 11.0822 2.38554 11.6563 2.6459 12.1771C2.90625 12.6978 3.28427 13.1507 3.75 13.5V19.5C3.75 19.8978 3.90804 20.2794 4.18934 20.5607C4.47064 20.842 4.85218 21 5.25 21H18.75C19.1478 21 19.5294 20.842 19.8107 20.5607C20.092 20.2794 20.25 19.8978 20.25 19.5V13.5C20.7157 13.1507 21.0937 12.6978 21.3541 12.1771C21.6145 11.6563 21.75 11.0822 21.75 10.5V9ZM8.25 10.5C8.24986 10.8869 8.14996 11.2673 7.95993 11.6043C7.7699 11.9413 7.49617 12.2236 7.16518 12.424C6.83419 12.6244 6.45713 12.736 6.07041 12.7481C5.68368 12.7602 5.30037 12.6724 4.9575 12.4931C4.90533 12.4525 4.84794 12.4191 4.78688 12.3937C4.46913 12.1903 4.20764 11.9103 4.02645 11.5794C3.84527 11.2484 3.7502 10.8773 3.75 10.5V9.75H8.25V10.5ZM14.25 10.5C14.25 11.0967 14.0129 11.669 13.591 12.091C13.169 12.5129 12.5967 12.75 12 12.75C11.4033 12.75 10.831 12.5129 10.409 12.091C9.98705 11.669 9.75 11.0967 9.75 10.5V9.75H14.25V10.5ZM20.25 10.5C20.2497 10.8774 20.1545 11.2486 19.9731 11.5795C19.7918 11.9104 19.5301 12.1904 19.2122 12.3937C19.1519 12.4191 19.0952 12.4522 19.0434 12.4922C18.7006 12.6716 18.3173 12.7596 17.9305 12.7477C17.5437 12.7357 17.1666 12.6242 16.8355 12.424C16.5044 12.2237 16.2305 11.9414 16.0404 11.6044C15.8502 11.2673 15.7502 10.887 15.75 10.5V9.75H20.25V10.5Z'
						fill='#39B969'
					/>
				</svg>
			</span>
			<header className={css.header}>
				<div>
					<h3 className={css.title}>{pickupItem.brand_name}</h3>
				</div>
				<p className={css.subtitle}>{pickupItem.store_location_name}</p>
				<p className={cn(css.subtitle, css.time)}>
					<svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM8 13.5C6.91221 13.5 5.84884 13.1774 4.94437 12.5731C4.0399 11.9687 3.33495 11.1098 2.91867 10.1048C2.50238 9.09977 2.39347 7.9939 2.60568 6.927C2.8179 5.86011 3.34173 4.8801 4.11092 4.11091C4.8801 3.34172 5.86011 2.8179 6.92701 2.60568C7.9939 2.39346 9.09977 2.50238 10.1048 2.91866C11.1098 3.33494 11.9687 4.03989 12.5731 4.94436C13.1774 5.84883 13.5 6.9122 13.5 8C13.4983 9.45818 12.9184 10.8562 11.8873 11.8873C10.8562 12.9184 9.45819 13.4983 8 13.5ZM12 8C12 8.13261 11.9473 8.25979 11.8536 8.35355C11.7598 8.44732 11.6326 8.5 11.5 8.5H8C7.86739 8.5 7.74022 8.44732 7.64645 8.35355C7.55268 8.25979 7.5 8.13261 7.5 8V4.5C7.5 4.36739 7.55268 4.24021 7.64645 4.14645C7.74022 4.05268 7.86739 4 8 4C8.13261 4 8.25979 4.05268 8.35356 4.14645C8.44732 4.24021 8.5 4.36739 8.5 4.5V7.5H11.5C11.6326 7.5 11.7598 7.55268 11.8536 7.64645C11.9473 7.74021 12 7.86739 12 8Z'
							fill='#999999'
						/>
					</svg>
					{pickupItem.working_time}
				</p>
			</header>
			<div className={css.control}>
				<button className={css.btn}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M21.3103 6.87817L17.1216 2.68848C16.9823 2.54916 16.8169 2.43864 16.6349 2.36324C16.4529 2.28783 16.2578 2.24902 16.0608 2.24902C15.8638 2.24902 15.6687 2.28783 15.4867 2.36324C15.3047 2.43864 15.1393 2.54916 15 2.68848L3.43969 14.2497C3.2998 14.3885 3.18889 14.5537 3.11341 14.7358C3.03792 14.9178 2.99938 15.113 3.00001 15.31V19.4997C3.00001 19.8976 3.15804 20.2791 3.43935 20.5604C3.72065 20.8417 4.10218 20.9997 4.50001 20.9997H8.6897C8.88675 21.0004 9.08197 20.9618 9.26399 20.8863C9.44602 20.8109 9.61122 20.6999 9.75001 20.56L21.3103 8.99973C21.4496 8.86044 21.5602 8.69507 21.6356 8.51306C21.711 8.33105 21.7498 8.13596 21.7498 7.93895C21.7498 7.74194 21.711 7.54686 21.6356 7.36485C21.5602 7.18284 21.4496 7.01747 21.3103 6.87817ZM4.81032 14.9997L12.75 7.06005L14.3147 8.62473L6.37501 16.5635L4.81032 14.9997ZM4.50001 16.81L7.1897 19.4997H4.50001V16.81ZM9.00001 19.1894L7.43532 17.6247L15.375 9.68505L16.9397 11.2497L9.00001 19.1894ZM18 10.1894L13.8103 5.99973L16.0603 3.74973L20.25 7.93848L18 10.1894Z'
							fill='#999999'
						/>
					</svg>
				</button>
				<button className={css.btn}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z'
							fill='#999999'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
export default PickupItem;
