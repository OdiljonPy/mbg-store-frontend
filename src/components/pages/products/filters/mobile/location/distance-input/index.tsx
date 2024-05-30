import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";
import css from "./index.module.css";
function DistanceInput() {
	const t = useTranslations();
	const { push, query } = useRouter();
	const searchParams = useSearchParams();
	const pathname: string = usePathname();
	const location = searchParams.get("location");
	const distance = searchParams.get("distance");

	const onChange = () => {
		push(
			{
				pathname,
				query: {
					...query,
					distance: distance,
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
	};

	return (
		<div className={css.wrapper}>
			<p>{t("location.distance")}</p>
			<div className={css.input}>
				<p className={css.text}>{t("from").toLowerCase()}</p>
				<input
					disabled={!location}
					value={distance || ""}
					className={css.value}
					onChange={onChange}
					type='number'
				/>
			</div>
		</div>
	);
}

export default DistanceInput;
