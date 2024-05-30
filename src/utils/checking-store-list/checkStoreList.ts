import { IProduct, IStore } from "@/data-types/products/common";
export const CheckStoreList = (
  products: IProduct[],
  store: IStore,
): boolean => {
  let res = false;
  if (
    localStorage.getItem("storeCheckOne") ||
    localStorage.getItem("storeCheckMore")
  ) {
    res = true;
  } else {
    if (!products.length) {
      res = true;
      return res;
    }
    const idx = products.findIndex((product) => product.store.id === store.id);
    res = !(idx == -1);
  }

  return res;
};
