import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useTranslations } from "next-intl";
import Wrapper from "@/components/pages/stores/wrapper/wrapper";
import Metadata from "@/layout/metadata";

interface props {}

const Index = (props: props) => {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>{t("header.stores")}</title>
        <title>{t("header.stores")}</title>
        <Metadata name={t("header.stores")} />
      </Head>
      <Wrapper />
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
