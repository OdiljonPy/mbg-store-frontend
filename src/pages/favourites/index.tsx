import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Metadata from "@/layout/metadata";
import React from "react";

const ClientSideWrapper = dynamic(
  () => import("@/components/pages/favourites/wrapper"),
  {
    ssr: false,
  },
);

const Index = () => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{t("header.favourites")}</title>
        <Metadata name={t("header.favourites")} />
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
