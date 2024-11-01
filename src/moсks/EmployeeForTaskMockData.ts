import { IEmployeeForTask } from "../interfaces/IEmployee";

export const employeesForTask : IEmployeeForTask[] =
    [
        {
            id : "1", 
            lastName : "Смирнова",
            firstName : "София",
            patronymic : "Марковна",
            taskName : "Задание 1",
            courseName : "Курс 1",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        },
        {
            id : "2", 
            lastName : "Беляков",
            firstName : "Владимир",
            patronymic : "Львович",
            taskName : "Задание 2",
            courseName : "Курс 2",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        },
        {
            id : "3", 
            lastName : "Сидоров",
            firstName : "Фёдор",
            patronymic : "Валерьевич",
            taskName : "Задание 3",
            courseName : "Курс 3",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        },
        {
            id : "4", 
            lastName : "Иванов",
            firstName : "Михаил",
            patronymic : "Михайлович",
            taskName : "Задание 4",
            courseName : "Курс 4",
            dateAndTimeSendingTask: new Date(2024, 10, 17, 12, 45, 0, 0)
        }
    ];