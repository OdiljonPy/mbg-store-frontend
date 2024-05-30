import React from "react";
import css from "./copyright.module.css";
import { useTranslations } from "next-intl";

interface props {}

const Copyright = (props: props) => {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <div className={css.copyright_container}>
      <p className={css.copyright}>
        ©{year}. MBGstore - {t("footer.copyright")}
      </p>
      <a
        href="https://www.zerodev.uz"
        target="_blank"
        className={css.copyright_link}
      >
        Powered by : ZERODEV LLC
      </a>
    </div>
  );
};

export default Copyright;
