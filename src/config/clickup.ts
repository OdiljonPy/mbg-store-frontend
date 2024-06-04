export const SERVICE_ID = 34007;
export const MERCHANT_ID = 26028;

type PaymentType = {
	orderId: number;
	returnUrl: string;
	amount: number;
};

export const generateClickUpPaymentLink = ({
	orderId,
	returnUrl,
	amount,
}: PaymentType) =>
	`https://my.click.uz/services/pay?service_id=${SERVICE_ID}&merchant_id=${MERCHANT_ID}&amount=${amount}&transaction_param=${orderId}&return_url=${returnUrl}`;
