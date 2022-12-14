import * as React from 'react';
import MDEditor from '@uiw/react-md-editor';
import './text-editor.css';
import { Cell } from '../state';
import {useActions} from '../hooks/use-actions';

interface TextEditorProps{
    cell:Cell;
}

const TextEditor:React.FC<TextEditorProps> = ({cell}) =>{
    const ref = React.useRef<HTMLDivElement | null>(null);
    //No other component cares about this, so we'll keep it
    const [editing,setEditing] = React.useState(false); 
    const {updateCell} = useActions();
    
    React.useEffect(() =>{
        const listener = (event:MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)){
                return;
            }
            setEditing(false);
        };
        document.addEventListener('click',listener,{capture:true});
        return () => {
            document.removeEventListener('click',listener,{capture:true})
            
        };
    },[])
    if(editing){
        return(
            <div className="text-editor" ref={ref}>
                <MDEditor value={cell.content} onChange = {(v) => {updateCell(cell.id,v || '')}}/>
            </div>
        );
    };
    return (
        <div className="text-editor card" onClick={()=> setEditing(true)}>
            <div className="card-content">
               <MDEditor.Markdown 
               source={ cell.content || 'Click here to edit' } /> 
            </div>
        </div>
    )
}

export default TextEditor;