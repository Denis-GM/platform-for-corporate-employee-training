import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string
}

const Button: FC<IButton> = (props: IButton) => {
    return(
        <>
            <button  className={styles.button} {...props}>
                {props.children}
            </button>
        </>
    );
}

export default Button;