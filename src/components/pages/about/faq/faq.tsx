import ChatTrigger from "@/components/pages/about/faq/chat-trigger/chat-trigger";
import CustomCollapse from "@/components/pages/about/faq/custom-collapse/custom-collapse";
import HeadingLine from "@/components/pages/about/heading-line/heading-line";
import FormError from "@/components/shared/form-error/form-error";
import { fetchFaq } from "@/slices/base/faq/faqSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./faq.module.css";
import Loading from "./skeleton";
import {IFaq} from "@/data-types/base/faq";

const Faq = () => {
	const { data, loading, error } = useSelector(
		(state: RootState) => state.faq
	);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchFaq());
	}, [dispatch]);

	if (error)
		return (
			<FormError error='Что-то пошло не так. Попробуйте обновить страницу' />
		);

	return (
		<section className={css.faq}>
			<div className={"container"}>
				<HeadingLine title={"about.faq"} />
				<div className={css.wrapper}>
					<div className={css.questions}>
						{loading
							? Array.from({ length: 5 }).map((_, index) => (
									<Loading key={index} index={index} />
							  ))
							: data.map((faq:IFaq) => (
									<CustomCollapse item={faq} key={faq.id} />
							  ))}
					</div>
					<ChatTrigger />
				</div>
			</div>
		</section>
	);
};

export default Faq;
