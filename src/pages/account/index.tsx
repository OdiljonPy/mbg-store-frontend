import AccountNavigation from "@/components/pages/account/nav/navigation";
import AccountWrapper from "@/components/pages/account/wrapper";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

interface props {}

const Account = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<Head>
				<title>{t("header.account")}</title>
			</Head>
			<AccountWrapper>
				<AccountNavigation />
			</AccountWrapper>
		</>
	);
};

export default Account;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
