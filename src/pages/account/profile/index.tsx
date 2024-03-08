import AccountLayout from "@/components/pages/account/layout/account-layout";
import Wrapper from "@/components/pages/account/profile/wrapper";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

interface props {}

const Profile = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<AccountLayout>
				<Head>
					<title>{t("header.profile")}</title>
				</Head>
				<Wrapper />
			</AccountLayout>
		</>
	);
};

export default Profile;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
