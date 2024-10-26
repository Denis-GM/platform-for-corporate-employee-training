import { ITask } from "./ICourse";
import { IEmployee } from "./IEmployee";
import { IEntity } from "./IEntity";

export interface ICheckingTask extends IEntity  {
    employee: IEmployee
    task: ITask,
    answer: string,
    comment: string
} 