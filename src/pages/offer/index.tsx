import Wrapper from "@/components/pages/offer/wrapper";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

const Offer = () => {
	const t = useTranslations();
	return (
		<>
			<Head>
				<title>{t("header.offer")}</title>
			</Head>
			<Wrapper />
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
export default Offer;
