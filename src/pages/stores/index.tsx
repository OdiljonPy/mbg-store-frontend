import Wrapper from "@/components/pages/stores/wrapper/wrapper";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

interface props {}

const Index = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<HeadWithSeo name={t("header.stores")} url={"/stores"} />
			<Wrapper />
		</>
	);
};

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
export default Index;
