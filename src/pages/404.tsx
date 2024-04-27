import Wrapper from "@/components/pages/404/wrapper";
import Head from "next/head";
import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import NotFoundLayout from "@/layout/not-found/NotFoundLayout";

const NotFound:NextPageWithLayout = () => {
	return (
		<div>
			<Head>
				<title>Page Not Found</title>
			</Head>
			<Wrapper />
		</div>
	);
};

NotFound.getLayout = function getLayout (page:ReactElement){
	return (
			<NotFoundLayout>{page}</NotFoundLayout>
	)
}

export default NotFound;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
