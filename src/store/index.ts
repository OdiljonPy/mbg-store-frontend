import {
	Action,
	ThunkAction,
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import storiesSlices from "@/slices/all_store/StoriesSlices";
import userSlice from "@/slices/auth/user";
import aboutSlice from "@/slices/base/about/aboutSlice";
import bannerSlice from "@/slices/base/banner/bannerSlice";
import basketSlice from "@/slices/basket/basketSlice";
import categorySlices from "@/slices/category/categorySlices";
import favoritesSlice from "@/slices/favorites/favoritesSlice";
import messageSlice from "@/slices/message/message";
import orderItemSlice from "@/slices/order/orderItemSlice";
import ordersSlice from "@/slices/order/ordersSlice";
import otpKey from "@/slices/otpKey/otpKey";
import phoneNumber from "@/slices/phone_numer/phoneNumber";
import productSingleSlices from "@/slices/product/productSingleSlices";
import promoCodeSlice from "@/slices/promo-code/promoCodeSlice";
import supportSlice from "@/slices/support/supportSlice";
import loginSlice from "../slices/auth/login";
import signUpUserSlice from "../slices/auth/signup";
import verifyUserSlice from "../slices/auth/verify";
import productBestSeller from "../slices/product/productBestSellerSlices";
import productDiscount from "../slices/product/productDiscountSlices";
import productSlices from "../slices/product/productSlices";
import shippingListSlice from "../slices/shipping/shippingSlice";
import faqSlice from "@/slices/base/faq/faqSlice";

const basketPersistConfig = {
	key: "basket",
	storage,
	// whitelist: ['basket']
};

const favoritesPersistConfig = {
	key: "favorites",
	storage,
};

const userPersistConfig = {
	key: "user",
	storage,
};

const rootReducers = combineReducers({
	basket: persistReducer(basketPersistConfig, basketSlice),
	favorites: persistReducer(favoritesPersistConfig, favoritesSlice),
	user: persistReducer(userPersistConfig, userSlice),
	product: productSlices,
	product_discount: productDiscount,
	product_bestseller: productBestSeller,
	category: categorySlices,
	product_single: productSingleSlices,
	all_stories: storiesSlices,
	message: messageSlice,
	phoneNumber: phoneNumber,
	otpKey: otpKey,
	verify: verifyUserSlice,
	signup: signUpUserSlice,
	login: loginSlice,
	orders: ordersSlice,
	order_item: orderItemSlice,
	shippingList: shippingListSlice,
	supports: supportSlice,
	promo_code: promoCodeSlice,
	about: aboutSlice,
	banner: bannerSlice,
	faq: faqSlice,
	// address: addressSlice,
});

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
