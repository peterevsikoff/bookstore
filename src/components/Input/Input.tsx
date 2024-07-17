import { IInput } from "../../types";
import "./input.scss";

const Input = ({type, value, setValue, errorText="", title, disabled=false, placeholder=""}: IInput) => {
    return(
        <div className="input">
            <div>{title}</div>
            <input className={errorText ? "error-input" : ""} type={type} value={value} disabled={disabled} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
            {
                errorText && 
                <div className="error">{errorText}</div>
            }
        </div>
    )
}

export { Input };