import Checkbox from "@/components/shared/checkbox";
import Label from "@/components/shared/label";
import { useTranslations } from "next-intl";
import Link from "next/link";
import css from "./offer.module.css";

interface Props {
	offer: boolean;
	setOffer: (value: boolean) => void;
}

const Offer = ({ offer, setOffer }: Props) => {
	const t = useTranslations("auth.signUp");
	return (
		<div className={css.offer}>
			<Checkbox
				checked={offer}
				onChange={(e) => setOffer(e.target.checked)}
				className={css.offer}
				id={"offer"}
			/>
			<Label htmlFor='offer' className={css.text}>
				{t.rich("accept_terms", {
					terms: (terms) => <Link href=''>{terms}</Link>,
				})}
			</Label>
		</div>
	);
};

export default Offer;
