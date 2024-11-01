/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage404.module.css";

const ErrorPage404 = () => {
	const error: any = useRouteError();
	console.error(error);

    return(
        <div className={styles.conteiner}>
            <h1>Hi! It is an Error Page</h1>
            <h2>404 Not Found Error</h2>
            <p>
                <i>{error.statusText}</i>
            </p>
            <p>
                <i>{error.data}</i>
            </p>
        </div>
    );
}

export default ErrorPage404;