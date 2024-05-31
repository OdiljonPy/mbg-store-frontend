import { siteConfig } from "@/config/site";
import { IProductsWithPagination, IStore } from "@/data-types/products/common";
import axios from "axios";

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_BASE_URL;

function generateSiteMap({
	products,
	stores,
}: {
	products: IProductsWithPagination;
	stores: IStore[];
}) {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!--We manually set the two URLs we know already-->
	<url>
	<loc>${siteConfig.url}/uz</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.80</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.80</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/about</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/about</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/stores</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/stores</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/products?sort=popular&amp;onSales=true</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/products?sort=popular</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/catalog</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/products?sort=popular&amp;onSales=true</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/products?sort=popular</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/catalog</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/products</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/products</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/uz/catalog</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<url>
	<loc>${siteConfig.url}/ru/catalog</loc>
	<lastmod>${new Date().toISOString()}</lastmod>
	<priority>0.64</priority>
	</url>
	<!-- sitemap for products -->
  ${products?.content
		?.map(
			({ id }) => `<url>
				<loc>${siteConfig.url}/ru/products/${id}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>weekly</changefreq>
				<priority>0.55</priority>
			</url>
			<url>
				<loc>${siteConfig.url}/uz/products/${id}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>weekly</changefreq>
				<priority>0.55</priority>
			</url>
    `
		)
		.join("")}
		<!-- sitemap for stores -->
		${stores
			?.map(
				({ id }) => `<url>
				<loc>${siteConfig.url}/ru/stores/${id}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>monthly</changefreq>
				<priority>0.5</priority>
		 </url>
		 <url>
				<loc>${siteConfig.url}/uz/stores/${id}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>monthly</changefreq>
				<priority>0.5</priority>
		 </url>
		`
			)
			.join("")}
  </urlset>
`;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
	// We make an API call to gather the URLs for our site
	const products = await getProducts();
	const stores = await getStores();

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap({
		products,
		stores,
	});

	res.setHeader("Content-Type", "text/xml");
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

const getProducts = async () => {
	const res = await axios.get<{ result: IProductsWithPagination }>(
		EXTERNAL_DATA_URL + "/store/products/",
		{
			params: { size: 10000 },
		}
	);

	return res.data.result;
};

const getStores = async () => {
	const res = await axios.get<{ result: IStore[] }>(
		EXTERNAL_DATA_URL + "/store/"
	);

	return res.data.result;
};

export default SiteMap;
