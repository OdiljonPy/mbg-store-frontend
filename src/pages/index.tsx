import Hero from "@/components/pages/home/hero/hero";
import Popular from "@/components/pages/home/popular/popular";
import Sales from "@/components/pages/home/sales/sales";
import Top from "@/components/pages/home/top/top";
import { GetStaticProps } from "next";
import Head from "next/head";

import dynamic from "next/dynamic";

const Near = dynamic(() => import("@/components/pages/home/near/near"), {
	ssr: false,
});

interface props {
	message: string;
}
export default function Home(props: props) {
	console.log(props);
	return (
		<>
			<Head>
				<title>MGB store</title>
			</Head>
			<Hero />
			<Sales />
			<Popular />
			<Near />
			<Top />
		</>
	);
}

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
