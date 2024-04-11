import { useContext } from "react";
import { FavoritesSearchContext } from "../context/favorites-search-context";

export const useFavoritesSearch = () => useContext(FavoritesSearchContext);
