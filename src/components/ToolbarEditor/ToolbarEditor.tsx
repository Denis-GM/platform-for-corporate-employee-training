import { FC } from "react";
import { useEditorApi } from "../TextEditor/context";
import { BlockType } from "../TextEditor/config";
import styles from "./ToolbarEditor.module.css";

const ToolPanelEditor: FC = () => {
    const { toggleBlockType } = useEditorApi();

    return (
        <>
            <div className={styles.toolPanel}>
                <button
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType(BlockType.h1);
                    }}
                >
                    Заголовок
                </button>
                <button
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType(BlockType.h2);
                    }}
                >
                    Подзаголовок
                </button>
                <button
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType(BlockType.orderList);
                    }}
                >
                    Нумерованный список
                </button>
                <button
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType(BlockType.list);
                    }}
                >
                    Список
                </button>
                <button
                    onMouseDown={(e) => {
                        e.preventDefault();
                        toggleBlockType(BlockType.code);
                    }}
                >
                    Code
                </button>
            </div>
        </>
    );
}

export default ToolPanelEditor;