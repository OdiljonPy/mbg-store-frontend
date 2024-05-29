"use client";

import Filters from "@/components/pages/products/filters/filters";
import ProductList from "@/components/pages/products/product-list/product-list";
import Header from "@/components/pages/products/wrapper/header/header";
import Breadcrumbs from "@/components/shared/breadcrumbs/breadcrumbs";
import { fetchCategory } from "@/slices/category/categorySlices";
import { AppDispatch, RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./wrapper.module.css";

interface props {}

const Wrapper = ({}: props) => {
  const t = useTranslations();
  const { categories } = useSelector((state: RootState) => state.category);
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category_id");
  const dispatch = useDispatch<AppDispatch>();

  const [category, setCategory] = useState(searchParams.get("category"));

  // fetch category
  useEffect(() => {
    dispatch(fetchCategory(40));
  }, [dispatch]);

  useEffect(() => {
    const newCategory = categories?.find(
      (category) => category.id == Number(categoryId),
    )?.name;
    if (newCategory) {
      setCategory(newCategory);
    }
  }, [categories, categoryId]);

  return (
    <section className={css.results}>
      <div className={"container"}>
        <Breadcrumbs
          items={[
            {
              path: "/",
              label: t("header.home"),
            },
            {
              path: "/products",
              label: category ?? t("categories.all"),
            },
          ]}
        />
        <Header />
        <div className={`${css.wrapper}`}>
          <Filters />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Wrapper;
