import css from './total-item.module.css'

interface props {
    label: string
    value: string
    className?: string
}

const TotalItem = ({label, value, className}: props) => {
    return (
        <div className={`${css.item} ${className ? className : ''}`}>
            <h5 className={css.label}>
                {label}
            </h5>
            <p className={`${css.value} `}>
                {value}
            </p>
        </div>
    );
};

export default TotalItem;