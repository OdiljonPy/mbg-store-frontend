import AccountNavigation from "@/components/pages/account/components/nav/navigation";
import AccountWrapper from "@/components/pages/account/wrapper";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface props {}

const Account = (props: props) => {
	const t = useTranslations();
	const { push } = useRouter();

	useEffect(() => {
		if (window.innerWidth > 991) {
			push("/account/profile");
		}
	}, [push]);

	return (
		<>
			<HeadWithSeo
				name={t("header.account")}
				url={"/account"}
				noIndex
				noFollow
			/>
			<AccountWrapper>
				<AccountNavigation />
			</AccountWrapper>
		</>
	);
};

export default Account;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
