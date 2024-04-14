import React from "react";
import css from "./navigation.module.css";
import Link from "next/link";
import { navigationList } from "@/constants/nav/nav";
import { useTranslations } from "next-intl";

interface props {}

const Navigation = (props: props) => {
	const t = useTranslations();
	return (
		<nav className={css.nav}>
			{navigationList.map(({ path, title, query }) => (
				<Link
					href={{
						pathname: path,
						query,
					}}
					className={css.link}
					key={path}
				>
					{t(title)}
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
