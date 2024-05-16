import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import useAuthCheck from "@/hooks/use-access-page";
import Metadata from "@/layout/metadata";

interface props {}

const ClientSideWrapper = dynamic(
  () => import("@/components/pages/cart/order_placed/order-pickup/wrapper"),
  {
    ssr: false,
  },
);

const Index = (props: props) => {
  const t = useTranslations();
  useAuthCheck(true);
  return (
    <>
      <Head>
        <title>{t("header.order_placed")}</title>
        <Metadata />
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
