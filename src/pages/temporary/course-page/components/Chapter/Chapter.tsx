import { FC } from "react";
import styles from "./Chapter.module.css";


const Chapter: FC = () => {
    return(
        <div>
            <div className={styles.courseName}>
                name
            </div>
            <div className={styles.listChapters}>
                <div className={styles.chapter}>
                    
                </div>
            </div>
        </div>
    );
}

export default Chapter;