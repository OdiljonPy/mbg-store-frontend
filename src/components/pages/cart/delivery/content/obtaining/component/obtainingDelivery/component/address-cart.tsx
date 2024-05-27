import css from "./adress-cart.module.css";
import DeleteSVG from "@/components/pages/cart/delivery/total-sum/deleteSVG";
import EditIcon from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/edit_icon";
import InfoSVG from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/icon/infoSVG";
import { useEffect, useState } from "react";
import InputRadio from "@/components/pages/cart/delivery/content/obtaining/component/obtainingDelivery/component/input/input_radio";
import { IShipping } from "@/data-types/shipping";
import WarningText from "@/components/pages/cart/common/warning-text/warning-text";
import EditAddressModal from "@/components/shared/address/modals/edit-address-modal";
import DeleteAddressModal from "@/components/shared/address/modals/delete-address-modal";
interface props {
  fetchActive: (e: IShipping) => void;
  active: number | undefined;
  shipping: IShipping;
}

const AddressCart = ({ fetchActive, active, shipping }: props) => {
  return (
    <div className={`${css.cart} ${shipping.id == active ? css.active : ""}`}>
      <div className={css.cart_header}>
        <div className={css.info}>
          <label
            className={`${css.custom_radio} ${shipping.id == active ? css.active : ""}`}
          >
            <input
              type="radio"
              checked={active == shipping.id}
              onClick={() => fetchActive(shipping)}
              value={shipping.id}
              name="radio"
            />
            <span className={css.custom_radio_button}></span>
          </label>
          <div>
            <p className={css.title}>
              {shipping.address_name}{" "}
              <span
                className={`${css.badge} ${active == shipping.id ? css.show : css.hidden}`}
              >
                основной
              </span>
            </p>
            <p className={css.address}>{shipping.address}</p>
          </div>
        </div>
        {/*fot action*/}
        <div className={css.action}>
          <EditAddressModal deliveryItem={shipping}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3103 6.87817L17.1216 2.68848C16.9823 2.54916 16.8169 2.43864 16.6349 2.36324C16.4529 2.28783 16.2578 2.24902 16.0608 2.24902C15.8638 2.24902 15.6687 2.28783 15.4867 2.36324C15.3047 2.43864 15.1393 2.54916 15 2.68848L3.43969 14.2497C3.2998 14.3885 3.18889 14.5537 3.11341 14.7358C3.03792 14.9178 2.99938 15.113 3.00001 15.31V19.4997C3.00001 19.8976 3.15804 20.2791 3.43935 20.5604C3.72065 20.8417 4.10218 20.9997 4.50001 20.9997H8.6897C8.88675 21.0004 9.08197 20.9618 9.26399 20.8863C9.44602 20.8109 9.61122 20.6999 9.75001 20.56L21.3103 8.99973C21.4496 8.86044 21.5602 8.69507 21.6356 8.51306C21.711 8.33105 21.7498 8.13596 21.7498 7.93895C21.7498 7.74194 21.711 7.54686 21.6356 7.36485C21.5602 7.18284 21.4496 7.01747 21.3103 6.87817ZM4.81032 14.9997L12.75 7.06005L14.3147 8.62473L6.37501 16.5635L4.81032 14.9997ZM4.50001 16.81L7.1897 19.4997H4.50001V16.81ZM9.00001 19.1894L7.43532 17.6247L15.375 9.68505L16.9397 11.2497L9.00001 19.1894ZM18 10.1894L13.8103 5.99973L16.0603 3.74973L20.25 7.93848L18 10.1894Z"
                fill="#999999"
              />
            </svg>
          </EditAddressModal>
          <DeleteAddressModal
            shippingId={shipping.id}
            shippingName={shipping.address_name}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z"
                fill="#999999"
              />
            </svg>
          </DeleteAddressModal>
        </div>
      </div>

      {/*warning test*/}
      {/*{*/}
      {/*    shipping.id == active &&*/}
      {/*    <WarningText><p className={css.status_text}>Примерная дата доставки: <span>18 декабря 2023 г.</span> </p></WarningText>*/}
      {/*}*/}
    </div>
  );
};

export default AddressCart;
