import { raleway } from "@/constants/fonts/fonts";
import Chat from "@/layout/components/chat/chat";
import Footer from "@/layout/components/footer/footer";
import Header from "@/layout/components/header/header";
import MobileNavbar from "@/layout/components/mobile_navbar/mobile_navbar";
import Head from "next/head";
import { PropsWithChildren } from "react";
import css from "./layout.module.css";
import Metadata from "./metadata";

const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Head>
				<Metadata />
			</Head>
			<div className={`${css.content} ${raleway.className}`}>
				<Header />
				<main className={css.main}>{children}</main>

				<Footer />
				<div className={css.mobile_navbar}>
					<Chat />
					<MobileNavbar />
				</div>
			</div>
		</>
	);
};

export default Layout;
