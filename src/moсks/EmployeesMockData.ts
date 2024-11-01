import { IEmployee } from "../interfaces/IEmployee";

export const employees : IEmployee[] =
    [
        {
            id : "1", 
            lastName : "Смирнова",
            firstName : "София",
            patronymic : "Марковна",
            department : "Отдел 1",
            post : "Должность 1"
        },
        {
            id : "2", 
            lastName : "Беляков",
            firstName : "Владимир",
            patronymic : "Львович",
            department : "Отдел 2",
            post : "Должность 2"
        },
        {
            id : "3", 
            lastName : "Сидоров",
            firstName : "Фёдор",
            patronymic : "Валерьевич",
            department : "Отдел 3",
            post : "Должность 3"
        },
        {
            id : "4", 
            lastName : "Иванов",
            firstName : "Михаил",
            patronymic : "Михайлович",
            department : "Отдел 4",
            post : "Должность 4"
        }
    ];