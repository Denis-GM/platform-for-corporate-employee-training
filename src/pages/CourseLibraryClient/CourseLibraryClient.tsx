import { FC } from "react";
import CourseBlock from "../../components/common/CourseBlock/CourseBlock";
import './CourseLibraryClient..scss';

const CourseLibraryClient: FC = () => {
    return(
        <>
            <div className="container">
                <CourseBlock></CourseBlock>
            </div>
        </>
    );
}

export default CourseLibraryClient;