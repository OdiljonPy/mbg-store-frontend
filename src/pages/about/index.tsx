import Faq from "@/components/pages/about/faq/faq";
import Information from "@/components/pages/about/information/information";
import Partners from "@/components/pages/about/partners/partners";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import css from "./index.module.css";

interface props {}

const Index = (props: props) => {
	const t = useTranslations();
	return (
		<>
			<HeadWithSeo name={t("header.about")} url={"/about"} />
			<section className={css.about}>
				<div className={"container"}>
					<Breadcrumbs
						items={[
							{
								path: "/",
								label: t("header.home"),
							},
							{
								path: "/about",
								label: t("header.about"),
							},
						]}
					/>
				</div>

				<Information />
				<Partners />
				<Faq />
			</section>
		</>
	);
};

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
export default Index;
