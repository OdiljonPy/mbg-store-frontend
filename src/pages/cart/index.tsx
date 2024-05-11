import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";

interface props {}

import dynamic from "next/dynamic";

const ClientSideWrapper = dynamic(
  () => import("@/components/pages/cart/wrapper"),
  {
    ssr: false,
  },
);

const Index = (props: props) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("header.basket")}</title>
      </Head>
      <ClientSideWrapper />
    </>
  );
};

export default Index;

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  return {
    props: {
      messages: require(`@/../messages/${locale}.json`),
    },
  };
};
