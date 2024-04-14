import Logo from "@/components/shared/logo/logo";
import ContactList from "./contact-list/contact-list";
import css from "./contacts.module.css";

const Contacts = () => {


	return (
		<div className={css.contacts}>
			<div className={css.logo}>
				<Logo />
			</div>
			<ContactList />
		</div>
	);
};

export default Contacts;
