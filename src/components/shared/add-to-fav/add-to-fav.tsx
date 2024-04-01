import { IProductInner } from "@/data-types/products/product-inner/product-inner";
import { toggleFavorite } from "@/slices/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import css from "./add-to-fav.module.css";

interface props {
	id: number;
	info: IProductInner;
}

const AddToFav = ({ id, info }: props) => {
	const favorites = useSelector((state: RootState) => state.favorites);
	const dispatch = useDispatch<AppDispatch>();

	const isFavorite = favorites.some((item) => {
		return item.id === info.id;
	});
	const onAdd = () => {
		dispatch(toggleFavorite(info));
	};
	return (
		<button className={css.btn} onClick={onAdd}>
			{isFavorite ? (
				<svg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M27.125 8.01562C27.125 16.2187 14.9621 22.8586 14.4441 23.1328C14.3076 23.2063 14.155 23.2447 14 23.2447C13.845 23.2447 13.6924 23.2063 13.5559 23.1328C13.0379 22.8586 0.875 16.2187 0.875 8.01562C0.877171 6.08933 1.64335 4.24255 3.00545 2.88045C4.36755 1.51835 6.21433 0.752171 8.14062 0.75C10.5605 0.75 12.6793 1.79062 14 3.54961C15.3207 1.79062 17.4395 0.75 19.8594 0.75C21.7857 0.752171 23.6325 1.51835 24.9946 2.88045C26.3566 4.24255 27.1228 6.08933 27.125 8.01562Z'
						fill='#60C787'
					/>
				</svg>
			) : (
				<svg width='32' height='32' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						className={css.path}
						d='M21.3594 3.75C18.9395 3.75 16.8207 4.79062 15.5 6.54961C14.1793 4.79062 12.0605 3.75 9.64062 3.75C7.71433 3.75217 5.86755 4.51835 4.50545 5.88045C3.14335 7.24255 2.37717 9.08933 2.375 11.0156C2.375 19.2187 14.5379 25.8586 15.0559 26.1328C15.1924 26.2063 15.345 26.2447 15.5 26.2447C15.655 26.2447 15.8076 26.2063 15.9441 26.1328C16.4621 25.8586 28.625 19.2187 28.625 11.0156C28.6228 9.08933 27.8566 7.24255 26.4946 5.88045C25.1325 4.51835 23.2857 3.75217 21.3594 3.75ZM15.5 24.2344C13.3602 22.9875 4.25 17.3074 4.25 11.0156C4.25186 9.58651 4.8204 8.21647 5.83093 7.20593C6.84147 6.1954 8.21151 5.62686 9.64062 5.625C11.9199 5.625 13.8336 6.83906 14.6328 8.78906C14.7034 8.96101 14.8236 9.10808 14.978 9.21158C15.1324 9.31508 15.3141 9.37034 15.5 9.37034C15.6859 9.37034 15.8676 9.31508 16.022 9.21158C16.1764 9.10808 16.2966 8.96101 16.3672 8.78906C17.1664 6.83555 19.0801 5.625 21.3594 5.625C22.7885 5.62686 24.1585 6.1954 25.1691 7.20593C26.1796 8.21647 26.7481 9.58651 26.75 11.0156C26.75 17.298 17.6375 22.9863 15.5 24.2344Z'
						fill='#232323'
					/>
				</svg>
			)}
		</button>
	);
};

export default AddToFav;
