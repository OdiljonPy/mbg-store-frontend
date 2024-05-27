import { useModal } from "@/hooks/use-modal";

import Modal from "@/components/shared/modal";
import { cn } from "@/utils/cn";

import AddAddressForm from "../../forms/add-address-form";
import AddAddressMobileForm from "../../mobile-forms/add-address-mobile-form";
import css from "./add-address-modal.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function AddNewAddressModal({ children, className, ...props }: Props) {
	const { onClose, onOpen, open } = useModal();
	return (
		<>
			<div {...props} className={cn(css.modal_trigger, className)} onClick={onOpen}>
				{children}
			</div>
			<Modal
				onClose={onClose}
				open={open}
				width={900}
				classNames={{
					content: css.modal_content,
					body: css.modal_body,
				}}
			>
				<AddAddressForm onClose={onClose} />
				<AddAddressMobileForm onClose={onClose} />
			</Modal>
		</>
	);
}

export default AddNewAddressModal;
