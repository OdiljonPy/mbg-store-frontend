import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const ClientSideWrapper = dynamic(
	() => import("@/components/pages/favourites/wrapper"),
	{
		ssr: false,
	}
);

const Index = () => {
	const t = useTranslations();
	return (
		<>
			<HeadWithSeo
				name={t("header.favourites")}
				url={"/favourites"}
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
