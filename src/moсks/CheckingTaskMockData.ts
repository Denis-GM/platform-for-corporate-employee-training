import { ICheckingTask } from "../interfaces/ICheckingTask";
import { employees } from "./EmployeesMockData";
import { tasks } from "./TaskMockData";


export const checkingTasks : ICheckingTask[] = [
    {
        id: "1",
        employee: employees[0],
        task: tasks[0],
        answer: "Ответ 1",
        comment: "Комментари 1"
    },
    {
        id: "2",
        employee: employees[1],
        task: tasks[1],
        answer: "Ответ 2",
        comment: "Комментари 2"
    },
    {
        id: "3",
        employee: employees[2],
        task: tasks[2],
        answer: "Ответ 3",
        comment: "Комментари 3"
    },
    {
        id: "4",
        employee: employees[3],
        task: tasks[3],
        answer: "Ответ 4",
        comment: "Комментари 4"
    }
]