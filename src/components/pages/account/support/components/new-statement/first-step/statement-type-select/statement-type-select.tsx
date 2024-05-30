import CheckCircle from "@/../public/images/icons/check-circle.svg";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/utils/cn";
import { UseFormReturn } from "react-hook-form";
import { supportTypeMap } from "../../../../constants/support/support-topic-map";
import { NewStatementForm } from "../../new-statement";

import { useTranslations } from "next-intl";
import css from "./statement-type-select.module.css";

interface Props {
	form: UseFormReturn<NewStatementForm>;
}

function StatementTypeSelect({ form }: Props) {
	const t = useTranslations("support.first_step");

	const [open, setOpen] = useState(false);
	const supportType = form.watch("topic");

	return (
		<div className={css.input_wrapper}>
			<div className={css.select} onClick={() => setOpen(!open)}>
				<p>
					{supportType
						? t(supportTypeMap[supportType])
						: t("select_topic")}
				</p>
				<span className={cn(css.arrow, open && css.active)}>
					<svg
						width='24'
						height='25'
						viewBox='0 0 24 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.0307 10.0306L12.5307 17.5306C12.461 17.6003 12.3783 17.6556 12.2873 17.6933C12.1962 17.7311 12.0986 17.7505 12.0001 17.7505C11.9015 17.7505 11.8039 17.7311 11.7128 17.6933C11.6218 17.6556 11.5391 17.6003 11.4694 17.5306L3.96943 10.0306C3.8287 9.88982 3.74963 9.69895 3.74963 9.49993C3.74963 9.30091 3.8287 9.11003 3.96943 8.9693C4.11016 8.82857 4.30103 8.74951 4.50005 8.74951C4.69907 8.74951 4.88995 8.82857 5.03068 8.9693L12.0001 15.9396L18.9694 8.9693C19.0391 8.89962 19.1218 8.84435 19.2129 8.80663C19.3039 8.76892 19.4015 8.74951 19.5001 8.74951C19.5986 8.74951 19.6962 8.76892 19.7872 8.80663C19.8783 8.84435 19.961 8.89962 20.0307 8.9693C20.1004 9.03899 20.1556 9.12171 20.1933 9.21276C20.2311 9.3038 20.2505 9.40138 20.2505 9.49993C20.2505 9.59847 20.2311 9.69606 20.1933 9.7871C20.1556 9.87815 20.1004 9.96087 20.0307 10.0306Z'
							fill='#C2C2C2'
						/>
					</svg>
				</span>
			</div>
			<ul className={cn(css.select_options, open && css.visible)}>
				{Object.entries(supportTypeMap).map((item: [any, string]) => (
					<li
						className={css.option}
						key={item[0]}
						onClick={() => {
							form.setValue("topic", item[0]);
							setOpen(false);
						}}
					>
						<p>{t(item[1])}</p>
						{supportTypeMap[supportType] === item[1] && (
							<Image src={CheckCircle} alt={""} />
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default StatementTypeSelect;
