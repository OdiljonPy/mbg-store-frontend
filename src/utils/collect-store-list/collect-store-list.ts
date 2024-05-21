import { IProduct, IStore } from "@/data-types/products/common";
import { IOrderItem } from "@/data-types/order/order";

export const CollectStoreList = (products: IOrderItem[]) => {
  const storeList: IStore[] = [];
  products?.forEach((product) => {
    const idx = storeList.findIndex(
      (store) => store.id === product.product.store.id,
    );
    if (idx === -1) storeList.push(product.product.store);
  });

  return storeList;
};
