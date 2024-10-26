import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { checkingTasks } from "../../../moсks/CheckingTaskMockData";
import { ICheckingTask } from "../../../interfaces/ICheckingTask";

const CheckingTask: FC = () => {
    const { checkingTaskID } = useParams();
    const [checkingTask, setCheckingTask] = useState<ICheckingTask>();

    useEffect(() => {
        const checkingTask: ICheckingTask | undefined = checkingTasks.find((item: ICheckingTask) => item.id == checkingTaskID)
        setCheckingTask(checkingTask);
    }, [])
    
    return (
        <>
            <div className="temporary-page-title">Checking Task {checkingTaskID}</div>
            { checkingTask &&
            <div>
                <div>{checkingTask?.id}</div>
            </div>}
            { !checkingTask &&
            <div>
                <div>Элемента не существует</div>
            </div>}
        </>
    );
}

export default CheckingTask;