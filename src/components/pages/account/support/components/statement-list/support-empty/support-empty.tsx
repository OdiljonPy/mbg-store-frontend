import Image from "next/image";

import NewStatement from "../../new-statement/new-statement";
import css from "./support-empty.module.css";
import {useTranslations} from "next-intl";

function SupportEmpty() {
	const t = useTranslations()
	return (
		<div className={css.wrapper}>
			<div className={css.image_wrapper}>
				<Image
					className={css.image}
					src='/images/account/support/support-empty.png'
					alt='empty-support'
					width={200}
					height={180}
				/>
			</div>
			<p className={css.text}>{t('support.empty_section')}</p>
			<NewStatement />
		</div>
	);
}

export default SupportEmpty;
