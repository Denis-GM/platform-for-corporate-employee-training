import { FC, useContext } from "react";
import { ICourseExpanded } from "../../../../../interfaces/ICourse";
import { СourseContext } from "../../CoursePage";

const SettingsSection: FC = () => {
    const course = useContext<ICourseExpanded>(СourseContext);

    return(
        <>
        Настройки...
        </>
    );
}

export default SettingsSection;