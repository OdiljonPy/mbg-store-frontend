import css from './detail-item.module.css'

interface props {
    label: string
    value?: string | number
    className?: string
}

const DetailItem
    = ({label, value, className}: props) => {
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

export default DetailItem
;