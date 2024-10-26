import { IEmployee } from "./IEmployee"
import { IEntity } from "./IEntity"

export interface ICourse extends IEntity {
    name: string,
    description: string,
    numberHoursTraining: number
}

export interface ICourseExpanded extends IEntity {
    name: string,
    description: string,
    numberHoursTraining: number,
    content: ICourseChapter[],
    employees: IEmployee[],
    settings: string
}

export interface ICourseChapter extends IEntity {
    name: string,
    tasks: ITask[]
}

export interface ITask extends IEntity {
    name: string,
    taskText: string
}

// export interface IComments extends IEntity {
    
// }

// export interface ISettings extends IEntity {
    
// }