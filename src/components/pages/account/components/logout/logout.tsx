import { useModal } from "@/hooks/use-modal";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import css from "./logout.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Logout = ({ children, ...props }: Props) => {
	const { open, onClose, onOpen } = useModal();
	const t = useTranslations();

	return (
		<>
			<button
				{...props}
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
				centered
				style={{ borderRadius: "26px", overflow: "auto" }}
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
