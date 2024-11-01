import { FC } from "react";
import './CourseBlock.scss';

interface ICourseBlock {
    title?: string,
    topic?: string,
    description?: string,
    targetAudience?: string,
    complexity?: string
}

const CourseBlock: FC<ICourseBlock> = ({ 
    title, 
    topic, 
    description,
    targetAudience,
    complexity 
}: ICourseBlock) => {

    return (
        <div className="course">
            <div className="course__header">
                <div className="title">
                    {title}
                </div>
                <div className="topic">
                    {topic}
                </div>
            </div>
            <div className="course__main">
                <div className="description">
                    <div className="description__title">Описание</div>
                    <div className="description__text">{description}</div>
                </div>
                <div className="target-audience">
                    <div className="target-audience__title">Для кого курс:</div>
                    <div className="target-audience__text">{targetAudience}</div>
                </div>
                <div className="complexity">
                    <div className="complexity__title">Сложность:</div>
                    <div className="complexity__text">{complexity}</div>
                </div>
            </div>
            <div className="course__buttons">
                <button>Записаться</button>
                <button>Подробнее о курсе</button>
            </div>
        </div>
    );
}

export default CourseBlock;