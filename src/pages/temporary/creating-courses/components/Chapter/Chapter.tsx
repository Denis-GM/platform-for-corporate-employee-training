import { ChangeEvent, FC, useState } from "react";
import styles from "./Chapter.module.css";
import Input from "../../../../../components/common/Input/Input";
import Button from "../../../../../components/common/Button/Button";
import SlidingModalWindow from "../../../../../components/common/SlidingModalWindow/SlidingModalWindow";

interface Chapter {
    valueForInput?: string,
    index: number,
    width?: string,
    removeCourseChapter(): void
    handleFormChange(event: ChangeEvent<HTMLInputElement>): void;
}

interface IFormTasks {
    taskName: string
}

const Chapter: FC<Chapter> = (
    { valueForInput, index, width = '40%', removeCourseChapter, handleFormChange }: Chapter
) => {

    const [selectedTask, setSelectedTask] = useState('lecture');
    const [formTasks, setFormTasks] = useState<IFormTasks[]>([]);

    const handleFormChangeTasks = (event: any, index: number) => {
        const data = [...formTasks];
        data[index][event.target.name] = event.target.value;
        setFormTasks(data);
    }

    const addTasks = () => {
        let taskName: string = 'Лекция';
        switch(selectedTask) {
            case "lecture":
                taskName = 'Лекция';
                break;
            case "test":
                taskName = 'Тест';
                break;
            case "task":
                taskName = 'Задание';
                break;
        }

        const object: IFormTasks = {
            taskName: taskName
        }
        setFormTasks([...formTasks, object])
    }

    const removeTasks = (index: number) => {
        const data: IFormTasks[] = [...formTasks];
        data.splice(index, 1)
        setFormTasks(data)
    }

    return(
        <div className={styles.block}>
            <div className={styles.chapter}>

                <div className={styles.chapterNumber}>{index + 1}</div>

                <Input 
                    width={width} 
                    nameLabel={"Название раздела"} 
                    type="text" 
                    name='chapterName'
                    value={valueForInput}
                    onChange={event => handleFormChange(event)} />

                {formTasks.map((form, index: number) => {
                    return (
                        <div key={index} className={styles.taskBlock}>
                            <div className={styles.taskBlock__name}>
                                {form.taskName}
                            </div>
                            <Button>Управлять содержимым</Button>
                            <Button onClick={() => removeTasks(index)}>
                                Удалить
                            </Button>
                        </div>
                    )
                })}

                <div className={styles.taskAddingPanel}> 
                    <select 
                        className={styles.taskAddingPanel__select} 
                        onChange={e => setSelectedTask(e.target.value)}
                        // onChange={(event: any) => handleFormChangeTasks(event, index)}
                        id={"taskType_" + index} name={"taskType" + index}>

                        <option value="lecture">Лекция</option>
                        <option value="test">Тест</option>
                        <option value="task">Задание</option>
                    </select>
                    <Button onClick={addTasks}>Добавить</Button>
                </div>    
                <div className={styles.chapterManagementPanel}>
                    <Button className={styles.chapterManagementPanel__button}>Опубликовать</Button>
                    <Button className={styles.chapterManagementPanel__button} onClick={() => removeCourseChapter()}>
                        Удалить
                    </Button>
                </div>
            </div>
            <SlidingModalWindow></SlidingModalWindow>
        </div>
    );
}

export default Chapter;