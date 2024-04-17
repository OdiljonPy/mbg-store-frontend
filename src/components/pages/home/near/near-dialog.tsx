import nearCss from "@/components/pages/home/near/near.module.css";
import Product from "@/components/shared/product/product";
import { productClose } from "@/constants/product/product";
import AddressFormModal from "./address-form-modal/address-form-modal";

function NearDialog() {
	return (
		<>
			<div className={nearCss.card_wrapper}>
				<div className={nearCss.card}>
					<p className={nearCss.card_text}>
						Укажите адрес, чтобы видеть товары поблизости
					</p>
					<AddressFormModal />
				</div>
			</div>
			<div className={nearCss.background_products}>
				{productClose.map((product) => (
					<div key={product.id}>
						<Product product={product} />
					</div>
				))}
			</div>
		</>
	);
}

export default NearDialog;
