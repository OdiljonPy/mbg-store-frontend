import { siteConfig } from "@/config/site";

interface Props {
	name?: string;
	description?: string;
	url?: string;
	ogImage?: string;
}

const Metadata = ({
	name = siteConfig.name,
	description = siteConfig.description,
	url = siteConfig.url,
	ogImage = siteConfig.ogImage,
}: Props) => {
	return (
		<>
			<title>{name}</title>
			<meta name='description' content={description} />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<link rel='icon' href='/logos/favicon.ico' />
			<link rel='apple-touch-icon' href='/logos/apple-touch-icon' />
			<link rel='shortcut icon' href='/logos/favicon-16x16.png' />
			<meta property='og:title' content={name} />
			<meta property='og:description' content={description} />
			<meta property='og:url' content={url} />
			<meta property='og:site_name' content={name} />
			<meta property='og:type' content='website' />
			<meta property='og:image' content={ogImage} />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' />
			<meta property='og:image:alt' content={name} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={name} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={ogImage} />
		</>
	);
};

export default Metadata;
