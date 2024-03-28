import Wrapper from "@/components/pages/account/address-book/wrapper";
import AccountLayout from "@/components/pages/account/layout/account-layout";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

interface props {}

const AddressBook = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<AccountLayout>
				<Head>
					<title>{t("header.address_book")}</title>
				</Head>
				<Wrapper />
			</AccountLayout>
		</>
	);
};

export default AddressBook;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
