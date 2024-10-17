import styles from "./CheckingTasks.module.css";
import { employeesForTask } from "../../../moсks/EmployeeForTaskMockData";
import { IEmployeeForTask } from "../../../interfaces/IEmployeeForTask";
import EmployeeBlock from "./components/EmployeeBlock";

const CheckingTasks = () => {
    return (
        <>
            <div className="temporary-page-title">Checking Tasks</div>
            <div className={styles.employeesContainer}>
                <div className={styles.table}>
                    <div className={styles.tableHeader}>
                        <span>ФИО</span>
                        <span>Название задания</span>
                        <span>Название курса</span>
                        <span>Время отправки</span>
                    </div>
                    <div className={styles.tableContent}>
                        {employeesForTask.map((employee : IEmployeeForTask) => (
                            <EmployeeBlock key={employee.id} {...employee} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckingTasks;