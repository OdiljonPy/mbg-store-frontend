import Contacts from "@/layout/components/footer/components/contacts/contacts";
import Copyright from "@/layout/components/footer/components/copyright/copyright";
import Information from "@/layout/components/footer/components/information/information";
import MobileAppQr from "@/layout/components/footer/components/mobile-app-qr/mobile-app-qr";
import { fetchAbout } from "@/slices/base/about/aboutSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./footer.module.css";

interface props {}

const Footer = (props: props) => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchAbout());
	}, [dispatch]);

	return (
		<footer className={css.footer}>
			<div className={"container"}>
				<div className={css.wrapper}>
					<Contacts />
					<Information />
					<MobileAppQr />
				</div>
				<Copyright />
			</div>
		</footer>
	);
};

export default Footer;
