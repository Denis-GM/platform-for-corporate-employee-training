/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICourseExpanded } from "../../../interfaces/ICourse";
import { courseExpanded } from "../../../moсks/CoursesMockData";
import { IEmployee } from "../../../interfaces/IEmployee";
import styles from "./CoursePage.module.css";

const CoursePage = () => {
    const { courseID } = useParams();
    const [course, setCourse] = useState<ICourseExpanded | null>();

    useEffect(() => {
        setCourse(courseExpanded.find(
            (item: ICourseExpanded) =>  item.id == courseID))
    }, [courseID])

    return (
        <>
            <div className="temporary-page-title">Course Page {courseID}</div>
            <div className={styles.course}>
                <div>
                    {course?.name}
                </div>
                <div>
                    <div>Описание</div>
                    {course?.description}
                </div>
                <div>
                    Время прохождения курса: ~ {course?.numberHoursTraining}
                </div>

                <div>
                    <div>Список </div>
                    <div className={styles.employeeNameList}>
                        {course?.employees.map((employee: IEmployee, index: number) => (
                            <>
                                <div className={styles.employeeName}>
                                    <span>{index + 1})</span>
                                    <span>{employee.lastName}</span>
                                    <span>{employee.firstName}</span>
                                    <span>{employee.patronymic}</span>
                                    <button>Посмотреть</button>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div>
                    <button>Редактировать</button>
                </div><div>
                    <button>Удалить</button>
                </div>
            </div>
        </>
    );
}

export default CoursePage;