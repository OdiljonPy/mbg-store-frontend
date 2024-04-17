import { raleway } from "@/constants/fonts/fonts";
import { fetchShippingList } from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { ConfigProvider, Dropdown, MenuProps } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressFormModal from "../address-form-modal/address-form-modal";
import AddressItem from "./address-item";
import css from "./address-select.module.css";
import ShippingItem from "./shipping-item";

const AddressSelect = () => {
	const { address_list } = useSelector((state: RootState) => state.address);
	const { shippingList, loading, error } = useSelector(
		(state: RootState) => state.shippingList
	);

	const active_address = address_list.find((item) => item.is_default);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchShippingList());
	}, [dispatch]);

	const items: MenuProps["items"] = [
		{
			label: <AddressFormModal />,
			key: "1",
		},
		...address_list.map((item) => ({
			label: <AddressItem address_item={item} />,
			key: item.latitude + item.longitude,
		})),
		{
			key: 2,
			label: "Сохраненные",
			type: "group",
			children: [
				...shippingList.map((item) => ({
					label: <ShippingItem shipping_item={item} />,
					key: item.latitude + item.longitude,
				})),
			],
		},
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
						{active_address
							? active_address.title
							: "Укажите адрес"}
					</span>
				</button>
			</Dropdown>
		</ConfigProvider>
	);
};

export default AddressSelect;
