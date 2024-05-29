import {useContext} from "react";
import {StoriesSearchContext} from "@/components/pages/products/filters/desktop/stores/context/stores-search-context";

export const useStoriesSearch = ()=> useContext(StoriesSearchContext)