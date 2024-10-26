import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    nameLabel?: string,
    width?: string,
    // defaultValue?: string | number
}

const Input: FC<IInput> = (
    { nameLabel, width, ...props }: IInput
) => {
    const inputStyle = {
        width: `${width}`
    };
    
    return(
        <>
            <label className={styles.label}>
                <span className={styles.labelText}>
                    {nameLabel}
                </span>
                <input
                    className={styles.input}
                    style={inputStyle} 
                    {...props}/>
            </label>
        </>
    );
}

export default Input;