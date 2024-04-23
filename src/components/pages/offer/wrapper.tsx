import Blank from "./components/blank";
import Header from "./components/header";
import css from "./wrapper.module.css";

function Wrapper() {
	return (
		<div className={css.wrapper}>
			<Header />
			<div className='container'>
				<main className={css.main}>
					<Blank />
				</main>
			</div>
		</div>
	);
}

export default Wrapper;
