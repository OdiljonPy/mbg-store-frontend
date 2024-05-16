import AccountNavigation from "@/components/pages/account/components/nav/navigation";
import AccountWrapper from "@/components/pages/account/wrapper";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Metadata from "@/layout/metadata";
import useAuthCheck from "@/hooks/use-access-page";

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
      <Head>
        <title>{t("header.account")}</title>
        <Metadata />
      </Head>
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
