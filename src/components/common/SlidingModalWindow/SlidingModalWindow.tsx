import { FC, useState } from "react";
import Button from "../Button/Button";
import styles from "./SlidingModalWindow.module.css";

const SlidingModalWindow: FC = () => {
    const [modalState, setModalState] = useState<boolean>(false);

    function handleModalState(): void {
        setModalState(!modalState);
    }

    return (
        <>
            <Button onClick={handleModalState}>modalState</Button>
            {modalState && 
                // <div>
                    <div id={styles['#modalBlock']}>
                        <a className={styles.closeBlock} href="#close-block">X</a>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                // </div>
            }
        </>
    );
}

export default SlidingModalWindow;