import React from "react";
import css from "./list.module.css";
import { navTopList } from "@/constants/nav/nav";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface props {
  onClose: () => void;
}

const List = ({ onClose }: props) => {
  const t = useTranslations();
  return (
    <ul className={css.list}>
      {navTopList.map(({ path, title }) => (
        <Link href={path} onClick={onClose} key={path} className={css.item}>
          {t(title)}
        </Link>
      ))}
    </ul>
  );
};

export default List;
