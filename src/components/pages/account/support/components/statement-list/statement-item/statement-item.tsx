import { ISupport } from "@/data-types/support";

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

	const getExtension = (file: string) => {
		return file.split(".").pop();
	};

	const isImage = (file: string) => {
		const imageExtensions = ["jpg", "jpeg", "png"];

		const extension = getExtension(file);

		if (!extension) return false;

		return imageExtensions.includes(extension);
	};

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
					{statementItem.is_closed ? (
						<Badge status={"CLOSED"}>Закрыта</Badge>
					) : (
						<Badge status={"PROCESSING"}>В обработке</Badge>
					)}
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
							{isImage(file.file) ? (
								<Image
									className={css.img}
									src={file.file}
									alt={file.file.toString()}
									width={100}
									height={100}
								/>
							) : (
								<div className={css.file}>
									<svg
										width='30'
										height='31'
										viewBox='0 0 30 31'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M25.0383 10.1492L18.4758 3.58672C18.3887 3.49969 18.2852 3.43067 18.1714 3.38362C18.0576 3.33657 17.9357 3.3124 17.8125 3.3125H6.5625C6.06522 3.3125 5.58831 3.51004 5.23667 3.86167C4.88504 4.21331 4.6875 4.69022 4.6875 5.1875V25.8125C4.6875 26.3098 4.88504 26.7867 5.23667 27.1383C5.58831 27.49 6.06522 27.6875 6.5625 27.6875H23.4375C23.9348 27.6875 24.4117 27.49 24.7633 27.1383C25.115 26.7867 25.3125 26.3098 25.3125 25.8125V10.8125C25.3126 10.6893 25.2884 10.5674 25.2414 10.4536C25.1943 10.3398 25.1253 10.2363 25.0383 10.1492ZM17.8125 10.8125V5.65625L22.9688 10.8125H17.8125Z'
											fill='#39B969'
										/>
									</svg>
									<p className={css.file_ext}>
										.
										{getExtension(file.file)?.toUpperCase()}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default StatementItem;
