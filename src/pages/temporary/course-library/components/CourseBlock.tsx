import { FC } from "react";
import { ICourse } from "../../../../interfaces/ICourse";
import { Link } from "react-router-dom";
import styles from "./CourseBlock.module.css";

const CourseBlock : FC<ICourse> = ({ id, name, description }) => {
    return (
        <div className={styles.courseBlock}>
            <div className={styles.title}>{name}</div>
            <div className={styles.description}>{description}</div>
            <div>
                <Link to={`${id}/about`}>Ссылка</Link>
            </div>
            <div>
                <Link to={``}>Редактировать (void)</Link>
            </div>
            <div>
                <Link to={``}>Удалить (void)</Link>
            </div>
        </div>
    );
}

export default CourseBlock;