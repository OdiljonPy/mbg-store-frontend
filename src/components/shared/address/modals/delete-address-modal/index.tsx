import { Modal } from "antd";

import { useModal } from "@/hooks/use-modal";

import Button from "@/components/shared/button";
import {
	deleteShipping,
	fetchShippingList,
} from "@/slices/shipping/shippingSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import css from "./delete-address-modal.module.css";
import {useToasts} from "react-toast-notifications";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	shippingId: number;
	shippingName: string;
}

function DeleteAddressModal({
	children,
	className,
	shippingId,
	shippingName,
	...props
}: Props) {
	const {addToast} = useToasts()
	const { onClose, onOpen, open } = useModal();

	const { deleteLoading, loading } = useSelector(
		(state: RootState) => state.shippingList
	);

	const dispatch = useDispatch<AppDispatch>();

	const onDelete = async () => {
		await dispatch(deleteShipping(shippingId))
			.then((res)=>{
			// @ts-ignore
				addToast(res.error?.message,{
					appearance: 'error',
					autoDismiss: true,
				})
		})
		await dispatch(fetchShippingList());
		onClose();
	};

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
						<span className={css.address_name}>{shippingName}</span>
						?
					</p>
				</div>
				<div className={css.footer}>
					<Button
						onClick={onClose}
						variant='secondary'
						style={{ minWidth: "120px" }}
					>
						Нет
					</Button>
					<Button
						onClick={onDelete}
						full
						loading={deleteLoading || loading}
					>
						Да, удалить
					</Button>
				</div>
			</Modal>
		</>
	);
}

export default DeleteAddressModal;
