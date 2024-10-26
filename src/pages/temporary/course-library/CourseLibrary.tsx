/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react"
import { ICourse } from "../../../interfaces/ICourseShort";
import CourseBlock from "./components/CourseBlock";
import styles from "./CourseLibrary.module.css";
import { courses } from "../../../moсks/CoursesMockData";


const CourseLibrary = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetchContent();
    }, [])

    
    async function fetchContent() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className="temporary-page-title">Course Library</div>
            <div className={styles.courseСontainer}>
                {courses.map((course : ICourse) => (
                    <CourseBlock key={course.id} {...course} />
                ))}
            </div>
        </>
    );
}

export default CourseLibrary;