/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
import styles from "./CoursePage.module.css"

const CoursePage = () => {
    const { courseID } = useParams();

    return (
        <>
            <div className="temporary-page-title">Course Page {courseID}</div>
        </>
    );
}

export default CoursePage;