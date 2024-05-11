import React, { useEffect, useState } from "react";
import css from "@/components/pages/products/wrapper/wrapper.module.css";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface props {}

const Title = (props: props) => {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const { categories } = useSelector((state: RootState) => state.category);
  const search: string | null = searchParams.get("search");
  const categoryId = searchParams.get("category_id");
  const [category, setCategory] = useState(searchParams.get("category"));
  const chooseTitle = () => {
    if (search || category) {
      if (search) {
        return `${t("products.title")}: ${search}`;
      }
      return category;
    }
    return t("categories.all");
  };

  useEffect(() => {
    const newCategory = categories?.find(
      (category) => category.id == Number(categoryId),
    )?.name;
    if (newCategory) {
      setCategory(newCategory);
    }
  }, [categories, categoryId]);

  return <h2 className={css.title}>{chooseTitle()}</h2>;
};

export default Title;
