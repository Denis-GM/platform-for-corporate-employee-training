import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const setActive = ({ isActive, isPending, isTransitioning }) => (
        isActive ? `${styles.link} ${styles.activeNavLink}` : `${styles.link}`
    );

    return (
        <div className={styles.linkContainer}>
            <NavLink 
                className={setActive}
                to={'course-library/'}
            >
                Библиотека курсов
            </NavLink>
            <NavLink 
                className={setActive}
                to={'employees/'}>
                Сотрудники
            </NavLink>
            <NavLink 
                className={setActive}
                to={'checking-tasks/'}>
                Проверка заданий
            </NavLink>
            <NavLink 
                className={setActive}
                to={'creating-courses/'}>
                Создать курс
            </NavLink>
            <button>Уведомления</button>
            <button>Переключить тему</button>
        </div>
    );
};

export default NavBar;

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
