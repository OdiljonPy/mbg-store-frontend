import Wrapper from "@/components/pages/offer/wrapper";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import OfferLayout from "@/layout/custom-layout/offer/layout-offer";

const Offer:NextPageWithLayout = () => {
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

Offer.getLayout = ((page:ReactElement)=>{
	return(
		<OfferLayout>{page}</OfferLayout>
	)
})

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
export default Offer;
