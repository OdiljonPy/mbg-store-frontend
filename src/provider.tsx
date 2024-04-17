"use client";
import { store } from "@/store";
import { YandexMetricaProvider } from "next-yandex-metrica";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<YandexMetricaProvider
			tagID={97050233}
			initParameters={{
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true,
				ecommerce: "dataLayer",
			}}
		>
			<ToastProvider>
				<Provider store={store}>{children}</Provider>
			</ToastProvider>
		</YandexMetricaProvider>
	);
}
