import { useModal } from "@/hooks/use-modal";
import { logoutUser } from "@/slices/auth/login";
import { AppDispatch } from "@/store";
import { Modal } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import css from "./logout.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Logout = ({ children, ...props }: Props) => {
	const { open, onClose, onOpen } = useModal();
	const t = useTranslations();
	const { push } = useRouter();
	const dispatch = useDispatch<AppDispatch>();

	const handleLogout = () => {
		dispatch(logoutUser());
		push("/");
	};

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
						<button
							onClick={handleLogout}
							className={[css.btn, css.logout_btn].join(" ")}
						>
							{t("profile.logout.modal_logout")}
						</button>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default Logout;
