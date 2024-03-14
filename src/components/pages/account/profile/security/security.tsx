import { IUser } from "@/data-types/auth/user";
import { Skeleton } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import ResetPassword from "./reset-password/reset-password";
import css from "./security.module.css";

interface Props {
	user: IUser;
	loading: boolean;
	error: boolean;
}

function Security({ user, loading, error }: Props) {
	const t = useTranslations();
	const [phoneNumber, setPhoneNumber] = useState("");

	useEffect(() => {
		if (user && !error) {
			setPhoneNumber(user.phone_number);
		}
	}, [user, error]);

	return (
		<div className={css.card}>
			<div className={css.header}>
				<h3 className={css.title}>{t("profile.security.title")}</h3>
			</div>
			<div className={css.body}>
				{loading ? (
					<Skeleton
						active
						paragraph={{ rows: 4 }}
					/>
				) : (
					<>
						<div>
							<div className={css.input_wrapper}>
								<label className={css.label}>
									{t("profile.security.phone_number")}
								</label>
								<PhoneInput
									hideDropdown={true}
									inputClassName={css.input}
									defaultCountry='uz'
									inputProps={{
										placeholder: "+998",
									}}
									value={phoneNumber}
									placeholder={t(
										"profile.security.phone_number"
									)}
									disabled
								/>
								<span className={css.icon}>
									<svg
										width='24'
										height='25'
										viewBox='0 0 24 25'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M19.5 8H16.5V5.75C16.5 4.55653 16.0259 3.41193 15.182 2.56802C14.3381 1.72411 13.1935 1.25 12 1.25C10.8065 1.25 9.66193 1.72411 8.81802 2.56802C7.97411 3.41193 7.5 4.55653 7.5 5.75V8H4.5C4.10218 8 3.72064 8.15804 3.43934 8.43934C3.15804 8.72064 3 9.10218 3 9.5V20C3 20.3978 3.15804 20.7794 3.43934 21.0607C3.72064 21.342 4.10218 21.5 4.5 21.5H19.5C19.8978 21.5 20.2794 21.342 20.5607 21.0607C20.842 20.7794 21 20.3978 21 20V9.5C21 9.10218 20.842 8.72064 20.5607 8.43934C20.2794 8.15804 19.8978 8 19.5 8ZM9 5.75C9 4.95435 9.31607 4.19129 9.87868 3.62868C10.4413 3.06607 11.2044 2.75 12 2.75C12.7956 2.75 13.5587 3.06607 14.1213 3.62868C14.6839 4.19129 15 4.95435 15 5.75V8H9V5.75ZM19.5 20H4.5V9.5H19.5V20Z'
											fill='#C2C2C2'
										/>
									</svg>
								</span>
							</div>
						</div>
						<div>
							<div className={css.input_wrapper}>
								<label className={css.label}>
									{t("profile.security.current_password")}
								</label>
								<ResetPassword>
									<input
										className={`${css.input} ${css.password}`}
										type='password'
										value={"password"}
										disabled
									/>
									<div className={css.icon}>
										<svg
											width='19'
											height='20'
											viewBox='0 0 19 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M18.3103 5.37866L14.1216 1.18897C13.9823 1.04965 13.8169 0.939129 13.6349 0.863725C13.4529 0.788322 13.2578 0.749512 13.0608 0.749512C12.8638 0.749512 12.6687 0.788322 12.4867 0.863725C12.3047 0.939129 12.1393 1.04965 12 1.18897L0.439695 12.7502C0.299801 12.889 0.188889 13.0542 0.113407 13.2362C0.0379245 13.4183 -0.000621974 13.6135 7.58902e-06 13.8105V18.0002C7.58902e-06 18.398 0.158043 18.7796 0.439347 19.0609C0.720652 19.3422 1.10218 19.5002 1.50001 19.5002H5.6897C5.88675 19.5009 6.08197 19.4623 6.26399 19.3868C6.44602 19.3113 6.61122 19.2004 6.75001 19.0605L18.3103 7.50022C18.4496 7.36093 18.5602 7.19556 18.6356 7.01355C18.711 6.83154 18.7498 6.63645 18.7498 6.43944C18.7498 6.24243 18.711 6.04735 18.6356 5.86534C18.5602 5.68333 18.4496 5.51795 18.3103 5.37866ZM1.81032 13.5002L9.75001 5.56054L11.3147 7.12522L3.37501 15.064L1.81032 13.5002ZM1.50001 15.3105L4.1897 18.0002H1.50001V15.3105ZM6.00001 17.6899L4.43532 16.1252L12.375 8.18554L13.9397 9.75022L6.00001 17.6899ZM15 8.68991L10.8103 4.50022L13.0603 2.25022L17.25 6.43897L15 8.68991Z'
												fill='#999999'
											/>
										</svg>
									</div>
								</ResetPassword>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Security;
