import SkeletonWrapper from "@/components/pages/products/wrapper/skeleton-wrapper/skeleton-wrapper";
import Pagination from "@/components/shared/pagination/pagination";
import Product from "@/components/shared/product/product";
import { IProductFilter } from "@/data-types/products/product-filter/product-filter";
import { filterProduct } from "@/slices/product/productSlices";
import { AppDispatch, RootState } from "@/store";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./product-list.module.css";
import NoData from "@/components/pages/products/wrapper/no-data/no-data";

interface props {}

const ProductList = ({}: props) => {
  const { entities: products, loading } = useSelector(
    (state: RootState) => state.product,
  );
  const { totalElements, size } = products;
  const searchParams = useSearchParams();
  const isOpened: string | null = searchParams.get("filters");
  const { isReady, query } = useRouter();

  const [page, setPage] = useState(12);
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const changeFilter = searchParams.get("changeFilter");

  const diffFilters: string[] = ["filters", "search", "sort", "category"];
  const activeFilters = Object.keys(query).filter(
    (item) => !diffFilters.includes(item),
  );

  const dispatch = useDispatch<AppDispatch>();
  const fetchProductFilter = useCallback(() => {
    const filterParams = {
      q: searchParams.get("search"),
      category: Number(searchParams.get("category_id")),
      min_price: Number(searchParams.get("prices")?.split(",")[0]),
      max_price: Number(searchParams.get("prices")?.split(",")[1]),
      latitude: Number(searchParams.get("location")?.split(",")[0]),
      longitude: Number(searchParams.get("location")?.split(",")[1]),
      distance: Number(searchParams.get("distance")),
      rating: Number(searchParams.get("rating")),
      discount: 0,
      store: searchParams
        .get("stores")
        ?.split(",")
        .map((el) => Number(el)),
      free_shipping: searchParams.get("delivery")?.split(",").includes("1"),
      pickup: searchParams.get("delivery")?.split(",").includes("2"),
      comments: searchParams.get("withFeedback"),
      available: searchParams.get("accessibility")?.split(",").includes("1"),
      around_the_clock: searchParams
        .get("accessibility")
        ?.split(",")
        .includes("2"),
      sort: searchParams.get("sort") ? searchParams.get("sort") : "popular",
      page: page,
    };
    if (searchParams.get("onSales") === "true") {
      filterParams.discount = 1;
    } else filterParams.discount = Number(searchParams.get("sale"));

    if (activeFilters.length) {
      dispatch(filterProduct(filterParams));
    }

    if (
      !activeFilters.length &&
      (page ||
        searchParams.get("sort") ||
        searchParams.get("category_id") ||
        searchParams.get("search"))
    ) {
      dispatch(filterProduct(filterParams));
    }
  }, [dispatch, page, changeFilter, search, sort]);

  useEffect(() => {
    fetchProductFilter();
  }, [fetchProductFilter, page, changeFilter, search, sort]);

  if (!isReady) return;
  return (
    <>
      <div className={`${css.product_list} ${isOpened ? css.short : ""}`}>
        <div className={`${css.list} ${isOpened ? css.short : ""}`}>
          {loading ? (
            <SkeletonWrapper />
          ) : (
            products?.content?.map((product) => {
              return <Product product={product} isNotSwiper key={product.id} />;
            })
          )}
          {!products.content?.length ? (
            <div className={css.no_data}>
              <NoData />
            </div>
          ) : (
            ""
          )}
        </div>
        {totalElements > 12 ? (
          <div className={css.pagination}>
            <Pagination
              content
              limit={12}
              offset={page ? page : 12}
              total={totalElements}
              setOffset={(page) => (setPage ? setPage(page) : "")}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ProductList;
