import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.linkContainer}>
            <Link className={styles.link} to={'course-library/'}>Библиотека курсов</Link>
            <Link className={styles.link} to={'employees/'}>Сотрудники</Link>
            <Link className={styles.link} to={'checking-tasks/'}>Проверка заданий</Link>
            <Link className={styles.link} to={'creating-courses/'}>Создать курс</Link>
            <button>Уведомления</button>
            <button>Переключить тему</button>
        </div>
    );
};

export default NavBar;