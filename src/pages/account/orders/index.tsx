import AccountLayout from "@/components/pages/account/layout/account-layout";
import Wrapper from "@/components/pages/account/orders/wrapper";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import useAuthCheck from "@/hooks/use-access-page";

interface props {}

const Orders = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true)
	return (
		<>
			<AccountLayout>
				<Head>
					<title>{t("header.orders")}</title>
				</Head>
				<Wrapper />
			</AccountLayout>
		</>
	);
};

export default Orders;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
