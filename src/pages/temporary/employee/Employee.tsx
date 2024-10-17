import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeeBlock.module.css";

const Employee : FC = () => {
    const { employeeID } = useParams();

    return (
        <div className="temporary-page-title">Employee {employeeID}</div>
    );
}

export default Employee;