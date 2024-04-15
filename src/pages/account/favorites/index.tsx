import AccountLayout from "@/components/pages/account/layout/account-layout";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Head from "next/head";
import useAuthCheck from "@/hooks/use-access-page";

interface props {}

const Wrapper = dynamic(
	() => import("@/components/pages/account/favorites/wrapper"),
	{
		ssr: false,
	}
);

const Favorites = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true)
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
