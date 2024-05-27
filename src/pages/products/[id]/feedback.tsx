import Feedback from "@/components/pages/feedback/feedback";
import HeadWithSeo from "@/layout/metadata";
import { GetServerSideProps } from "next";
import { useTranslations } from "next-intl";

interface props {}

const FeedbackPage = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<HeadWithSeo name={t("product.sendFeedback")} noIndex noFollow />
			<Feedback />
		</>
	);
};

export default FeedbackPage;

type Props = {};

export const getServerSideProps: GetServerSideProps<Props> = async ({
	locale,
}) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
