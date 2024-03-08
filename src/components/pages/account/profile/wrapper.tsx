import { useTranslations } from "next-intl";
import Header from "./header/header";
import PersonalData from "./personal-data/personal-data";
import Security from "./security/security";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = (props: props) => {
	const t = useTranslations();
	return (
		<section className={css.profile}>
			<Header />
			<div className={css.forms}>
				<PersonalData />
				<Security />
			</div>
		</section>
	);
};

export default Wrapper;
