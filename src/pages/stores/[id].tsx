import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Store from "@/components/pages/store/store";

interface props {}

const Id = (props: props) => {
  return (
    <>
      <Store />
    </>
  );
};

export default Id;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      messages: require(`@/../messages/${locale}.json`),
    },
  };
};
