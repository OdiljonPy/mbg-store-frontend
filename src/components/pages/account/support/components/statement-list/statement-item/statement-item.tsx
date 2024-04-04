import { EnumSupportStatus, ISupport } from "@/data-types/support";

import { supportStatusMap } from "@/components/pages/account/support/constants/support/support-status-map";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import Badge from "../../badge/badge";

import css from "./statement-item.module.css";

interface Props {
	statementItem: ISupport;
}
function StatementItem({ statementItem }: Props) {
	const [showMore, setShowMore] = React.useState(false);

	return (
		<div className={css.card}>
			<header className={css.header}>
				<div className={css.header_left}>
					<h3 className={css.title}>Заявка № {statementItem.id}</h3>
					<p className={css.subtitle}>{statementItem.topic}</p>
				</div>
				<div className={css.header_right}>
					<p className={css.date}>
						{dayjs(statementItem.date).format("D MMMM YYYY г.")}
					</p>
					<Badge status={EnumSupportStatus[statementItem.status]}>
						{supportStatusMap[statementItem.status]}
					</Badge>
				</div>
			</header>
			<div className={css.body}>
				<div className={css.text_wrapper}>
					<p className={css.description}>
						{showMore && statementItem.description}
						{!showMore &&
							statementItem.description
								.split(" ")
								.slice(0, 30)
								.join(" ")}
					</p>
					{statementItem.description.split(" ").length > 30 && (
						<>
							{!showMore && (
								<button
									onClick={() => setShowMore(true)}
									className={css.btn}
								>
									Показать больше...
								</button>
							)}
							{showMore && (
								<button
									onClick={() => setShowMore(false)}
									className={css.btn}
								>
									Показать меньше
								</button>
							)}
						</>
					)}
				</div>
				<div className={css.files}>
					{statementItem.files.map((file) => (
						<div key={file.id} className={css.file_wrapper}>
							<Image
								className={css.file}
								src={file.file}
								alt={file.file.toString()}
								width={100}
								height={100}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default StatementItem;
