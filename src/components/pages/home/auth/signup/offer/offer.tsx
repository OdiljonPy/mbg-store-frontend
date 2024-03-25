import { Checkbox, ConfigProvider } from "antd";
import css from "./offer.module.css";

interface Props {
	offer: boolean;
	setOffer: (value: boolean) => void;
}

const Offer = ({ offer, setOffer }: Props) => {
	return (
		<div className={css.offer}>
			<ConfigProvider
				theme={{
					components: {
						Checkbox: {
							colorPrimary: "#2E9D58",
							controlInteractiveSize: 16,
							lineWidth: 2,
							colorPrimaryActive: "#2E9D58",
							colorPrimaryHover: "#2E9D58",
						},
					},
				}}
			>
				<Checkbox
					checked={offer}
					onClick={() => setOffer(!offer)}
					className={css.offer}
					style={{ borderColor: "red" }}
					id={"offer"}
				/>
			</ConfigProvider>
			<label
				htmlFor='offer'
				className={css.text}
			>
				Я принимаю условия <a href=''>Оферты</a>
			</label>
		</div>
	);
};

export default Offer;
