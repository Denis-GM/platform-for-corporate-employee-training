/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "../../components/common/NavBar/NavBar";
import styles from "./MainLayout.module.css";


const MainLayout = () => {
    return (
        <>
            <div className={styles.navBarContainer}>
                <NavBar />
            </div>
            <div className={styles.mainLayoutContainer}>
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;