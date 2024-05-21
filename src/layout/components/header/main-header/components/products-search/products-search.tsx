"use client";
import ProductSearchIcon from "@/components/shared/product-search-icon/product-search-icon";
import { raleway } from "@/constants/fonts/fonts";
import useDebounce from "@/hooks/use-debounce";
import ProductResult from "@/layout/components/header/main-header/components/product-result/product-result";
import { useProductSearch } from "@/layout/components/header/main-header/hooks/use-product-search";
import { fetchSearchKey } from "@/slices/product/productSlices";
import { AppDispatch, RootState } from "@/store";
import { ConfigProvider, Dropdown, MenuProps } from "antd";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSearchGroup from "./product-search-group";
import css from "./products-search.module.css";

interface props {}

const ProductsSearch = (props: props) => {
	const t = useTranslations();
	const { push, isReady, query } = useRouter();
	const { product_search, loading_search_key: loading } = useSelector(
		(state: RootState) => state.product
	);
	const { data: oftenSearchedData, loading: oftenSearchedLoading } =
		useSelector((state: RootState) => state.oftenSearchedProducts);
	const { data: searchHistoryData } = useSelector(
		(state: RootState) => state.search_history
	);
	const dispatch = useDispatch<AppDispatch>();

	const { focused, onFocused, searchText, onChange, onBlur, onClearValue } =
		useProductSearch();

	const [products, setProducts] = useState<string[]>(searchHistoryData);

	const debouncedValue = useDebounce(searchText, 500);

	useEffect(() => {
		if (debouncedValue) {
			dispatch(fetchSearchKey(searchText));
		}
	}, [debouncedValue, dispatch, searchText]);

	useEffect(() => {
		setProducts(product_search);
	}, [product_search]);

	const onSearch = () => {
		if (searchText.length) {
			push(
				{
					pathname: "/products",
					query: {
						...query,
						search: searchText,
						sort: "popular",
					},
				},
				undefined
			);
		}
	};

	const onClearInput = () => {
		onClearValue();
		push(
			{
				pathname: "/products",
				query: {
					...query,
					search: "",
					sort: "popular",
				},
			},
			undefined
		);
	};

	const handleWithKey = (e: any) => {
		if (e.code === "Enter" && searchText) {
			onSearch();
		}
	};

	const items: MenuProps["items"] = [
		!searchText.length && searchHistoryData.length
			? {
					key: 2,
					label: (
						<ProductSearchGroup
							title={t("search.recently_searched")}
							isClear
						/>
					),
					type: "group",
					children: [
						...searchHistoryData?.map((item, index) => ({
							label: (
								<ProductResult
									isHistory
									item={item}
									loading={loading}
								/>
							),
							style: { marginInline: -8 },
							key: index,
							icon: (
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8 0.6875C6.55373 0.6875 5.13993 1.11637 3.9374 1.91988C2.73486 2.72339 1.7976 3.86544 1.24413 5.20163C0.690668 6.53781 0.545857 8.00811 0.828011 9.4266C1.11017 10.8451 1.80661 12.148 2.82928 13.1707C3.85196 14.1934 5.15492 14.8898 6.57341 15.172C7.99189 15.4541 9.46219 15.3093 10.7984 14.7559C12.1346 14.2024 13.2766 13.2651 14.0801 12.0626C14.8836 10.8601 15.3125 9.44628 15.3125 8C15.3105 6.06123 14.5394 4.20246 13.1685 2.83154C11.7975 1.46063 9.93877 0.689547 8 0.6875ZM8 14.1875C6.77623 14.1875 5.57994 13.8246 4.56241 13.1447C3.54488 12.4648 2.75182 11.4985 2.2835 10.3679C1.81518 9.23724 1.69265 7.99314 1.93139 6.79288C2.17014 5.59262 2.75944 4.49011 3.62478 3.62478C4.49012 2.75944 5.59262 2.17014 6.79288 1.93139C7.99314 1.69264 9.23724 1.81518 10.3679 2.2835C11.4985 2.75181 12.4648 3.54488 13.1447 4.56241C13.8246 5.57994 14.1875 6.77623 14.1875 8C14.1856 9.64046 13.5331 11.2132 12.3732 12.3732C11.2132 13.5331 9.64046 14.1856 8 14.1875ZM12.5 8C12.5 8.14918 12.4407 8.29226 12.3353 8.39775C12.2298 8.50324 12.0867 8.5625 11.9375 8.5625H8C7.85082 8.5625 7.70775 8.50324 7.60226 8.39775C7.49677 8.29226 7.4375 8.14918 7.4375 8V4.0625C7.4375 3.91332 7.49677 3.77024 7.60226 3.66475C7.70775 3.55926 7.85082 3.5 8 3.5C8.14919 3.5 8.29226 3.55926 8.39775 3.66475C8.50324 3.77024 8.5625 3.91332 8.5625 4.0625V7.4375H11.9375C12.0867 7.4375 12.2298 7.49676 12.3353 7.60225C12.4407 7.70774 12.5 7.85082 12.5 8Z'
										fill='#999999'
									/>
								</svg>
							),
						})),
					],
			  }
			: null,
		!searchText.length && oftenSearchedData.length
			? {
					key: 3,
					label: (
						<ProductSearchGroup
							title={t("search.recently_searched")}
							isClear
						/>
					),
					type: "group",
					children: [
						...oftenSearchedData?.map((item, index) => ({
							label: (
								<ProductResult
									isHistory
									item={item}
									loading={oftenSearchedLoading}
								/>
							),
							style: { marginInline: -8 },
							key: index,
							icon: (
								<ProductSearchIcon>
									<svg
										width='14'
										height='14'
										viewBox='0 0 21 20'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M20.0308 18.4694L15.3368 13.7762C16.6973 12.1428 17.3757 10.0478 17.2309 7.92694C17.0861 5.80607 16.1293 3.82268 14.5593 2.38935C12.9894 0.95602 10.9274 0.183113 8.80212 0.231413C6.67687 0.279713 4.65205 1.1455 3.14888 2.64867C1.64571 4.15184 0.779927 6.17666 0.731627 8.30191C0.683327 10.4272 1.45623 12.4892 2.88956 14.0591C4.32289 15.629 6.30629 16.5859 8.42715 16.7307C10.548 16.8755 12.6431 16.1971 14.2765 14.8366L18.9696 19.5306C19.0393 19.6003 19.122 19.6556 19.213 19.6933C19.3041 19.731 19.4017 19.7504 19.5002 19.7504C19.5988 19.7504 19.6963 19.731 19.7874 19.6933C19.8784 19.6556 19.9612 19.6003 20.0308 19.5306C20.1005 19.4609 20.1558 19.3782 20.1935 19.2872C20.2312 19.1961 20.2506 19.0985 20.2506 19C20.2506 18.9015 20.2312 18.8039 20.1935 18.7128C20.1558 18.6218 20.1005 18.5391 20.0308 18.4694ZM2.25021 8.5C2.25021 7.16498 2.64609 5.85993 3.38779 4.7499C4.12949 3.63987 5.1837 2.7747 6.4171 2.26381C7.6505 1.75292 9.0077 1.61925 10.3171 1.8797C11.6264 2.14015 12.8292 2.78302 13.7732 3.72703C14.7172 4.67103 15.3601 5.87377 15.6205 7.18314C15.881 8.49251 15.7473 9.84971 15.2364 11.0831C14.7255 12.3165 13.8603 13.3707 12.7503 14.1124C11.6403 14.8541 10.3352 15.25 9.00021 15.25C7.21061 15.248 5.49488 14.5362 4.22944 13.2708C2.96399 12.0053 2.2522 10.2896 2.25021 8.5Z'
											fill='#999999'
										/>
									</svg>
								</ProductSearchIcon>
							),
						})),
					],
			  }
			: null,
		...products?.map((item, index) => ({
			label: <ProductResult item={item} loading={loading} />,
			key: index + 1000,
			style: { marginInline: -8 },
			icon: (
				<ProductSearchIcon>
					<svg
						width='14'
						height='14'
						viewBox='0 0 21 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20.0308 18.4694L15.3368 13.7762C16.6973 12.1428 17.3757 10.0478 17.2309 7.92694C17.0861 5.80607 16.1293 3.82268 14.5593 2.38935C12.9894 0.95602 10.9274 0.183113 8.80212 0.231413C6.67687 0.279713 4.65205 1.1455 3.14888 2.64867C1.64571 4.15184 0.779927 6.17666 0.731627 8.30191C0.683327 10.4272 1.45623 12.4892 2.88956 14.0591C4.32289 15.629 6.30629 16.5859 8.42715 16.7307C10.548 16.8755 12.6431 16.1971 14.2765 14.8366L18.9696 19.5306C19.0393 19.6003 19.122 19.6556 19.213 19.6933C19.3041 19.731 19.4017 19.7504 19.5002 19.7504C19.5988 19.7504 19.6963 19.731 19.7874 19.6933C19.8784 19.6556 19.9612 19.6003 20.0308 19.5306C20.1005 19.4609 20.1558 19.3782 20.1935 19.2872C20.2312 19.1961 20.2506 19.0985 20.2506 19C20.2506 18.9015 20.2312 18.8039 20.1935 18.7128C20.1558 18.6218 20.1005 18.5391 20.0308 18.4694ZM2.25021 8.5C2.25021 7.16498 2.64609 5.85993 3.38779 4.7499C4.12949 3.63987 5.1837 2.7747 6.4171 2.26381C7.6505 1.75292 9.0077 1.61925 10.3171 1.8797C11.6264 2.14015 12.8292 2.78302 13.7732 3.72703C14.7172 4.67103 15.3601 5.87377 15.6205 7.18314C15.881 8.49251 15.7473 9.84971 15.2364 11.0831C14.7255 12.3165 13.8603 13.3707 12.7503 14.1124C11.6403 14.8541 10.3352 15.25 9.00021 15.25C7.21061 15.248 5.49488 14.5362 4.22944 13.2708C2.96399 12.0053 2.2522 10.2896 2.25021 8.5Z'
							fill='#999999'
						/>
					</svg>
				</ProductSearchIcon>
			),
		})),
	];

	if (!isReady) return;

	return (
		<ConfigProvider
			theme={{
				components: {
					Dropdown: {
						paddingBlock: 10,
					},
				},
				token: {
					controlItemBgHover: "#F1FAF4",
				},
			}}
		>
			<Dropdown menu={{ items }} trigger={["click"]}>
				<div className={`${css.search} ${focused ? css.focused : ""}`}>
					<div className={css.inputWrapper}>
						<input
							onKeyUp={handleWithKey}
							onChange={onChange}
							value={searchText}
							onFocus={onFocused}
							onBlur={onBlur}
							className={`${css.input} ${raleway.className}`}
							type={"search"}
							placeholder={t("search.placeholder")}
						/>
						<svg
							className={`${css.icon} ${
								searchText.length ? css.show : ""
							}`}
							onClick={onClearInput}
							width='15'
							height='15'
							viewBox='0 0 15 15'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M14.7807 13.7194C14.8504 13.789 14.9056 13.8718 14.9433 13.9628C14.9811 14.0539 15.0005 14.1514 15.0005 14.25C15.0005 14.3485 14.9811 14.4461 14.9433 14.5372C14.9056 14.6282 14.8504 14.7109 14.7807 14.7806C14.711 14.8503 14.6283 14.9056 14.5372 14.9433C14.4462 14.981 14.3486 15.0004 14.2501 15.0004C14.1515 15.0004 14.0539 14.981 13.9629 14.9433C13.8718 14.9056 13.7891 14.8503 13.7194 14.7806L7.50005 8.5603L1.28068 14.7806C1.13995 14.9213 0.949074 15.0004 0.750051 15.0004C0.551028 15.0004 0.360156 14.9213 0.219426 14.7806C0.0786953 14.6399 -0.000366207 14.449 -0.000366211 14.25C-0.000366215 14.051 0.0786953 13.8601 0.219426 13.7194L6.43974 7.49999L0.219426 1.28061C0.0786953 1.13988 -0.000366211 0.949013 -0.000366211 0.74999C-0.000366211 0.550967 0.0786953 0.360095 0.219426 0.219365C0.360156 0.0786343 0.551028 -0.000427246 0.750051 -0.000427246C0.949074 -0.000427246 1.13995 0.0786343 1.28068 0.219365L7.50005 6.43968L13.7194 0.219365C13.8602 0.0786343 14.051 -0.00042725 14.2501 -0.000427246C14.4491 -0.000427242 14.6399 0.0786343 14.7807 0.219365C14.9214 0.360095 15.0005 0.550967 15.0005 0.74999C15.0005 0.949013 14.9214 1.13988 14.7807 1.28061L8.56036 7.49999L14.7807 13.7194Z'
								fill='#C2C2C2'
							/>
						</svg>
					</div>
					<button onClick={onSearch} className={css.btn}>
						<svg
							width='21'
							height='20'
							viewBox='0 0 21 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M20.0308 18.4694L15.3368 13.7762C16.6973 12.1428 17.3757 10.0478 17.2309 7.92694C17.0861 5.80607 16.1293 3.82268 14.5593 2.38935C12.9894 0.95602 10.9274 0.183113 8.80212 0.231413C6.67687 0.279713 4.65205 1.1455 3.14888 2.64867C1.64571 4.15184 0.779927 6.17666 0.731627 8.30191C0.683327 10.4272 1.45623 12.4892 2.88956 14.0591C4.32289 15.629 6.30629 16.5859 8.42715 16.7307C10.548 16.8755 12.6431 16.1971 14.2765 14.8366L18.9696 19.5306C19.0393 19.6003 19.122 19.6556 19.213 19.6933C19.3041 19.731 19.4017 19.7504 19.5002 19.7504C19.5988 19.7504 19.6963 19.731 19.7874 19.6933C19.8784 19.6556 19.9612 19.6003 20.0308 19.5306C20.1005 19.4609 20.1558 19.3782 20.1935 19.2872C20.2312 19.1961 20.2506 19.0985 20.2506 19C20.2506 18.9015 20.2312 18.8039 20.1935 18.7128C20.1558 18.6218 20.1005 18.5391 20.0308 18.4694ZM2.25021 8.5C2.25021 7.16498 2.64609 5.85993 3.38779 4.7499C4.12949 3.63987 5.1837 2.7747 6.4171 2.26381C7.6505 1.75292 9.0077 1.61925 10.3171 1.8797C11.6264 2.14015 12.8292 2.78302 13.7732 3.72703C14.7172 4.67103 15.3601 5.87377 15.6205 7.18314C15.881 8.49251 15.7473 9.84971 15.2364 11.0831C14.7255 12.3165 13.8603 13.3707 12.7503 14.1124C11.6403 14.8541 10.3352 15.25 9.00021 15.25C7.21061 15.248 5.49488 14.5362 4.22944 13.2708C2.96399 12.0053 2.2522 10.2896 2.25021 8.5Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
			</Dropdown>
		</ConfigProvider>
	);
};

export default ProductsSearch;
