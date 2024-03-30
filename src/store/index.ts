import storiesSlices from "@/slices/all_store/StoriesSlices";
import userSlice from "@/slices/auth/user";
import categorySlices from "@/slices/category/categorySlices";
import messageSlice from "@/slices/message/message";
import otpKey from "@/slices/otpKey/otpKey";
import phoneNumber from "@/slices/phone_numer/phoneNumber";
import productSingleSlices from "@/slices/product/productSingleSlices";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../slices/auth/login";
import signUpUserSlice from "../slices/auth/signup";
import verifyUserSlice from "../slices/auth/verify";
import productBestSeller from "../slices/product/productBestSellerSlices";
import productDiscount from "../slices/product/productDiscountSlices";
import productSlices from "../slices/product/productSlices";

export const makeStore = () => {
	return configureStore({
		reducer: {
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
			// address: addressSlice,
		},
	});
};

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
