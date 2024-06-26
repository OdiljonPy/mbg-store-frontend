import SendButton from "@/components/pages/cart/common/button/send_button";
import Button from "@/components/shared/button";
import { RootState } from "@/store";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import css from "./cancel-modal.module.css";

interface props {
	open: boolean;
	onClose: (status: "close" | "cancel") => void;
	title: string | number;
}
const CancelModal = ({ open, onClose, title }: props) => {
	const t = useTranslations();
	const { loading, error } = useSelector(
		(state: RootState) => state.order_change
	);
	return (
		<div>
			<Modal
				open={open}
				destroyOnClose={true}
				centered
        classNames={{content: css.modal_container}}
				onCancel={() => onClose("close")}
				closeIcon={false}
				footer={null}
				width={400}
			>
				<div className={css.modal}>
					<div className={css.modal_header}>
						<p className={css.title}>
							{t("order_placed.cancel_order")}
						</p>
						<p className={css.description}>
							{t("order_placed.agree_cancel_text")}{" "}
							<span>{title}</span>?
						</p>
					</div>
					<div className={css.modal_footer}>
						<SendButton
							title={"modal.no"}
							outline={true}
							onClick={() => onClose("close")}
						/>
						<Button
							full
							loading={loading}
							onClick={() => onClose("cancel")}
						>
							{t("modal.yes")}
						</Button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default CancelModal;
