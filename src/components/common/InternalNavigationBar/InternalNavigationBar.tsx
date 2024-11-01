import { FC } from "react";
import styles from "./InternalNavigationBar.module.css";
import { NavLink } from "react-router-dom";

type navLink = {
    text: string,
    to: string
}

interface IInternalNavigationBar {
    className?: string,
    navLinkArray: navLink[]
}

const InternalNavigationBar: FC<IInternalNavigationBar> = (
    {className, navLinkArray}: IInternalNavigationBar
) => {
    const gridTemplateColumns = "1fr ".repeat(navLinkArray.length);
    const style: any ={
        display: 'grid', 
        gridTemplateColumns: gridTemplateColumns,
        textAlign: 'center'
    };

    const setActive = ({isActive}: any) => (
        isActive ? ` ${styles.a} ${styles.activeNavLink}` : `${styles.a}`
    );

    return (
        <div className={`${styles.internalNavigationBar} ${className}`}  style={style}>
            {navLinkArray && navLinkArray.map(
                (navLink: navLink) => (
                    <NavLink className={setActive} to={navLink.to}>{navLink.text}</NavLink> 
            ))}
        </div>
    );
}

export default InternalNavigationBar;