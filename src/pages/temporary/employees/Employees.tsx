import EmployeeBlock from "./components/EmployeeBlock";
import { IEmployee } from "../../../interfaces/IEmployee";
import styles from "./Employees.module.css";
import { employees } from "../../../moсks/EmployeesMockData";


const Employees = () => {
    return (
        <>
            <div className="temporary-page-title">Employees</div>
            <div className={styles.employeesContainer}>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <span>ФИО</span>
                        <span>Отдел</span>
                        <span>Должность</span>
                    </div>
                    <div className={styles.tableContent}>
                        {employees.map((employee : IEmployee) => (
                            <EmployeeBlock key={employee.id} {...employee} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Employees;