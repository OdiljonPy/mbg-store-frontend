import AddLocationModal from "@/components/shared/address/modals/add-location-modal";
import { raleway } from "@/constants/fonts/fonts";
import { fetchShippingList } from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { ConfigProvider, Dropdown, MenuProps } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import AddressItem from "./address-item";
import css from "./address-select.module.css";
import ShippingItem from "./shipping-item";

const AddressSelect = () => {
	const t = useTranslations();
	const { address_list, main_address } = useSelector(
		(state: RootState) => state.address
	);
	const { shippingList } = useSelector(
		(state: RootState) => state.shippingList
	);
	const { isLoggedIn } = useSelector((state: RootState) => state.login);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (isLoggedIn) dispatch(fetchShippingList());
	}, [dispatch, isLoggedIn]);

	const items: MenuProps["items"] = [
		{
			label: (
				<AddLocationModal>
					<button type={"button"} className={`${css.add_btn}`}>
						<svg
							className={css.add_icon}
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 0.875C7.39303 0.875 5.82214 1.35152 4.48599 2.24431C3.14984 3.1371 2.10844 4.40605 1.49348 5.8907C0.878517 7.37535 0.717615 9.00901 1.03112 10.5851C1.34462 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM9 15.875C7.64025 15.875 6.31104 15.4718 5.18045 14.7164C4.04987 13.9609 3.16868 12.8872 2.64833 11.6309C2.12798 10.3747 1.99183 8.99237 2.2571 7.65875C2.52237 6.32513 3.17715 5.10013 4.13864 4.13864C5.10013 3.17716 6.32513 2.52237 7.65875 2.2571C8.99237 1.99183 10.3747 2.12798 11.6309 2.64833C12.8872 3.16868 13.9609 4.04987 14.7164 5.18045C15.4718 6.31104 15.875 7.64025 15.875 9C15.8729 10.8227 15.1479 12.5702 13.8591 13.8591C12.5702 15.1479 10.8227 15.8729 9 15.875ZM12.75 9C12.75 9.16576 12.6842 9.32473 12.5669 9.44194C12.4497 9.55915 12.2908 9.625 12.125 9.625H9.625V12.125C9.625 12.2908 9.55915 12.4497 9.44194 12.5669C9.32473 12.6842 9.16576 12.75 9 12.75C8.83424 12.75 8.67527 12.6842 8.55806 12.5669C8.44085 12.4497 8.375 12.2908 8.375 12.125V9.625H5.875C5.70924 9.625 5.55027 9.55915 5.43306 9.44194C5.31585 9.32473 5.25 9.16576 5.25 9C5.25 8.83424 5.31585 8.67527 5.43306 8.55806C5.55027 8.44085 5.70924 8.375 5.875 8.375H8.375V5.875C8.375 5.70924 8.44085 5.55027 8.55806 5.43306C8.67527 5.31585 8.83424 5.25 9 5.25C9.16576 5.25 9.32473 5.31585 9.44194 5.43306C9.55915 5.55027 9.625 5.70924 9.625 5.875V8.375H12.125C12.2908 8.375 12.4497 8.44085 12.5669 8.55806C12.6842 8.67527 12.75 8.83424 12.75 9Z'
								fill='#39B969'
							/>
						</svg>
						<span className={css.add_text}>{t("address.add")}</span>
					</button>
				</AddLocationModal>
			),
			key: "1",
		},
		...address_list.map((item) => ({
			label: (
				<AddressItem address_item={item} main_address={main_address} />
			),
			key: item.latitude + item.longitude,
		})),
		isLoggedIn && shippingList.length
			? {
					key: 2,
					label: t("address.saved"),
					type: "group",
					children: [
						...shippingList.map((item) => ({
							label: (
								<ShippingItem
									shipping_item={item}
									main_address={main_address}
								/>
							),
							key: item.latitude + item.longitude,
						})),
					],
			  }
			: null,
	];

	return (
		<ConfigProvider
			theme={{
				token: {
					controlItemBgHover: "transparent",
				},
			}}
		>
			<Dropdown
				menu={{ items, style: { borderRadius: 16, maxWidth: 350 } }}
				trigger={["click"]}
				className={css.dropdown}
			>
				<button className={`${css.btn} ${raleway.className}`}>
					<svg
						className={css.svg}
						width='18'
						height='22'
						viewBox='0 0 18 22'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9 5C8.25832 5 7.5333 5.21993 6.91661 5.63199C6.29993 6.04404 5.81928 6.62971 5.53545 7.31494C5.25162 8.00016 5.17736 8.75416 5.32205 9.48159C5.46675 10.209 5.8239 10.8772 6.34835 11.4017C6.8728 11.9261 7.54098 12.2833 8.26841 12.4279C8.99584 12.5726 9.74984 12.4984 10.4351 12.2145C11.1203 11.9307 11.706 11.4501 12.118 10.8334C12.5301 10.2167 12.75 9.49168 12.75 8.75C12.75 7.75544 12.3549 6.80161 11.6517 6.09835C10.9484 5.39509 9.99456 5 9 5ZM9 11C8.55499 11 8.11998 10.868 7.74997 10.6208C7.37996 10.3736 7.09157 10.0222 6.92127 9.61104C6.75097 9.1999 6.70642 8.7475 6.79323 8.31105C6.88005 7.87459 7.09434 7.47368 7.40901 7.15901C7.72368 6.84434 8.12459 6.63005 8.56105 6.54323C8.9975 6.45642 9.4499 6.50097 9.86104 6.67127C10.2722 6.84157 10.6236 7.12996 10.8708 7.49997C11.118 7.86998 11.25 8.30499 11.25 8.75C11.25 9.34674 11.0129 9.91903 10.591 10.341C10.169 10.7629 9.59674 11 9 11ZM9 0.5C6.81273 0.502481 4.71575 1.37247 3.16911 2.91911C1.62247 4.46575 0.752481 6.56273 0.75 8.75C0.75 11.6938 2.11031 14.8138 4.6875 17.7734C5.84552 19.1108 7.14886 20.3151 8.57344 21.3641C8.69954 21.4524 8.84978 21.4998 9.00375 21.4998C9.15772 21.4998 9.30796 21.4524 9.43406 21.3641C10.856 20.3147 12.1568 19.1104 13.3125 17.7734C15.8859 14.8138 17.25 11.6938 17.25 8.75C17.2475 6.56273 16.3775 4.46575 14.8309 2.91911C13.2843 1.37247 11.1873 0.502481 9 0.5ZM9 19.8125C7.45031 18.5938 2.25 14.1172 2.25 8.75C2.25 6.95979 2.96116 5.2429 4.22703 3.97703C5.4929 2.71116 7.20979 2 9 2C10.7902 2 12.5071 2.71116 13.773 3.97703C15.0388 5.2429 15.75 6.95979 15.75 8.75C15.75 14.1153 10.5497 18.5938 9 19.8125Z'
							fill='#232323'
						/>
					</svg>

					<span className={css.text}>
						{main_address.address
							? main_address.address
							: t("header.please_enter_address")}
					</span>
				</button>
			</Dropdown>
		</ConfigProvider>
	);
};

export default AddressSelect;
