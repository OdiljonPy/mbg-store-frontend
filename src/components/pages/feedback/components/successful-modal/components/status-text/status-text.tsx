import css from "../../successful-modal.module.css"
const StatusText = () =>{
    return(
        <div className={css.info}>
            <p className={css.info_title}>Спасибо за отзыв!</p>
            <p className={css.info_description}>Мы получили ваш отзыв</p>
        </div>
    )
}

export default StatusText