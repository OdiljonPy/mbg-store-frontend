import Wrapper from "@/components/pages/products/wrapper/wrapper";
import HeadWithSeo from "@/layout/metadata";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

interface props {}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      messages: require(`@/../messages/${locale}.json`),
    },
  };
};

const Index = (props: props) => {
  const t = useTranslations();
  return (
    <>
      <HeadWithSeo name={t("products.title")} url={"/products"} />
      <Wrapper />
    </>
  );
};

type Props = {};

export default Index;
