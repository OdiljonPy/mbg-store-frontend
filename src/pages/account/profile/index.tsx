import AccountLayout from "@/components/pages/account/layout/account-layout";
import Wrapper from "@/components/pages/account/profile/wrapper";
import useAuthCheck from "@/hooks/use-access-page";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

interface props {}

const Profile = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true);
	return (
		<>
			<AccountLayout>
				<HeadWithSeo
					name={t("header.profile")}
					url={"/account/profile"}
					noIndex
					noFollow
				/>
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
