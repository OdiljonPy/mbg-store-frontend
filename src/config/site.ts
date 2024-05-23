export const siteConfig = {
	name: "MBG Store",
	description:
		"Широкий ассортимент товаров со скидками: еда, овощи и фрукты, молочные продукты, мясные продукты, напитки, замороженные продукты, всё для дома и многое другое. Быстрая доставка. Ежедневные скидки и акции на MBG Store!",
	url: "https://www.mbgstore.uz",
	ogImage: "https://www.mbgstore.uz/og.png",
} as const;

export type SiteConfig = typeof siteConfig;
