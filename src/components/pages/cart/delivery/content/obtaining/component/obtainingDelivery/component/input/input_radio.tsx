import css from "./input.module.css"
interface props{
    checked:boolean | undefined,
    onChange:() => void,
    value:number
    label?:string
}

const InputRadio = ({checked,onChange,value,label}:props) =>{
    return(
            <label className={css.custom_radio}>
                <input type="radio" checked={checked} onChange={onChange} value={value} name='radio' />
                <span className={css.custom_radio_button}></span>
                {label}
            </label>
    )
}

export default InputRadio