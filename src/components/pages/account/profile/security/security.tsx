import { IUser } from "@/data-types/auth/user";
import { Skeleton } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import NewPassword from "../new-password/new-password";
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
								<input
									className={`${css.input} ${css.password}`}
									type='password'
									value={"password"}
									disabled
								/>
								<div className={css.icon}>
									<NewPassword />
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Security;
