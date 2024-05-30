import React, { useEffect } from "react";
import { notification, Space } from "antd";
import css from "./notification-store.module.css";
import Button from "@/components/shared/button";
import { useTranslations } from "next-intl";

interface props {
  open: boolean;
  setOpen: (status: boolean) => void;
}
const NotificationStore = ({ open, setOpen }: props) => {
  const t = useTranslations("notification");
  const [api, contextHolder] = notification.useNotification();
  const close = () => {
    setOpen(false);
  };

  const agree = () => {
    localStorage.setItem("storeCheckOne", "yes");
    close();
  };
  const disAgree = () => {
    close();
    api.destroy();
  };

  const notShowAgain = () => {
    localStorage.setItem("storeCheckMore", "yes");
    close();
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button className={css.btn} variant="primary" onClick={agree}>
          {t("agree")}
        </Button>
        <Button className={css.btn} variant="secondary" onClick={disAgree}>
          {t("disagree")}
        </Button>
        <Button className={css.btn} variant="tertiary" onClick={notShowAgain}>
          {t("notShowAgain")}
        </Button>
      </Space>
    );
    api.open({
      message: t("title"),
      description: t("description"),
      btn,
      key,
      onClose: close,
    });
  };

  useEffect(() => {
    openNotification();
  }, [open]);

  return <>{open && contextHolder}</>;
};

export default NotificationStore;
