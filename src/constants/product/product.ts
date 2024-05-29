import { IProduct } from "@/data-types/products/common";
import img from "@/../public/images/products/mikado.png";
import img4 from "@/../public/images/products/pomidor.png";
import img5 from "@/../public/images/products/makfa.png";
import img6 from "@/../public/images/products/mountain.png";
import img7 from "@/../public/images/products/onion.png";
import { ISortingOption } from "@/components/pages/products/filters/desktop/data-types/sorting/sorting";

export const product: IProduct = {
  id: 1,
  name: "Ананасы Mikado ломтики 580мл",
  rating: 4.9,
  rating_count: 12358,
  price: 30000,
  weight: "170г",
  available: 170,
  discount: 50,
  view_count: 0,
  discount_price: 15000,
  images: [
    {
      id: 1,
      product: 1,
      image: img,
    },
  ],
  seller: "Продавец",
  store: {
    id: 1,
    brand_name: "Фермерская базарка",
    longitude: 0,
    latitude: 0,
    working_time: "",
    store_location_name: "",
    logo: "",
    rating: 5,
    rating_count: 10,
  },
};

export const productClose: IProduct[] = [
  {
    id: 1,
    name: "Помидор 1 кг",
    rating: 4.9,
    weight: "580г",
    available: 170,
    rating_count: 12358,
    price: 14700,
    discount: 10,
    discount_price: 18000,
    view_count: 0,
    images: [
      {
        id: 1,
        product: 1,
        image: img4,
      },
    ],
    seller: "Продавец",
    store: {
      id: 1,
      brand_name: "Фермерская базарка",
      longitude: 0,
      latitude: 0,
      working_time: "",
      store_location_name: "",
      logo: "",
      rating: 5,
      rating_count: 10,
    },
  },
  {
    id: 2,
    name: "Гречневая MAKFA 800 г",
    rating: 4.9,
    weight: "800г",
    available: 170,
    rating_count: 12358,
    price: 15000,
    discount: 10,
    discount_price: 18000,
    view_count: 0,
    images: [
      {
        id: 1,
        product: 1,
        image: img5,
      },
    ],
    seller: "Продавец",
    store: {
      id: 1,
      brand_name: "Фермерская базарка",
      longitude: 0,
      latitude: 0,
      working_time: "",
      store_location_name: "",
      logo: "",
      rating: 5,
      rating_count: 10,
    },
  },
  {
    id: 3,
    name: "Mountain dew 1500 мл\n",
    rating: 4.9,
    weight: "1500г",
    available: 170,
    rating_count: 12358,
    price: 20000,
    discount: 10,
    discount_price: 18000,
    view_count: 0,
    images: [
      {
        id: 1,
        product: 1,
        image: img6,
      },
    ],
    seller: "Продавец",
    store: {
      id: 1,
      brand_name: "Фермерская базарка",
      longitude: 0,
      latitude: 0,
      working_time: "",
      store_location_name: "",
      logo: "",
      rating: 5,
      rating_count: 10,
    },
  },
  {
    id: 4,
    name: "Лук красный 1 кг\n",
    rating: 4.9,
    weight: "300г",
    available: 170,
    rating_count: 12358,
    price: 5400,
    discount: 10,
    discount_price: 18000,
    view_count: 0,
    images: [
      {
        id: 1,
        product: 1,
        image: img7,
      },
    ],
    seller: "Продавец",
    store: {
      id: 1,
      brand_name: "Фермерская базарка",
      longitude: 0,
      latitude: 0,
      working_time: "",
      store_location_name: "",
      logo: "",
      rating: 5,
      rating_count: 10,
    },
  },
];

export const sortingOptions: ISortingOption[] = [
  {
    title: "filters.sorting.popular",
    val: "popular",
  },
  {
    title: "filters.sorting.cheap",
    val: "cheap",
  },
  {
    title: "filters.sorting.expensive",
    val: "expensive",
  },
  {
    title: "filters.sorting.highRate",
    val: "highRate",
  },
];
