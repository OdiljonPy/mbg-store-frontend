import AccountLayout from "@/components/pages/account/layout/account-layout";
import useAuthCheck from "@/hooks/use-access-page";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

interface props {}

const Wrapper = dynamic(
	() => import("@/components/pages/account/favorites/wrapper"),
	{
		ssr: false,
	}
);

const Favorites = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true);
	return (
		<>
			<AccountLayout>
				<HeadWithSeo
					name={t("header.favorites")}
					url={"/account/favorites"}
					noIndex
					noFollow
				/>
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
