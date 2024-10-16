import { FC } from "react";
import styles from "./EmployeeBlock.module.css";
import { useParams } from "react-router-dom";

const Employee : FC = () => {
    const { employeeID } = useParams();

    return (
        <div className="temporary-page-title">Employee {employeeID}</div>
    );
}

export default Employee;