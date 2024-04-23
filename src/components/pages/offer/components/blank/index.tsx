import css from "./index.module.css";

function Blank() {
	return (
		<article className={css.blank}>
			<h1 className={css.h1}>
				Пользовательское соглашение (Оферта) магазина MBG Store
			</h1>
			<section className={css.section}>
				<h2 className={css.h2}>1. Общие положения</h2>
				<p className={css.p}>
					1.1. Добро пожаловать в MBG Store! Настоящее
					Пользовательское соглашение (далее – Соглашение)
					устанавливает правила и условия использования веб-сайта и
					услуг, предлагаемых MBG Store.
				</p>
				<p className={css.p}>
					1.2. Используя сайт MBG Store, вы соглашаетесь с условиями
					данного Соглашения. Если вы не согласны с условиями,
					пожалуйста, не используйте наш сайт.
				</p>
			</section>
			<section className={css.section}>
				<h2 className={css.h2}>
					2. Условия регистрации и учетной записи
				</h2>
				<p className={css.p}>
					2.1. Для доступа к определенным функциям сайта, включая
					оформление заказов, пользователи должны создать учетную
					запись. При регистрации необходимо предоставить актуальную,
					полную и точную информацию.
				</p>
				<p className={css.p}>
					2.2. Вы несете ответственность за конфиденциальность своих
					учетных данных, включая пароль, а также за все действия,
					совершенные от имени вашей учетной записи.
				</p>
				<p className={css.p}>
					2.3. MBG Store оставляет за собой право приостановить или
					закрыть вашу учетную запись, если предоставленная информация
					является недостоверной, устаревшей или неполной.
				</p>
			</section>
			<section className={css.section}>
				<h2 className={css.h2}>3. Условия покупки</h2>
				<p className={css.p}>
					3.1. MBG Store предлагает широкий ассортимент товаров,
					каждый из которых имеет свое описание и цену.
				</p>
				<p className={css.p}>
					3.2. Пользователи обязуются оплачивать заказанные товары в
					соответствии с указанными на сайте ценами и условиями
					оплаты.
				</p>
				<p className={css.p}>
					3.3. MBG Store оставляет за собой право изменять цены на
					товары и услуги без предварительного уведомления.
				</p>
			</section>
		</article>
	);
}

export default Blank;
