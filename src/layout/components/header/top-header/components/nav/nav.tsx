import React from "react";
import css from "./nav.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { raleway } from "@/constants/fonts/fonts";
import { navTopList } from "@/constants/nav/nav";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface props {}

const Nav = (props: props) => {
  const t = useTranslations();
  const { asPath } = useRouter();
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {navTopList.map(({ path, title, query }) => (
          <Link
            href={path}
            className={`${css.item} ${raleway.className} ${path === asPath ? css.active : ""}`}
            key={path}
          >
            {t(title)}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
