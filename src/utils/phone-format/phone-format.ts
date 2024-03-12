export const formatPhoneNumber = (phoneNumber: string) => {
	if (!phoneNumber) return;
	return phoneNumber.replace(
		/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
		"$1 ($2) $3-$4-$5"
	);
};
