import Nav from "@/layout/components/header/top-header/components/nav/nav";
import dynamic from "next/dynamic";
import css from "./top-header.module.css";

const AddressSelect = dynamic(
	() =>
		import(
			"@/layout/components/header/top-header/components/address-select/address-select"
		),
	{
		ssr: false,
	}
);

const TopHeader = () => {
	return (
		<div className={css.header}>
			<div className={"container"}>
				<div className={css.wrapper}>
					<AddressSelect />
					<Nav />
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
