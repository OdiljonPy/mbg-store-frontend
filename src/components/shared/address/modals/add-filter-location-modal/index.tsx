import Modal from "@/components/shared/modal";
import { useModal } from "@/hooks/use-modal";
import { cn } from "@/utils/cn";
import React from "react";

import AddFilterLocationForm from "../../forms/add-filter-location-form";
import AddFilterLocationMobileForm from "../../mobile-forms/add-filter-location-mobile-form";
import css from "./add-location-modal.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function AddFilterLocationModal({ children, className, ...props }: Props) {
	const { onClose, onOpen, open } = useModal();
	return (
		<>
			<div
				{...props}
				className={cn(css.modal_trigger, className)}
				onClick={onOpen}
			>
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
				<AddFilterLocationForm onClose={onClose} />
				<AddFilterLocationMobileForm onClose={onClose} />
			</Modal>
		</>
	);
}

export default AddFilterLocationModal;
