import { FC } from "react";
import './NavigationBar.scss';
import { NavLink } from "react-router-dom";

interface INavigationBar {
    title: string,
    bottomPadding?: number
}

const NavigationBar: FC<INavigationBar> = ({title, bottomPadding = 21}: INavigationBar) => {
    const style: any = {paddingBottom: `${bottomPadding}px`};

    return (
        <div className="decorative-panel" style={style}>
            <div className="virtual-navigation-bar">

                <nav className="navigation-bar">
                    <div className="left-part">
                        <div className="navigation-bar__title">
                            {title}
                        </div>
                        <div className="navigation-bar__links">
                            <NavLink className={`link link__image_library`} to="library">Библиотека курсов</NavLink>
                            <NavLink className={`link link__image_courses`} to="my-courses">Мои курсы</NavLink>
                            <NavLink className={`link link__image_profile`} to="profile">Профиль</NavLink>
                            <NavLink className={`link link__image_notifications`} to="notifications">Уведомления</NavLink>
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="profile">
                            <div className="profile__text">
                                <div className="profile__name">Вахрушева Виктория</div>
                                <div className="profile__post">Программист</div>
                            </div>
                            <div className="profile__icon"></div>
                        </div>
                    </div>
                </nav>

                <div className="protruding-left-block"></div>
                <div className="protruding-bottom-block"></div>
            </div>
        </div>
    );
}

export default NavigationBar;