import { IEmployeeForTask } from "../interfaces/IEmployeeForTask"; 

export const employeesForTask : IEmployeeForTask[] =
    [
        {
            id : "1", 
            lastName : "Фамилия1",
            firstName : "Имя1",
            patronymic : "Отчество1",
            taskName : "Задание 1",
            courseName : "Курс 1",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        },
        {
            id : "2", 
            lastName : "Фамилия2",
            firstName : "Имя2",
            patronymic : "Отчество2",
            taskName : "Задание 2",
            courseName : "Курс 2",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        },
        {
            id : "3", 
            lastName : "Фамилия3",
            firstName : "Имя3",
            patronymic : "Отчество3",
            taskName : "Задание 3",
            courseName : "Курс 3",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        },
        {
            id : "4", 
            lastName : "Фамилия4",
            firstName : "Имя4",
            patronymic : "Отчество4",
            taskName : "Задание 4",
            courseName : "Курс 4",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        }
    ];