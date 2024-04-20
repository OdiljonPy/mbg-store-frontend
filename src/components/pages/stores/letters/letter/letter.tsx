import { cn } from "@/utils/cn";
import Link from "next/link";
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

	return isActive ? (
		<Link
			href={{
				pathname,
				query: {
					letter: letter,
				},
			}}
			className={cn(css.letter, lett === letter && css.selected)}
		>
			{letter}
		</Link>
	) : (
		<div className={cn(css.letter, css.disabled)}>{letter}</div>
	);
};

export default Letter;
