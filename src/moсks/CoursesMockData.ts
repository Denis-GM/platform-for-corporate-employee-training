import { ICourse, ICourseChapter, ICourseExpanded } from "../interfaces/ICourse";
import { employees } from "./EmployeesMockData";

export const courses : ICourse[] =
    [
        {
            id : "1", 
            name : "Название курса 1",
            description : "Описание 1 Описание 1 Описание 1 Описание 1",
            numberHoursTraining : 20 
        },
        {
            id : "2", 
            name : "Название курса 2",
            description : "Описание 2 Описание 2 Описание 2 Описание 2",
            numberHoursTraining : 20 
        }
    ];

    export const courseChapters1 : ICourseChapter[] = 
    [
        {
            id: "1",
            name: "Первый раздел (1.1)",
            tasks: [
                { 
                    id: "1",
                    name: "Задание 1",
                    taskText: "Текст задания №1"
                }
            ]
        },
        {
            id: "2",
            name: "Второй раздел (1.2)",
            tasks: [
                { 
                    id: "2",
                    name: "Задание 2",
                    taskText: "Текст задания №2"
                }
            ]
        },
    ];

    export const courseChapters2 : ICourseChapter[] = 
    [
        {
            id: "3",
            name: "Первый раздел (2.1)",
            tasks: [
                { 
                    id: "3",
                    name: "Задание 1",
                    taskText: "Текст задания №1"
                }
            ]
        },
        {
            id: "4",
            name: "Второй раздел (2.2)",
            tasks: [
                { 
                    id: "4",
                    name: "Задание 2",
                    taskText: "Текст задания №2"
                }
            ]
        },
    ];

export const courseExpanded : ICourseExpanded[] =
    [
        {
            id : "1", 
            name : "Название курса 1",
            description : "Описание 1 Описание 1 Описание 1 Описание 1",
            numberHoursTraining : 20,
            content: courseChapters1,
            employees: [
                employees[0],
                employees[1]
            ],
            settings: ""
        },
        {
            id : "1", 
            name : "Название курса 1",
            description : "Описание 1 Описание 1 Описание 1 Описание 1",
            numberHoursTraining : 20,
            content: courseChapters2,
            employees: [
                employees[0],
                employees[1]
            ],
            settings: ""
        },
    ];