import { useModal } from "@/hooks/use-modal";

import Modal from "@/components/shared/modal";
import { IShipping } from "@/data-types/shipping";
import EditAddressForm from "../../forms/edit-address-form";
import EditAddressMobileForm from "../../mobile-forms/edit-address-mobile-form";
import css from "./edit-address-modal.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
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
			<div
				{...props}
				className={[css.modal_trigger, className].join(" ")}
				onClick={onOpen}
			>
				{children}
			</div>
			<Modal
				open={open}
				onClose={onClose}
				width={900}
				classNames={{
					content: css.modal_content,
					body: css.modal_body,
				}}
			>
				<EditAddressForm
					defaultValues={deliveryItem}
					onClose={onClose}
				/>
				<EditAddressMobileForm
					defaultValues={deliveryItem}
					onClose={onClose}
				/>
			</Modal>
		</>
	);
}

export default EditAddressModal;
