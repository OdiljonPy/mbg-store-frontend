import Wrapper from "@/components/pages/account/orders/order/wrapper";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface props {}

const Order = (props: props) => {
  const router = useRouter();
  return (
    <>
      <Wrapper orderId={Number(router.query.id)} />
    </>
  );
};

export default Order;

type Props = {};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => {
  return {
    props: {
      messages: require(`@/../messages/${locale}.json`),
    },
  };
};
