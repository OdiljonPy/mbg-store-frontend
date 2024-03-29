import {
	EnumSupportStatus,
	EnumSupportType,
	ISupport,
} from "@/data-types/support";

import img6 from "@/../public/images/products/mountain.png";

export const data: ISupport[] = [
	{
		id: 1,
		email: "W0VdQ@example.com",
		date: "2023-12-15",
		description:
			"Меня зовут Алексей Смирнов, и я недавно сделал заказ в вашем интернет-магазине (номер заказа 12345, оформлен 15 декабря). Я хотел бы узнать статус моего заказа, так как на сайте указано. №123456, который включал в себя несколько №123456, который включал в себя несколько №123456, который включал в себя несколько",

		type: EnumSupportType.QUESTION,
		status: EnumSupportStatus.PROCESSING,
		files: [
			{
				id: 1,
				file: img6,
				supportId: 1,
			},
			{
				id: 1,
				file: img6,
				supportId: 1,
			},
			{
				id: 1,
				file: img6,
				supportId: 1,
			},
			{
				id: 1,
				file: img6,
				supportId: 1,
			},
		],
	},
	{
		id: 2,
		email: "W0VdQ@example.com",
		date: "2023-12-15",
		description:
			"Я пишу, чтобы выразить свое глубокое разочарование сервисом, предоставляемым вашим маркетплейсом. 5 декабря 2023 года я сделала заказ №123456, который включал в себя несколько предметов одежды. Согласно  №123456, который включал в себя несколько №123456, который включал в себя несколько №123456, который включал в себя несколько №123456, который включал в себя несколько",
		type: EnumSupportType.COMPLAINT,
		status: EnumSupportStatus.CLOSED,
	},
	{
		id: 3,
		date: "2023-12-15",
		email: "W0VdQ@example.com",
		description:
			"Рекомендую добавить опцию сортировки продуктов по дате истечения срока годности, чтобы облегчить покупку свежих продуктов.",
		type: EnumSupportType.FEEDBACK,
		status: EnumSupportStatus.PROCESSING,
	},
];
