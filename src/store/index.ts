import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Action, configureStore, combineReducers, ThunkAction} from "@reduxjs/toolkit";

import storiesSlices from "@/slices/all_store/StoriesSlices";
import userSlice from "@/slices/auth/user";
import categorySlices from "@/slices/category/categorySlices";
import favoritesSlice from "@/slices/favorites/favoritesSlice";
import messageSlice from "@/slices/message/message";
import orderItemSlice from "@/slices/order/orderItemSlice";
import ordersSlice from "@/slices/order/ordersSlice";
import otpKey from "@/slices/otpKey/otpKey";
import phoneNumber from "@/slices/phone_numer/phoneNumber";
import productSingleSlices from "@/slices/product/productSingleSlices";
import loginSlice from "../slices/auth/login";
import signUpUserSlice from "../slices/auth/signup";
import verifyUserSlice from "../slices/auth/verify";
import productBestSeller from "../slices/product/productBestSellerSlices";
import productDiscount from "../slices/product/productDiscountSlices";
import productSlices from "../slices/product/productSlices";
import basketSlice from "@/slices/basket/basketSlice";

const basketPersistConfig  = {
	key: 'basket',
	storage,
	// whitelist: ['basket']
};

const favoritesPersistConfig={
	key:"favorites",
	storage,
}

const rootReducers = combineReducers({
	basket: persistReducer(basketPersistConfig,basketSlice),
	favorites:persistReducer(favoritesPersistConfig,favoritesSlice) ,
	product: productSlices,
	product_discount: productDiscount,
	product_bestseller: productBestSeller,
	category: categorySlices,
	product_single: productSingleSlices,
	all_stories: storiesSlices,
	message: messageSlice,
	phoneNumber: phoneNumber,
	otpKey: otpKey,
	user: userSlice,
	verify: verifyUserSlice,
	signup: signUpUserSlice,
	login: loginSlice,
	orders: ordersSlice,
	order_item: orderItemSlice,
	// address: addressSlice,
})



export const makeStore = () => {
	return configureStore({
		reducer: rootReducers,
	});
};





export const store = makeStore();
persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;
