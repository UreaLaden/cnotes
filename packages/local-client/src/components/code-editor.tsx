import './code-editor.css'
import './syntax.css'
import * as React from 'react';
import MonacoEditor, {EditorDidMount} from '@monaco-editor/react'
import codeShift from 'jscodeshift'
import MonacoJSXHighlighter  from 'monaco-jsx-highlighter';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';


interface CodeEditorProps {
    initialValue:string;
    onChange(value:string): void;
}

const CodeEditor:React.FC<CodeEditorProps> = ({initialValue,onChange}) =>{
    const editorRef = React.useRef<any>();
    /**Monaco Editor is loaded with an initial value. So we update that value
     * with an on change function
     */
    const onEditorDidMount:EditorDidMount = (getValue,monacoEditor) =>{
        editorRef.current = monacoEditor;
        /**Executes when theres a change event to the Monaco Editor */
        monacoEditor.onDidChangeModelContent(() =>{
            onChange(getValue());
        });
        monacoEditor.getModel()?.updateOptions({tabSize:2})    
        
        const highlighter = new MonacoJSXHighlighter (
            /**Makes typescript ignore the next line */
            // @ts-ignore
            window.monaco,
            codeShift,
            monacoEditor
        );
        /*
        * Subsitutions for internal logging. This way the console 
        * doesn't get filled with constant errors as the user types
        **/
        highlighter.highLightOnDidChangeModelContent(
            () => {},
            () => {},
            undefined,
            () => {}
        );
    };
    /**
     * Implementing Prettier to allow users to format their code
     */
    const onFormatClick = () =>{
        // get current value from editor
        const unformatted = editorRef.current.getModel().getValue();
        // format that value
        const formatted = prettier.format(unformatted,{
            parser:'babel',
            plugins:[parser],
            useTabs:false,
            semi:true,
            singleQuote:true
        }).replace(/\n$/,'');
        //set the formatted value back in the editor
        editorRef.current.setValue(formatted);
    }
    return(
    <div className="editor-wrapper">
        <button 
            className="button button-format is-primary is-small" 
            onClick={onFormatClick}>
            Format
        </button>
        <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        height="100%" 
        language="javascript" 
        theme='dark'
        options={{
            wordWrap:'on',
            minimap:{enabled:false},
            showUnused:false,
            folding:false,
            lineNumbersMinChars:3,
            fontSize:16,
            scrollBeyondLastColumn:0,
            automaticLayout:true,
        }} />
    </div>
     )
};

export default CodeEditor;