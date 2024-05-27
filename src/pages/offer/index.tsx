import Wrapper from "@/components/pages/offer/wrapper";
import OfferLayout from "@/layout/custom-layout/offer/layout-offer";
import HeadWithSeo from "@/layout/metadata";
import { NextPageWithLayout } from "@/pages/_app";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { ReactElement } from "react";

const Offer: NextPageWithLayout = () => {
	const t = useTranslations();
	return (
		<>
			<HeadWithSeo
				name={t("header.offer")}
				url={"/offer"}
				noIndex
				noFollow
			/>
			<Wrapper />
		</>
	);
};

Offer.getLayout = (page: ReactElement) => {
	return <OfferLayout>{page}</OfferLayout>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
export default Offer;
