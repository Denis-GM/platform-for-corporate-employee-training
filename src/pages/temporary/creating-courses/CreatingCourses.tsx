import { ChangeEvent, useState } from "react";
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";
import { TextEditorProvider } from "../../../components/TextEditor/context";
import TextEditor from "../../../components/TextEditor/TextEditor";
import styles from "./CreatingCourses.module.css";
import Chapter from "./components/Chapter/Chapter";

interface IChapterForm {
    chapterName: string
}

const CreatingCourses = () => {

    // const [formFields, setFormFields] = useState<IChapterForm[]>([
    //     { chapterName: '' }
    //   ])
    const [formFields, setFormFields] = useState<IChapterForm[]>([]);
    
    const handleFormChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        const data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = (e: any) => {
        e.preventDefault();
        console.log(formFields)
    }

    const addFields = () => {
        const object: IChapterForm = {
            chapterName: ''
        }
        setFormFields([...formFields, object])
    }

    const removeFields = (index: number) => {
        const data: IChapterForm[] = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <>
            <div className="temporary-page-title">Creating Courses</div>

            <form onSubmit={submit}>
                <div className={styles.block}>
                    <div className={styles.section}>
                        <div>Обложка курса...</div>
                        <Input 
                            width={'40%'} 
                            nameLabel={"Название курса"} 
                            type="text" />
                        <Input 
                            width={'60%'} 
                            nameLabel={"Описание курса"} 
                            type="text" />
                        <div>Настройки...</div>
                    </div>
                </div>

                {formFields.map((form, index) => {
                    return (
                        <div key={index}>
                            <Chapter 
                                index={index}
                                valueForInput={form.chapterName}
                                handleFormChange={handleFormChange(index)}
                                removeCourseChapter={() => removeFields(index)} />
                        </div>
                    )
                })}
            </form>
            <div className={`${styles.block__paddingButton_30px} ${styles.section__content_center}`}>
                <Button onClick={addFields}>
                    Добавить раздел +
                </Button>
            </div>
            {/* <div className={styles.block}> */}
            <Button onClick={submit}>Сохранить</Button>
            {/* </div> */}

            <div className={styles.textEditorContainer}>
                <TextEditorProvider>
                    <TextEditor />
                </TextEditorProvider>
            </div>
            {/* <iframe src="https://vk.com/video_ext.php?oid=-9594364&id=456239279&hd=2&autoplay=1" width="853" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe> */}
        </>
    );
};

export default CreatingCourses;