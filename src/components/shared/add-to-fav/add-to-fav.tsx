import { toggleFavorite } from "@/slices/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import css from "./add-to-fav.module.css";
import {IProduct} from "@/data-types/products/common";

interface props {
	product: IProduct;
}

const AddToFav = ({ product }: props) => {
	const {count ,...others} = product
	const {favourites} = useSelector((state: RootState) => state.favorites);
	const dispatch = useDispatch<AppDispatch>();

	const isFavorite = favourites.length ? favourites.some((item) => {
		return item.id === product.id;
	}):false;
	const onAdd = () => {
		dispatch(toggleFavorite(others));
	};
	return (
		<button className={css.btn} onClick={onAdd}>
			{isFavorite ?
				(
				<svg width='34' height='34' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M27.125 8.01562C27.125 16.2187 14.9621 22.8586 14.4441 23.1328C14.3076 23.2063 14.155 23.2447 14 23.2447C13.845 23.2447 13.6924 23.2063 13.5559 23.1328C13.0379 22.8586 0.875 16.2187 0.875 8.01562C0.877171 6.08933 1.64335 4.24255 3.00545 2.88045C4.36755 1.51835 6.21433 0.752171 8.14062 0.75C10.5605 0.75 12.6793 1.79062 14 3.54961C15.3207 1.79062 17.4395 0.75 19.8594 0.75C21.7857 0.752171 23.6325 1.51835 24.9946 2.88045C26.3566 4.24255 27.1228 6.08933 27.125 8.01562Z'
						fill='#60C787'
					/>
				</svg>
			)
				: (
				<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className={css.path} d="M23.6406 4.25C20.898 4.25 18.4968 5.42937 17 7.42289C15.5032 5.42937 13.102 4.25 10.3594 4.25C8.17624 4.25246 6.08322 5.1208 4.53951 6.66451C2.9958 8.20822 2.12746 10.3012 2.125 12.4844C2.125 21.7812 15.9096 29.3064 16.4966 29.6172C16.6514 29.7004 16.8243 29.744 17 29.744C17.1757 29.744 17.3486 29.7004 17.5034 29.6172C18.0904 29.3064 31.875 21.7812 31.875 12.4844C31.8725 10.3012 31.0042 8.20822 29.4605 6.66451C27.9168 5.1208 25.8238 4.25246 23.6406 4.25ZM17 27.4656C14.5748 26.0525 4.25 19.6151 4.25 12.4844C4.25211 10.8647 4.89645 9.312 6.04172 8.16672C7.187 7.02145 8.73972 6.37711 10.3594 6.375C12.9426 6.375 15.1114 7.75094 16.0172 9.96094C16.0972 10.1558 16.2334 10.3225 16.4084 10.4398C16.5834 10.5571 16.7893 10.6197 17 10.6197C17.2107 10.6197 17.4166 10.5571 17.5916 10.4398C17.7666 10.3225 17.9028 10.1558 17.9828 9.96094C18.8886 7.74695 21.0574 6.375 23.6406 6.375C25.2603 6.37711 26.813 7.02145 27.9583 8.16672C29.1036 9.312 29.7479 10.8647 29.75 12.4844C29.75 19.6045 19.4225 26.0512 17 27.4656Z" fill="#C2C2C2"/>
				</svg>
				)}

		</button>
	);
};

export default AddToFav;
