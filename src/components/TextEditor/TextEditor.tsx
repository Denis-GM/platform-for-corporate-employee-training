import { FC, memo } from "react";
import { convertToRaw, Editor } from 'draft-js';
import { useEditorApi } from "./context";
import { BLOCK_RENDER_MAP} from "./config";
import ToolPanelEditor from "../ToolbarEditor/ToolbarEditor";
import 'draft-js/dist/Draft.css';
import "./RichEditor.css";
import styles from "./TextEditor.module.css";

interface IProps {
    className?: string,
    htmlText?: string,
    placeholder?: string
}

const TextEditor: FC<IProps> = (
    {
        className =`${styles.container}`, 
        // htmlText, 
        placeholder = "Введите ваш текст"
    }
) => {
    
    const { state, onChange } = useEditorApi();

    function myBlockStyleFn(contentBlock: any): any {
        const type = contentBlock.getType();
        if (type === 'blockquote') {
          return 'superFancyBlockquote';
        }
      }
    
    return (
        <>
            <div className={className}>
                <ToolPanelEditor />
                <div className={styles.textEditor}>
                    <Editor
                        placeholder={placeholder}
                        blockStyleFn={myBlockStyleFn}
                        editorState={state}
                        onChange={onChange} 
                        blockRenderMap={BLOCK_RENDER_MAP}
                    />
                </div>
                <button onClick={
                    () => {
                        console.log(convertToRaw(state.getCurrentContent()))
                    }
                }>
                    Отправить
                </button>
            </div>
        </>
    );
}

export default memo(TextEditor);