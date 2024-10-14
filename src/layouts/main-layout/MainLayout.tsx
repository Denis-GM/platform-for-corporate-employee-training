/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet } from "react-router-dom";
import NavBar from "../../components/common/nav-bar/NavBar";
import styles from "./MainLayout.module.css"


const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
        </>
    );
}

export default MainLayout;