import { fetchUser } from "@/slices/auth/user";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header/header";
import PersonalData from "./personal-data/personal-data";
import Security from "./security/security";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = (props: props) => {
	const { user, loading, error } = useSelector(
		(state: RootState) => state.user
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<section className={css.profile}>
			<Header />
			<div className={css.forms}>
				<PersonalData
					user={user}
					loading={loading}
					error={error}
				/>
				<Security
					user={user}
					loading={loading}
					error={error}
				/>
			</div>
		</section>
	);
};

export default Wrapper;
