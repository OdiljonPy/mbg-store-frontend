import { cn } from "@/utils/cn";
import { usePathname, useSearchParams } from "next/navigation";
import css from "./letter.module.css";

interface props {
	letter: string;
	isActive: boolean;
}

const Letter = ({ letter, isActive }: props) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const lett: string | null = searchParams.get("letter");

	const handleScroll = () => {
		const element = document.getElementById(letter);
		if (!element) return;
		const offset = 140;
		window.scrollTo({
			top: element?.offsetTop - offset,
			behavior: "smooth",
		});
	};

	return isActive ? (
		<button
			onClick={handleScroll}
			className={cn(css.letter, lett === letter && css.selected)}
		>
			{letter}
		</button>
	) : (
		<div className={cn(css.letter, css.disabled)}>{letter}</div>
	);
};

export default Letter;
