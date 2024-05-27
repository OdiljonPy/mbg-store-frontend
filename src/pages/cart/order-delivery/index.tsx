import useAuthCheck from "@/hooks/use-access-page";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

interface props {}

const ClientSideWrapper = dynamic(
	() => import("@/components/pages/cart/order_placed/order-delivery/wrapper"),
	{
		ssr: false,
	}
);
const Index = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true);
	return (
		<>
			<HeadWithSeo
				name={t("header.order_placed")}
				url={"/cart/order-delivery"}
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
