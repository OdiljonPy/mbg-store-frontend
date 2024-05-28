import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import css from "./delivery-address.module.css";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { CollectStoreList } from "@/utils/collect-store-list/collect-store-list";
import { IOrderItem } from "@/data-types/order/order";
import { IStore } from "@/data-types/products/common";
import OrderedItemSkeleton from "@/components/pages/account/orders/order/ordered-item-list/skeleton/skeleton";

interface props {
  products: IOrderItem[];
  loading: boolean;
  create_at?: string;
}

const Address = ({ products, loading, create_at }: props) => {
  const t = useTranslations();
  const [storeList, setStoreList] = useState<IStore[]>([]);
  useEffect(() => {
    const stores: IStore[] = CollectStoreList(products);
    setStoreList(stores);
  }, [products]);
  return (
    <div className={css.address}>
      <p className={css.title}>{t("orders.pickup.title")}:</p>
      {loading ? (
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <OrderedItemSkeleton key={index} />
          ))}
        </>
      ) : (
        <div className={css.address_item}>
          {storeList.length
            ? storeList?.map((store) => (
                <AddressCard
                  create_at={create_at}
                  type={"pick_up"}
                  store={store}
                  showText
                  key={store?.id}
                />
              ))
            : ""}
        </div>
      )}
    </div>
  );
};

export default Address;
