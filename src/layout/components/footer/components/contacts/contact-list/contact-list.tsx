// import ContactItem from "@/layout/components/footer/components/contacts/contact-item/contact-item";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

import email from "@/../public/images/icons/email.svg";
import map from "@/../public/images/icons/map.svg";
import phone from "@/../public/images/icons/phone.svg";

import { formatPhoneNumber } from "@/utils/phone-format/phone-format";
import ContactItem from "../contact-item/contact-item";
import css from "./contact-list.module.css";
import Skeleton from "react-loading-skeleton";

const ContactList = () => {
	const { data, error, loading } = useSelector(
		(state: RootState) => state.about
	);

	if (error) return <p>Что-то пошло не так</p>;

	return (
		<ul className={css.list}>
			<ContactItem
				icon={phone}
				label='footer.phone'
				title={formatPhoneNumber(data.phone) || "Нет телефона"}
				path={data?.phone}
				loading={loading}
			/>
			<ContactItem
				icon={email}
				label='footer.email'
				title={data?.email}
				path={data?.email}
				loading={loading}
			/>
			<ContactItem
				icon={map}
				label='footer.address'
				title={data?.address}
				path={data?.address}
				loading={loading}
			/>
		</ul>
	);
};

export default ContactList;
