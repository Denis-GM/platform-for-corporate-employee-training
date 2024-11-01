/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { ICourseExpanded } from "../../../interfaces/ICourse";
import { courseExpanded } from "../../../moсks/CoursesMockData";
import InternalNavigationBar from "../../../components/common/InternalNavigationBar/InternalNavigationBar";
import styles from "./CoursePage.module.css";

export const СourseContext = createContext<any>(null);

const CoursePage = () => {
    const { courseID } = useParams();
    const [course, setCourse] = useState<ICourseExpanded | null>();
    
    const navLinkArray = [
        {text: "О курсе", to: "about"},
        {text: "Сотрудники", to: "employees"},
        {text: "Настройки", to: "settings"}
    ]

    useEffect(() => {
        setCourse(courseExpanded.find(
            (item: ICourseExpanded) =>  item.id == courseID))
    }, [courseID])

    return (
        <>
            <InternalNavigationBar
                className={styles.nav}
                navLinkArray={navLinkArray} />
            <СourseContext.Provider value={course}>
                <div className={styles.course}>
                    <Outlet />
                </div>
            </СourseContext.Provider>
        </>
    );
}

export default CoursePage;