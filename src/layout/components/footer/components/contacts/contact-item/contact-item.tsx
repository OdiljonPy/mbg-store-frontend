import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import Link from "next/link";

import Skeleton from "react-loading-skeleton";
import css from "./contact-item.module.css";

interface props {
	icon: StaticImageData;
	label: string;
	path: string;
	title: string;
	loading: boolean;
}

const ContactItem = ({ icon, label, path, title , loading}: props) => {
	const t = useTranslations();

	if (loading) return <div className={css.item}>
		<Skeleton width={100} height={20} />
		<Skeleton width={300} height={20} />
	</div>
	
	return (
			<Link href={path} className={css.item}>
				<div className={css.top}>
					<span className={css.icon}>
						<ResponsiveImage src={icon} alt={title} />
					</span>
					<span className={css.label}>{t(label)}</span>
				</div>
				<div className={css.text}>{title}</div>
			</Link>
	);
};

export default ContactItem;
