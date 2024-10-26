import { IEntity } from "./IEntity";

export interface IEmployee extends IEntity {
    lastName: string,
    firstName: string,
    patronymic: string,
    department: string,
    post: string
}

export interface IEmployeeForTask extends IEntity {
    lastName: string,
    firstName: string,
    patronymic: string,
    taskName: string,
    courseName: string,
    dateAndTimeSendingTask: Date,
}