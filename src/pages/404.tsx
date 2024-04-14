import Wrapper from "@/components/pages/404/wrapper";

const NotFound = () => {
	return (
		<div>
			<Wrapper />
		</div>
	);
};

export default NotFound;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			messages: require(`@/../messages/${locale}.json`),
		},
	};
};
