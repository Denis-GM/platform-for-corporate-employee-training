import { ChangeEvent, FC } from "react";
import styles from "./Chapter.module.css";
import Input from "../../../../../components/common/Input/Input";
import Button from "../../../../../components/common/Button/Button";

interface Chapter {
    valueForInput?: string,
    index?: number,
    width?: string,
    removeCourseChapter(): void
    handleFormChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Chapter: FC<Chapter> = (
    { valueForInput, index, width = '40%', removeCourseChapter, handleFormChange }: Chapter
) => {

    return(
        <div className={styles.block}>
            <div className={styles.chapter}>

                <div className={styles.chapterNumber}>{index + 1}</div>

                <Input 
                    width={width} 
                    nameLabel={"Название раздела"} 
                    type="text" 
                    name='chapterName'
                    defaultValue={index}
                    value={valueForInput}
                    onChange={event => handleFormChange(event)} />
                    
                <Button>Добавить задание / лекцию</Button>
                <div className={styles.btnPanel}>
                    <Button className={styles.btnPanel__button}>Опубликовать</Button>
                    <Button className={styles.btnPanel__button} onClick={() => removeCourseChapter()}>
                        Удалить
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Chapter;