import { siteConfig } from "@/config/site";

export default function handler(req: any, res: any) {
	const robots = `
    User-agent: *
    Disallow: /account
    Disallow: /cart
    Disallow: /favorites
    Disallow: /offer

    Sitemap: ${siteConfig.url}/sitemap.xml
  `;
	res.send(robots);
}
