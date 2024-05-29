import { siteConfig } from "@/config/site";
import Head from "next/head";

interface Props {
	name?: string;
	description?: string;
	url?: string;
	ogImage?: string;
	noIndex?: boolean;
	noFollow?: boolean;
}

const HeadWithSeo = ({
	name,
	description = siteConfig.description,
	url = "",
	ogImage = siteConfig.ogImage,
	noFollow = false,
	noIndex = false,
}: Props) => {
	name = name ? `${name} - ${siteConfig.name}` : siteConfig.name;

	return (
		<Head>
			<title>{name}</title>
			<meta
				name='robots'
				content={
					(noIndex ? "noindex" : "index") +
					(noIndex ? ", " : "") +
					(noFollow ? "nofollow" : "follow")
				}
				key='robots'
			/>
			<meta name='description' content={description} key='description' />
			<link rel='icon' href='/logos/favicon.ico' key='icon' />
			<link
				rel='apple-touch-icon'
				href='/logos/apple-touch-icon'
				key='apple-touch-icon'
			/>
			<link
				rel='shortcut icon'
				href='/logos/favicon-16x16.png'
				key='shortcut-icon'
			/>
			<meta property='og:title' content={name} key='og:title' />
			<meta
				property='og:description'
				content={description}
				key='og:description'
			/>
			<meta
				property='og:url'
				content={siteConfig.url + url}
				key='og:url'
			/>
			<meta property='og:site_name' content={name} key='og:site_name' />
			<meta property='og:type' content='website' key='og:type' />
			<meta property='og:image' content={ogImage} key='og:image' />
			<meta property='og:image:alt' content={name} key='og:image:alt' />
			<meta
				name='twitter:card'
				content='summary_large_image'
				key='twitter:card'
			/>
			<meta name='twitter:title' content={name} key='twitter:title' />
			<meta
				name='twitter:description'
				content={description}
				key='twitter:description'
			/>
			<meta name='twitter:image' content={ogImage} key='twitter:image' />
		</Head>
	);
};

export default HeadWithSeo;
