import { useModal } from "@/hooks/use-modal";
import { Modal } from "antd";

import { IShipping } from "@/data-types/shipping";
import Form from "../forms/edit-address-form";
import css from "./edit-address-modal.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	deliveryItem: IShipping;
}

function EditAddressModal({
	deliveryItem,
	children,
	className,
	...props
}: Props) {
	const { onClose, onOpen, open } = useModal();
	return (
		<>
			<button
				{...props}
				className={[css.modal_trigger, className].join(" ")}
				onClick={onOpen}
			>
				{children}
			</button>
			<Modal
				destroyOnClose={true}
				open={open}
				onCancel={onClose}
				closeIcon={false}
				footer={null}
				width={900}
				classNames={{
					content: css.modal_content,
					body: css.modal_body,
				}}
				centered
			>
				<Form defaultValues={deliveryItem} onClose={onClose} />
				<button className={css.modal_close} onClick={onClose}>
					<svg
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15 2.8125C17.4105 2.8125 19.7668 3.52728 21.771 4.86646C23.7752 6.20564 25.3373 8.10907 26.2598 10.336C27.1822 12.563 27.4236 15.0135 26.9533 17.3777C26.4831 19.7418 25.3223 21.9134 23.6179 23.6179C21.9134 25.3223 19.7418 26.4831 17.3777 26.9533C15.0135 27.4236 12.563 27.1822 10.336 26.2598C8.10907 25.3373 6.20564 23.7752 4.86646 21.771C3.52728 19.7668 2.81249 17.4105 2.81249 15C2.81591 11.7687 4.10104 8.67076 6.3859 6.3859C8.67076 4.10104 11.7687 2.81591 15 2.8125ZM10.5867 18.0867C10.4996 18.1738 10.4305 18.2772 10.3834 18.391C10.3362 18.5048 10.312 18.6268 10.312 18.75C10.312 18.8732 10.3362 18.9952 10.3834 19.109C10.4305 19.2228 10.4996 19.3262 10.5867 19.4133C10.6738 19.5004 10.7772 19.5695 10.891 19.6166C11.0048 19.6638 11.1268 19.688 11.25 19.688C11.3732 19.688 11.4952 19.6638 11.609 19.6166C11.7228 19.5695 11.8262 19.5004 11.9133 19.4133L15 16.3254L18.0867 19.4133C18.1738 19.5004 18.2772 19.5695 18.391 19.6166C18.5048 19.6638 18.6268 19.688 18.75 19.688C18.8732 19.688 18.9952 19.6638 19.109 19.6166C19.2228 19.5695 19.3262 19.5004 19.4133 19.4133C19.5004 19.3262 19.5695 19.2228 19.6166 19.109C19.6638 18.9952 19.688 18.8732 19.688 18.75C19.688 18.6268 19.6638 18.5048 19.6166 18.391C19.5695 18.2772 19.5004 18.1738 19.4133 18.0867L16.3254 15L19.4133 11.9133C19.5892 11.7374 19.688 11.4988 19.688 11.25C19.688 11.0012 19.5892 10.7626 19.4133 10.5867C19.2374 10.4108 18.9988 10.312 18.75 10.312C18.5012 10.312 18.2626 10.4108 18.0867 10.5867L15 13.6746L11.9133 10.5867C11.8262 10.4996 11.7228 10.4305 11.609 10.3834C11.4952 10.3362 11.3732 10.312 11.25 10.312C11.1268 10.312 11.0048 10.3362 10.891 10.3834C10.7772 10.4305 10.6738 10.4996 10.5867 10.5867C10.4996 10.6738 10.4305 10.7772 10.3834 10.891C10.3362 11.0048 10.312 11.1268 10.312 11.25C10.312 11.3732 10.3362 11.4952 10.3834 11.609C10.4305 11.7228 10.4996 11.8262 10.5867 11.9133L13.6746 15L10.5867 18.0867Z'
							fill='black'
							fillOpacity='0.2'
						/>
						<path
							d='M15 2.8125C17.4105 2.8125 19.7668 3.52728 21.771 4.86646C23.7752 6.20564 25.3373 8.10907 26.2598 10.336C27.1822 12.563 27.4236 15.0135 26.9533 17.3777C26.4831 19.7418 25.3223 21.9134 23.6179 23.6179C21.9134 25.3223 19.7418 26.4831 17.3777 26.9533C15.0135 27.4236 12.563 27.1822 10.336 26.2598C8.10907 25.3373 6.20564 23.7752 4.86646 21.771C3.52728 19.7668 2.81249 17.4105 2.81249 15C2.81591 11.7687 4.10104 8.67076 6.3859 6.3859C8.67076 4.10104 11.7687 2.81591 15 2.8125ZM10.5867 18.0867C10.4996 18.1738 10.4305 18.2772 10.3834 18.391C10.3362 18.5048 10.312 18.6268 10.312 18.75C10.312 18.8732 10.3362 18.9952 10.3834 19.109C10.4305 19.2228 10.4996 19.3262 10.5867 19.4133C10.6738 19.5004 10.7772 19.5695 10.891 19.6166C11.0048 19.6638 11.1268 19.688 11.25 19.688C11.3732 19.688 11.4952 19.6638 11.609 19.6166C11.7228 19.5695 11.8262 19.5004 11.9133 19.4133L15 16.3254L18.0867 19.4133C18.1738 19.5004 18.2772 19.5695 18.391 19.6166C18.5048 19.6638 18.6268 19.688 18.75 19.688C18.8732 19.688 18.9952 19.6638 19.109 19.6166C19.2228 19.5695 19.3262 19.5004 19.4133 19.4133C19.5004 19.3262 19.5695 19.2228 19.6166 19.109C19.6638 18.9952 19.688 18.8732 19.688 18.75C19.688 18.6268 19.6638 18.5048 19.6166 18.391C19.5695 18.2772 19.5004 18.1738 19.4133 18.0867L16.3254 15L19.4133 11.9133C19.5892 11.7374 19.688 11.4988 19.688 11.25C19.688 11.0012 19.5892 10.7626 19.4133 10.5867C19.2374 10.4108 18.9988 10.312 18.75 10.312C18.5012 10.312 18.2626 10.4108 18.0867 10.5867L15 13.6746L11.9133 10.5867C11.8262 10.4996 11.7228 10.4305 11.609 10.3834C11.4952 10.3362 11.3732 10.312 11.25 10.312C11.1268 10.312 11.0048 10.3362 10.891 10.3834C10.7772 10.4305 10.6738 10.4996 10.5867 10.5867C10.4996 10.6738 10.4305 10.7772 10.3834 10.891C10.3362 11.0048 10.312 11.1268 10.312 11.25C10.312 11.3732 10.3362 11.4952 10.3834 11.609C10.4305 11.7228 10.4996 11.8262 10.5867 11.9133L13.6746 15L10.5867 18.0867Z'
							fill='#999999'
						/>
						<path
							d='M10.3839 18.3911C10.431 18.2773 10.5001 18.1739 10.5872 18.0868L13.6751 15L10.5872 11.9133C10.5001 11.8262 10.431 11.7228 10.3839 11.609C10.3368 11.4952 10.3125 11.3732 10.3125 11.25C10.3125 11.1269 10.3368 11.0049 10.3839 10.8911C10.431 10.7773 10.5001 10.6739 10.5872 10.5868C10.6743 10.4996 10.7778 10.4306 10.8916 10.3834C11.0054 10.3363 11.1273 10.312 11.2505 10.312C11.3737 10.312 11.4957 10.3363 11.6095 10.3834C11.7233 10.4306 11.8267 10.4996 11.9138 10.5868L15.0005 13.6746L18.0872 10.5868C18.2632 10.4108 18.5017 10.312 18.7505 10.312C18.9993 10.312 19.2379 10.4108 19.4138 10.5868C19.5897 10.7627 19.6885 11.0013 19.6885 11.25C19.6885 11.4988 19.5897 11.7374 19.4138 11.9133L16.3259 15L19.4138 18.0868C19.5009 18.1739 19.57 18.2773 19.6171 18.3911C19.6643 18.5049 19.6885 18.6269 19.6885 18.75C19.6885 18.8732 19.6643 18.9952 19.6171 19.109C19.57 19.2228 19.5009 19.3262 19.4138 19.4133C19.3267 19.5004 19.2233 19.5695 19.1095 19.6167C18.9957 19.6638 18.8737 19.6881 18.7505 19.6881C18.6273 19.6881 18.5054 19.6638 18.3916 19.6167C18.2778 19.5695 18.1743 19.5004 18.0872 19.4133L15.0005 16.3254L11.9138 19.4133C11.8267 19.5004 11.7233 19.5695 11.6095 19.6167C11.4957 19.6638 11.3737 19.6881 11.2505 19.6881C11.1273 19.6881 11.0054 19.6638 10.8916 19.6167C10.7778 19.5695 10.6743 19.5004 10.5872 19.4133C10.5001 19.3262 10.431 19.2228 10.3839 19.109C10.3368 18.9952 10.3125 18.8732 10.3125 18.75C10.3125 18.6269 10.3368 18.5049 10.3839 18.3911Z'
							fill='white'
						/>
					</svg>
				</button>
			</Modal>
		</>
	);
}

export default EditAddressModal;
