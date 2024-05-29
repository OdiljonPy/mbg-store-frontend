import React from "react";
import css from "./intro.module.css";
import Info from "@/components/pages/store/intro/info/info";
import Deliveries from "@/components/pages/store/intro/deliveries/deliveries";
import { IStores } from "@/data-types/stores/stores";

interface props {
  store: IStores;
  loading: boolean;
}

const Intro = ({ store, loading }: props) => {
  return (
    <section className={css.info}>
      <Info store={store} loading={loading} />
      <Deliveries />
    </section>
  );
};

export default Intro;
