import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

interface props {}

import HeadWithSeo from "@/layout/metadata";
import dynamic from "next/dynamic";

const ClientSideWrapper = dynamic(
	() => import("@/components/pages/cart/wrapper"),
	{
		ssr: false,
	}
);

const Index = (props: props) => {
	const t = useTranslations();

	return (
		<>
			<HeadWithSeo
				name={t("header.basket")}
				url={"/cart"}
				noIndex
				noFollow
			/>
			<ClientSideWrapper />
		</>
	);
};

export default Index;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
