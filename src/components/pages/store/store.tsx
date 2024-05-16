import React, { useEffect } from "react";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { useTranslations } from "next-intl";
import Header from "@/components/pages/products/wrapper/header/header";
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";
import Intro from "@/components/pages/store/intro/intro";
import Metadata from "@/layout/metadata";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchStoreSingle } from "@/slices/all_store/StoriesSlices";

interface props {}

const Store = (props: props) => {
  const t = useTranslations();
  const {
    query: { id },
  } = useRouter();
  const { loading, single_store } = useSelector(
    (state: RootState) => state.all_stories,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchStoreSingle(id));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>{single_store?.brand_name}</title>
        <Metadata name={single_store?.brand_name} />
      </Head>
      <section className={css.results}>
        <div className={"container"}>
          <Breadcrumbs
            items={[
              {
                path: "/",
                label: t("header.home"),
              },
              {
                path: "/stores",
                label: t("header.stores"),
              },
              {
                path: "",
                label: "Деревенская лавка",
              },
            ]}
          />
          <Intro store={single_store} loading={loading} />
          <Header />
          <div className={`${css.wrapper}`}>
            <Filters />
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
