import axios from "axios";

interface IRefreshResponse {
	result: {
		access_token: string;
		refresh_token: string;
	};
	ok: boolean;
	error?: string;
}

export const refreshUser = async () => {
	const refresh = localStorage.getItem("refresh_token");

	const response = await axios.post<IRefreshResponse>(
		process.env.NEXT_PUBLIC_BASE_URL + "/auth/refresh/",
		{ refresh }
	);

	if (response.data.result) {
		localStorage.setItem("access_token", response.data.result.access_token);
		localStorage.setItem(
			"refresh_token",
			response.data.result.refresh_token
		);
	}
	return response.data;
};
