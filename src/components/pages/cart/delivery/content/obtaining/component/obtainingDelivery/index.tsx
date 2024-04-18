import SendButton from "@/components/pages/cart/common/button/send_button";
import AddressCart from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/address-cart";
import AddNewAddressModal from "@/components/shared/address/modals/add-address-modal";
import Button from "@/components/shared/button";
import { IPostOrder } from "@/data-types/order/order";
import { IShipping } from "@/data-types/shipping";
import { fetchShippingList } from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import css from "./index.module.css";

interface props {
	changeContainerHeight: (e: number) => void;
	saveActiveAddress: (e: IShipping) => void;
	activeAddress?: IShipping;
}

const ObtainingDelivery = ({ changeContainerHeight, saveActiveAddress, activeAddress }: props) => {
	const dispatch = useDispatch<AppDispatch>();
	const { shippingList, loading } = useSelector((state: RootState) => state.shippingList);
	const { setValue } = useFormContext<IPostOrder>();
	const cardRef = useRef<any>(null);
	const [activeAddressCart, setActiveAddressCart] = useState<IShipping>();

	const fetchActive = (address: IShipping) => {
		setActiveAddressCart(address);
		setValue("delivery_address", address.id);
	};

	const fakeShipping = {
		id: 1,
		address_name: "Home",
		address: "string",
		entrance: 21,
		floor: 10,
		apartment: 2,
		latitude: "string",
		longitude: "string",
		main_address: true,
	};

	const saveAddress = () => {
		saveActiveAddress(activeAddressCart || fakeShipping);
		setValue("delivery_address", activeAddressCart?.id);
	};

	useEffect(() => {
		changeContainerHeight(cardRef?.current?.scrollHeight);
		const activeAddress = shippingList.find((add) => add.main_address === true);
		if (activeAddress) {
			setActiveAddressCart(activeAddress);
			setValue("delivery_address", activeAddress.id);
		}
	}, [shippingList]);

	useEffect(() => {
		dispatch(fetchShippingList());
	}, [dispatch]);

	return (
		<div ref={cardRef}>
			<div className={css.carts}>
				{shippingList.map((shipping, index) => {
					return <AddressCart key={shipping.id} shipping={shipping} fetchActive={fetchActive} active={activeAddressCart?.id} />;
				})}
			</div>
			<div className={css.action_btn}>
				<AddNewAddressModal>
					<Button
						variant='tertiary'
						className={css.btn}
						width={300}
						leftIcon={
							<svg width='21' height='22' viewBox='-1 0 22 23' fill='none' xmlns='http://www.w2.org/2000/svg'>
								<path
									d='M10 0.9375C8.91094 0.9375 6.86879 1.55698 5.13179 2.7176C3.3948 3.87822 2.04098 5.52786 1.24153 7.45791C0.442077 9.38795 0.232904 11.5117 0.64046 13.5606C1.04802 15.6096 2.054 17.4916 3.53119 18.9688C5.00838 20.446 6.89044 21.452 8.93936 21.8595C10.9883 22.2671 13.1121 22.0579 15.0421 21.2585C16.9721 20.459 18.6218 19.1052 19.7824 17.3682C20.943 15.6312 21.5625 13.5891 21.5625 11.5C21.5595 8.69956 20.4458 6.01466 18.4656 4.03445C16.4853 2.05424 13.8004 0.940457 11 0.9375ZM11 20.4375C9.23233 20.4375 7.50436 19.9133 6.0346 18.9313C4.56483 17.9492 3.41929 16.5533 2.74283 14.9202C2.06637 13.2871 1.88938 11.4901 2.23424 9.75638C2.57909 8.02268 3.43031 6.43016 4.68024 5.18023C5.93017 3.9303 7.52268 3.07909 9.25638 2.73423C10.9901 2.38938 12.7871 2.56637 14.4202 3.24283C16.0534 3.91928 17.4492 5.06483 18.4313 6.53459C19.4133 8.00435 19.9375 9.73233 19.9375 11.5C19.9348 13.8695 18.9923 16.1413 17.3168 17.8168C15.6413 19.4923 13.3696 20.4348 11 20.4375ZM15.875 11.5C15.875 11.7155 15.7894 11.9222 15.637 12.0745C15.4847 12.2269 15.278 12.3125 15.0625 12.3125H11.8125V15.5625C11.8125 15.778 11.7269 15.9847 11.5745 16.137C11.4222 16.2894 11.2155 16.375 11 16.375C10.7845 16.375 10.5779 16.2894 10.4255 16.137C10.2731 15.9847 10.1875 15.778 10.1875 15.5625V12.3125H6.9375C6.72202 12.3125 6.51535 12.2269 6.36298 12.0745C6.21061 11.9222 6.125 11.7155 6.125 11.5C6.125 11.2845 6.21061 11.0778 6.36298 10.9255C6.51535 10.7731 6.72202 10.6875 6.9375 10.6875H10.1875V7.4375C10.1875 7.22201 10.2731 7.01535 10.4255 6.86298C10.5779 6.7106 10.7845 6.625 11 6.625C11.2155 6.625 11.4222 6.7106 11.5745 6.86298C11.7269 7.01535 11.8125 7.22201 11.8125 7.4375V10.6875H15.0625C15.278 10.6875 15.4847 10.7731 15.637 10.9255C15.7894 11.0778 15.875 11.2845 15.875 11.5Z'
									fill='#38B969'
								/>
							</svg>
						}
					>
						Добавить адрес
					</Button>
				</AddNewAddressModal>

				{shippingList.length ? <SendButton title={"approve"} onClick={() => saveAddress()} />:''}
			</div>
		</div>
	);
};

export default ObtainingDelivery;
