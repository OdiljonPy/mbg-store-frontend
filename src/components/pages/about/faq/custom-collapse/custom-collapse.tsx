import Body from "@/components/pages/about/faq/custom-collapse/body/body";
import Header from "@/components/pages/about/faq/custom-collapse/header/header";
import useCustomCollapse from "@/components/pages/about/faq/hooks/useCustomCollapse";
import { IFaq } from "@/data-types/base/faq";

interface Props {
	item: IFaq;
	index: number
}

const CustomCollapse = ({ item, index }: Props) => {
	const { open, onToggle } = useCustomCollapse();
	return (
		<>
			<Header item={item} open={open} index={index} onToggle={onToggle} />
			<Body answer={item.answer} open={open} />
		</>
	);
};

export default CustomCollapse;
