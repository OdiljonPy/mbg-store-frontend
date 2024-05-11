import React from "react";
import css from "./category-item.module.css";
import Link from "next/link";
import { ICategory } from "@/data-types/categories/categories";

interface props {
  category: ICategory;
  classNames?: string;
}

const CategoryItem = ({ category, classNames }: props) => {
  const { id, name, image } = category;

  return (
    <Link
      style={{
        backgroundImage: `url(${image})`,
        objectFit: "cover",
      }}
      href={{
        pathname: "/products",
        query: {
          category_id: id,
          sort: "popular",
        },
      }}
      className={`${css.item} ${classNames ?? ""}`}
    >
      <span className={css.title}>{name}</span>
    </Link>
  );
};

export default CategoryItem;
