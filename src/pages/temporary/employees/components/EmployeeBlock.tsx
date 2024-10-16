import { FC } from "react";
import { IEmployee } from "../../../../interfaces/IEmployee";
import styles from "./EmployeeBlock.module.css";
import { Link } from "react-router-dom";

const EmployeeBlock : FC<IEmployee> = ({...data}) => {
    return (
        <Link to={`${data.id}`} className={styles.employeeBlock}>
            <div className={styles.fullName}>
                <span>{data.lastName}</span>
                <span>{data.firstName}</span>
                <span>{data.patronymic}</span>
            </div>
            <div>{data.department}</div>
            <div>{data.post}</div>
        </Link>
    );
}

export default EmployeeBlock;