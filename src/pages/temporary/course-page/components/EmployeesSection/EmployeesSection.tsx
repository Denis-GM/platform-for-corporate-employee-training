import { FC, useContext } from "react";
import { СourseContext } from "../../CoursePage";
import { ICourseExpanded } from "../../../../../interfaces/ICourse";
import { IEmployee } from "../../../../../interfaces/IEmployee";
import styles from "./EmployeesSection.module.css";
import Button from "../../../../../components/common/Button/Button";

const EmployeesSection: FC = () => {
    const course = useContext<ICourseExpanded>(СourseContext);
    
    return (
        <>
            <div>
                <div className={styles.title}>Список</div>
                <div className={styles.employeeNameList}>
                    {course?.employees.map((employee: IEmployee, index: number) => (
                        <div className={styles.employeeName}>
                            <span>{index + 1})</span>
                            <span>{employee.lastName}</span>
                            <span>{employee.firstName}</span>
                            <span>{employee.patronymic}</span>
                            <Button>Посмотреть</Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EmployeesSection;