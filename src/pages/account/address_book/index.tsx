import Wrapper from "@/components/pages/account/address-book/wrapper";
import AccountLayout from "@/components/pages/account/layout/account-layout";
import useAuthCheck from "@/hooks/use-access-page";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

interface props {}

const AddressBook = (props: props) => {
	const t = useTranslations();
	useAuthCheck(true);
	return (
		<>
			<AccountLayout>
				<HeadWithSeo
					name={t("header.address_book")}
					url={"/account/address_book"}
					noIndex
					noFollow
				/>
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
