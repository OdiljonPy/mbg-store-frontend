import { fetchUser } from "@/slices/auth/user";
import { AppDispatch, RootState } from "@/store";
import { Skeleton } from "antd";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPhoneNumber } from "../../../utils/phone-format/phone-format";
import Logout from "./components/logout/logout";
import css from "./wrapper.module.css";

function AccountWrapper({ children }: PropsWithChildren) {
	const { user, loading } = useSelector((state: RootState) => state.user);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<span className={css.icon}>
					<svg
						width='20'
						height='19'
						viewBox='0 0 20 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19.6499 18.6251C19.5841 18.7391 19.4894 18.8338 19.3753 18.8997C19.2613 18.9655 19.1319 19.0001 19.0002 19.0001H1.00021C0.86862 19 0.739385 18.9652 0.625477 18.8993C0.51157 18.8335 0.417001 18.7388 0.351265 18.6248C0.28553 18.5108 0.250943 18.3815 0.250977 18.2499C0.25101 18.1183 0.285664 17.9891 0.351458 17.8751C1.77927 15.4067 3.97958 13.6367 6.54739 12.7976C5.27724 12.0415 4.29041 10.8893 3.73845 9.51804C3.18648 8.14678 3.09991 6.63224 3.49203 5.20701C3.88414 3.78178 4.73326 2.52467 5.90898 1.62873C7.0847 0.732786 8.52202 0.247559 10.0002 0.247559C11.4784 0.247559 12.9157 0.732786 14.0914 1.62873C15.2672 2.52467 16.1163 3.78178 16.5084 5.20701C16.9005 6.63224 16.8139 8.14678 16.262 9.51804C15.71 10.8893 14.7232 12.0415 13.453 12.7976C16.0208 13.6367 18.2211 15.4067 19.649 17.8751C19.7149 17.989 19.7497 18.1183 19.7499 18.25C19.7501 18.3816 19.7156 18.511 19.6499 18.6251Z'
							fill='#39B969'
						/>
					</svg>
				</span>
				<div className={css.info}>
					{loading ? (
						<div>
							<Skeleton
								active
								paragraph={{
									style: { marginTop: 4 },
									rows: 1,
								}}
							/>
						</div>
					) : (
						<>
							{user.full_name ? (
								<>
									<h3 className={css.title}>
										{user.full_name}
									</h3>
									<span className={css.sub_title}>
										{formatPhoneNumber(user.phone_number)}
									</span>
								</>
							) : (
								<span className={css.title}>
									{formatPhoneNumber(user.phone_number)}
								</span>
							)}
						</>
					)}
				</div>
				<Logout className={css.logout_btn}>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.5 17.25C7.5 17.4489 7.42098 17.6397 7.28033 17.7803C7.13968 17.921 6.94891 18 6.75 18H1.5C1.10218 18 0.720644 17.842 0.43934 17.5607C0.158035 17.2794 0 16.8978 0 16.5V1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H6.75C6.94891 0 7.13968 0.0790178 7.28033 0.21967C7.42098 0.360322 7.5 0.551088 7.5 0.75C7.5 0.948912 7.42098 1.13968 7.28033 1.28033C7.13968 1.42098 6.94891 1.5 6.75 1.5H1.5V16.5H6.75C6.94891 16.5 7.13968 16.579 7.28033 16.7197C7.42098 16.8603 7.5 17.0511 7.5 17.25ZM17.7806 8.46937L14.0306 4.71937C13.8899 4.57864 13.699 4.49958 13.5 4.49958C13.301 4.49958 13.1101 4.57864 12.9694 4.71937C12.8286 4.86011 12.7496 5.05098 12.7496 5.25C12.7496 5.44902 12.8286 5.63989 12.9694 5.78063L15.4397 8.25H6.75C6.55109 8.25 6.36032 8.32902 6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033C6.36032 9.67098 6.55109 9.75 6.75 9.75H15.4397L12.9694 12.2194C12.8286 12.3601 12.7496 12.551 12.7496 12.75C12.7496 12.949 12.8286 13.1399 12.9694 13.2806C13.1101 13.4214 13.301 13.5004 13.5 13.5004C13.699 13.5004 13.8899 13.4214 14.0306 13.2806L17.7806 9.53063C17.8504 9.46097 17.9057 9.37825 17.9434 9.2872C17.9812 9.19616 18.0006 9.09856 18.0006 9C18.0006 8.90144 17.9812 8.80384 17.9434 8.7128C17.9057 8.62175 17.8504 8.53903 17.7806 8.46937Z'
							fill='#232323'
						/>
					</svg>
				</Logout>
			</div>
			{children}
		</div>
	);
}

export default AccountWrapper;
