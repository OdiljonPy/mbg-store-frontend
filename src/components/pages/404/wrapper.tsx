import Image from "next/image";
import css from "./wrapper.module.css";

import notFound from "@/../public/images/404/404.png";
import box from "@/../public/images/404/box.png";
import Button from "@/components/shared/button";
import { useRouter } from "next/navigation";

function Wrapper() {
	const { push } = useRouter();

	return (
		<div className='container'>
			<div className={css.wrapper}>
				<div className={css.image_wrapper}>
					<Image
						className={css.image_404}
						src={notFound}
						alt='404'
						width={1000}
						height={400}
					/>
					<Image
						className={css.image_box}
						src={box}
						alt='empty-box'
						width={300}
						height={300}
					/>
				</div>
				<p className={css.text}>
					Упс! Кажется, эта страница ушла за покупками.
					Присоединяйтесь к ней!
				</p>
				<Button onClick={() => push("/")}>Перейти на главную</Button>
			</div>
		</div>
	);
}

export default Wrapper;
