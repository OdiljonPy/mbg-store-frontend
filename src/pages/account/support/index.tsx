import Wrapper from "@/components/pages/account/support/wrapper";
import AccountLayout from "@/components/pages/account/layout/account-layout";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import useAuthCheck from "@/hooks/use-access-page";

interface props {}

const Support = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true)
	return (
		<>
			<AccountLayout>
				<Head>
					<title>{t("header.support")}</title>
				</Head>
				<Wrapper />
			</AccountLayout>
		</>
	);
};

export default Support;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
