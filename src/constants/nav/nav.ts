import { INav } from "@/layout/components/header/top-header/data-types/nav";

export const navigationList: INav[] = [
  {
    path: "/about",
    title: "header.about",
  },
  {
    path: "/stores",
    title: "header.stores",
    query: {
      letter: "a",
    },
  },
  {
    path: "/about",
    title: "header.faq",
  },
  {
    path: "/account",
    title: "account.title",
  },
  {
    path: "/account/orders",
    title: "account.orders",
  },
  {
    path: "/offer",
    title: "footer.offert",
  },
];

export const navTopList: INav[] = [
  {
    path: "/about",
    title: "header.about",
  },
  {
    path: "/stores",
    title: "header.stores",
    query: {
      letter: "a",
    },
  },
];
