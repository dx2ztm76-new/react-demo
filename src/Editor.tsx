// import MonacoEditor from "react-monaco-editor";
import Editor from '@monaco-editor/react';
import { useState } from 'react';



function SowEditor() {
    const [code, setCode] = useState("// default code, some comment?")


    return (
        <div className="App-Soweditor">
            {/* <a
                className="Sow-link"
                href="https://monaco-editor.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                This is a monaco editor
            </a> */}
            {/* <Editor
                // width="60%"
                // height="100%"
                // language="javascript"
                // theme="vs-dark"
            /> */}
            {/* <h1>他的长度应该怎么设置呢？</h1> */}
            <div className='left-panel'>
                <h1>他的长度应该怎么设置呢？</h1>
            </div>
            {/* <h1>这是我们的第二个editor，他的长度应该怎么设置呢？</h1> */}
            <div className='editor'>
                {/* <span style={{"color":"red", "height": "500px"}}>this is code editor</span> */}
                <Editor defaultLanguage="javascript" defaultValue={code} theme='vs-dark'/>
            </div>
        </div>
    )
}

export default SowEditor;