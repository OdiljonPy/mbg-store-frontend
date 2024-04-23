import Image from "next/image";

import css from "./index.module.css";

function Header() {
	return (
		<header className={css.header}>
			<div className='container'>
				<div className={css.logo}>
					<Image
						src='/images/offer/logo.png'
						alt='logo'
						width={92}
						height={50}
					/>
					<span className={css.logo_text}>store</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
