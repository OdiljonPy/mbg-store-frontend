import Wrapper from "@/components/pages/account/favorites/wrapper";
import AccountLayout from "@/components/pages/account/layout/account-layout";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

interface props {}

const Favorites = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<AccountLayout>
				<Head>
					<title>{t("header.favorites")}</title>
				</Head>
				<Wrapper />
			</AccountLayout>
		</>
	);
};

export default Favorites;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
