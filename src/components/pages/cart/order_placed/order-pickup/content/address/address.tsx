import AddressCard from "@/components/pages/cart/common/address-card/address-card";
import css from "@/components/pages/cart/order_placed/order-delivery/content/address/address.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { CollectStoreList } from "@/utils/collect-store-list/collect-store-list";
import { IOrderItem } from "@/data-types/order/order";
import { IStore } from "@/data-types/products/common";

interface props {
  products: IOrderItem[];
}

const Address = ({ products }: props) => {
  const t = useTranslations();
  console.log(products, "products");
  const storeList = useSelector((state: RootState) => state.basket.store_list);
  //   const [storeList,setStoreList] = useState([])
  useEffect(() => {
    const stores: IStore[] = CollectStoreList(products);
    console.log(stores, "new stores");
  }, [products]);
  return (
    <div className={css.address}>
      <p className={css.title}>{t("orders.pickup.title")}:</p>
      <div className={css.address_item}>
        {storeList.length &&
          storeList.map((store) => (
            <AddressCard type={"pick_up"} store={store} key={store?.id} />
          ))}
      </div>
    </div>
  );
};

export default Address;
