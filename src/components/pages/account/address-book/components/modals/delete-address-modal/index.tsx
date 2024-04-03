import { Modal } from "antd";

import { useModal } from "@/hooks/use-modal";

import Button from "@/components/shared/button";
import css from "./delete-address-modal.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function DeleteAddressModal({ children, className, ...props }: Props) {
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
				width={400}
				classNames={{
					content: css.modal_content,
					body: css.modal_body,
				}}
				centered
			>
				<div className={css.header}>
					<h3 className={css.title}>Удалить адресa</h3>
				</div>
				<div className={css.body}>
					<p className={css.text}>
						Вы уверены что хотите удалить адрес{" "}
						<span className={css.address_name}>Мой дом</span>?
					</p>
				</div>
				<div className={css.footer}>
					<Button variant='secondary' style={{ minWidth: "120px" }}>
						Нет
					</Button>
					<Button full>Да, удалить</Button>
				</div>
			</Modal>
		</>
	);
}

export default DeleteAddressModal;
