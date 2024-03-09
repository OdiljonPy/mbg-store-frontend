import { useModal } from "@/hooks/use-modal";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import css from "./logout.module.css";

const Logout = () => {
	const { open, onClose, onOpen } = useModal();
	const t = useTranslations();

	return (
		<>
			<button
				type={"button"}
				className={css.modal_trigger}
				onClick={onOpen}
			>
				{t("profile.logout.title")}
			</button>
			<Modal
				destroyOnClose={true}
				open={open}
				onCancel={onClose}
				closeIcon={false}
				footer={false}
				width={400}
				centered
				zIndex={100001}
			>
				<div className={css.modal}>
					<div className={css.modal_header}>
						<h3 className={css.modal_title}>
							{t("profile.logout.modal_title")}
						</h3>
						<p className={css.modal_description}>
							{t("profile.logout.modal_description")}
						</p>
					</div>
					<div className={css.modal_footer}>
						<button
							className={css.btn}
							onClick={onClose}
						>
							{t("profile.logout.modal_cancel")}
						</button>
						<button className={[css.btn, css.logout_btn].join(" ")}>
							{t("profile.logout.modal_logout")}
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Logout;
