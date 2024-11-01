import { FC, useContext } from "react";
import { СourseContext } from "../../CoursePage";
import { ICourseExpanded } from "../../../../../interfaces/ICourse";
import { Link } from "react-router-dom";
import Button from "../../../../../components/common/Button/Button";
import styles from "./AboutSection.module.css";

const AboutSection: FC = () => {
    const course = useContext<ICourseExpanded>(СourseContext);
    const chapters = [
        {to: "chaper-1", name: "Основы методологии управления проектами", tasks: [
            {to: "lecture-1", name: "Лекция 1"},
            {to: "test-1", name: "Тест 1"}
        ]}, 
        {to: "chaper-2", name: "Система менеджмента проектной деятельности", tasks: [
            {to: "lecture-2", name: "Лекция 2"},
            {to: "test-2", name: "Тест 2"},
            {to: "task-1", name: "Задание 1"}
        ]},
        {to: "chaper-3", name: "Корпоративный стандарт управления проектами", tasks: [
            
            {to: "lecture-3", name: "Лекция 3"},
            {to: "test-3", name: "Тест 3"},
            {to: "task-2", name: "Задание 2"}
        ]},
        {to: "chaper-4", name: "Управление содержанием проекта", tasks: [
            {to: "lecture-4", name: "Лекция 4"},
            {to: "task-3", name: "Задание 3"}
        ]}
    ]

    return (
        <>
            <div>
                {course?.name}
            </div>
            <div>
                <div>Описание</div>
                {course?.description}
            </div>
            {/* <div>
                Время прохождения курса: ~ {course?.numberHoursTraining}
            </div> */}

            <div className={styles.content}>
                <span className={styles.content__title}>Содержание</span>
                <ol className={styles.content__list}>
                    {chapters && chapters.map((chapter: any) => (
                        <li className={styles.content__listElement}>
                            <Link className={styles.content__link} to={chapter.to}>
                                {chapter.name}
                            </Link>
                            {chapter.tasks.map((task: any) => (
                                <div>
                                    <Link className={styles.content__link} to={task.to}>
                                        {task.name}
                                    </Link>
                                </div>
                            ))}
                        </li>
                    ))}
                </ol>
            </div>

            <div>
                <Button>Редактировать</Button>
            </div>
            <div>
                <Button>Удалить</Button>
            </div>
        </>
    );
}

export default AboutSection;