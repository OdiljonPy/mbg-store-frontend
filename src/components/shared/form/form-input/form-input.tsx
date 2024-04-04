import css from "./form-input.module.css"
import {PhoneInput} from "react-international-phone";
import React from "react";
import inputCss from "@/styles/input.module.css";
import {raleway} from "@/constants/fonts/fonts";

interface props{
    type:'name' | 'phone'
    changeValue : (value:string)=> void
    value:string
    label?:string
    placeholder?:string
    required?:boolean
}
const FormInput = ({type,changeValue,placeholder,required,value,label}:props) =>{

    if(type === 'phone'){
            return (
                <div className={css.form_input}>
                    {label && <label className={css.label}>{label}
                        {required && <span className={css.required}>*</span>}
                    </label>}
                    <PhoneInput
                        hideDropdown={true}
                        className={css.phone_input}
                        inputClassName={css.input}
                        defaultCountry="uz"
                        value={value}
                        inputProps={{
                            placeholder
                        }}
                        onChange={(phone) => changeValue(phone)}
                    />
                </div>
            )
    }
    if(type === 'name'){
        return (
                <div className={css.form_input}>
                    {label && <label className={css.label}>
                        {label}
                        {required && <span className={css.required}>*</span>}
                    </label>}
                    <input  value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> changeValue(e.target.value)}  placeholder={placeholder} className={`${css.input}  ${raleway.className} `}/>
            </div>
        )
    }
}
export default FormInput