import { FC } from "react";
import { IEmployeeForTask } from "../../../../interfaces/IEmployeeForTask";
import { Link } from "react-router-dom";
import styles from "./EmployeeBlock.module.css";

const EmployeeBlock : FC<IEmployeeForTask> = ({...data}) => {
    return (
        <Link to={`${data.id}`} className={styles.employeeBlock}>
            <div className={styles.fullName}>
                <span>{data.lastName}</span>
                <span>{data.firstName}</span>
                <span>{data.patronymic}</span>
            </div>
            <div>{data.taskName}</div>
            <div>{data.courseName}</div>
            <div>{data.dateAndTimeSendingTask.toLocaleString()}</div>
        </Link>
    );
}

export default EmployeeBlock;