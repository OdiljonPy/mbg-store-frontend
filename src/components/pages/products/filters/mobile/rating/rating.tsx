import TopBar from "@/components/pages/products/filters/mobile/categories/top-bar/top-bar";
import { useRatingList } from "@/components/pages/products/filters/mobile/hooks/use-rating-list/use-rating-list";
import css from "@/components/pages/products/filters/mobile/mobile-filters/mobile-filters.module.css";
import Body from "@/components/pages/products/filters/mobile/rating/body/body";
import Option from "@/components/pages/products/filters/mobile/rating/option/option";
import Button from "@/components/shared/button";
import DrawerHeader from "@/components/shared/drawer-header/drawer-header";
import Switch from "@/components/shared/switch/switch";
import { useModal } from "@/hooks/use-modal";
import { Drawer } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useReset } from "../hooks/use-reset";

const Rating = () => {
	const t = useTranslations();
	const items = useRatingList();
	const { open, onOpen, onClose } = useModal(true);
	const { onReset } = useReset(["rating", "withFeedback"]);

	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();

	const rating = searchParams.get("rating");
	const withFeedback = searchParams.get("withFeedback");

	const onEnableSales = (checked: boolean) => {
		const queries: ParsedUrlQuery = {
			...query,
		};
		if (checked) {
			queries.withFeedback = "true";
		} else {
			delete queries.withFeedback;
		}
		push(
			{
				pathname,
				query: {
					...queries,
					changeFilter:
						searchParams.get("changeFilter") === "true"
							? "false"
							: "true",
				},
			},
			undefined,
			{
				scroll: false,
			}
		);
		onClose();
	};

	return (
		<>
			<div className={css.item}>
				<TopBar
					resetItems={["rating", "withFeedback"]}
					title={t("rating.title")}
					onOpen={onOpen}
				/>
				<Switch
					checked={!!withFeedback}
					title={t("products.withFeedbacks")}
					onChange={onEnableSales}
				/>
				<Body />
			</div>
			<Drawer
				classNames={{
					body: "custom-body",
				}}
				open={open}
				closeIcon={false}
				placement={"bottom"}
				height={"100%"}
				onClose={onClose}
			>
				<DrawerHeader
					options={{
						title: t("rating.title"),
						onClose,
						onReset,
						count: rating ? 1 : undefined,
					}}
				/>
				<div className={css.inner}>
					<Switch
						checked={!!withFeedback}
						title={t("products.withFeedbacks")}
						onChange={onEnableSales}
					/>
					{items.map((item) => (
						<Option item={item} key={item.key} />
					))}
				</div>
				<div className={css.fixed_btn}>
					<Button full onClick={onClose}>
						{t("apply")}
					</Button>
				</div>
			</Drawer>
		</>
	);
};

export default Rating;
