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
import {useTranslations} from "next-intl";


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

	const t = useTranslations()

	const {shippingList} = useSelector((state:RootState)=> state.shippingList)

	const { deleteLoading, loading } = useSelector(
		(state: RootState) => state.shippingList
	);

	const dispatch = useDispatch<AppDispatch>();

	const onDelete = async () => {
			await dispatch(deleteShipping(shippingId)).unwrap()
				.then((res)=>{
					if(!res.ok){
						// @ts-ignore
						addToast(res.error?.message,{
							appearance: 'error',
							autoDismiss: true,
						})
					}
			})
			await dispatch(fetchShippingList());
			onClose();

	};

	const openDeleteModal = () =>{
		if(shippingList?.length > 1){
			onOpen()
		}
		else{
				addToast(t('address.notAllowed_delete'),{
					appearance: 'warning',
					autoDismiss: true,
				})
			}
	}

	return (
		<>
			<div
				{...props}
				className={[css.modal_trigger, className].join(" ")}
				onClick={openDeleteModal}
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
					<h3 className={css.title}>{t('address.delete_address')}</h3>
				</div>
				<div className={css.body}>
					<p className={css.text}>
						{t('address.permission_delete')} {" "}
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
						{t('modal.no')}
					</Button>
					<Button
						onClick={onDelete}
						full
						loading={deleteLoading || loading}
					>
						{t('modal.yes')}
					</Button>
				</div>
			</Modal>
		</>
	);
}

export default DeleteAddressModal;
