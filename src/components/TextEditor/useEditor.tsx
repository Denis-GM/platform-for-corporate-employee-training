import { EditorState, RichUtils } from 'draft-js';
import { useCallback, useMemo, useState } from 'react';
import { BlockType } from './config';
 
export type EditorApi = {
	state: EditorState;
	onChange: (state: EditorState) => void;
	toggleBlockType: (blockType: BlockType) => void;
	currentBlockType: BlockType;
}

export const useEditor = (html?: string): EditorApi => {
	const [state, setState] = useState(() => EditorState.createEmpty());

	const toggleBlockType = useCallback(
		(blockType: BlockType) => {
		setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
	}, []);

	const currentBlockType = useMemo(() => {
		const selection = state.getSelection();
		const content = state.getCurrentContent();
		const block = content.getBlockForKey(selection.getStartKey());
		
		return block.getType() as BlockType;
	}, [state]);
	
	return useMemo(() => ({
		state,
		onChange: setState,
		toggleBlockType: toggleBlockType,
		currentBlockType: currentBlockType
	}), [state, currentBlockType, toggleBlockType])
}