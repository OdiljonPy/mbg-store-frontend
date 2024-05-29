import star from "@/../public/images/icons/star.svg";
import css from "@/components/pages/products/filters/mobile/categories/body/category-item/category-item.module.css";
import { ICustomRadio } from "@/components/shared/custom-radio/data-types/custom-radio";
import ResponsiveImage from "@/components/shared/responsive-image/responsive-image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

interface props {
  item: ICustomRadio;
}

const RatingItem = ({ item }: props) => {
  const { push, query } = useRouter();
  const searchParams = useSearchParams();
  const pathname: string = usePathname();

  const rating = searchParams.get("rating");
  const { title, count, key } = item;

  const onSetRating = () => {
    push(
      {
        pathname,
        query: {
          ...query,
          rating: key.toString(),
          changeFilter:
            searchParams.get("changeFilter") === "true" ? "false" : "true",
        },
      },
      undefined,
      {
        scroll: false,
      },
    );
  };

  return (
    <label
      onClick={onSetRating}
      className={`${css.item} ${rating === key.toString() ? css.active : ""}`}
    >
      <input className={css.input} value={key} type={"radio"} />
      <span className={css.icon}>
        <ResponsiveImage src={star} alt={title} />
      </span>
      <span className={css.title}>{title}</span>
    </label>
  );
};

export default RatingItem;
