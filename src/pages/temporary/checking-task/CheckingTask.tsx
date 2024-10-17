import { FC } from "react";
import { useParams } from "react-router-dom";

const CheckingTask: FC = () => {
    const { checkingTaskID } = useParams();
    
    return (
        <>
            <div className="temporary-page-title">Checking Task {checkingTaskID}</div>
        </>
    );
}

export default CheckingTask;