import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import 'codemirror/theme/material.css'
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import { Controlled as ControlledEditor } from "react-codemirror2";

import {faCompressAlt,faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Editor = (props) => {
    
    const {displayName,language,value,onChange}  =props
    const [open,setOpen]=useState(true)
    function handleChange(editor,data,value){
         onChange(value)

    }
    return (
    <div className={`editor-container ${open ?'':'collapsed'}`}>
       
      <div className="editor-title">
        {displayName}<button>Genrate</button> <button onClick={()=>setOpen(open=>!open)}><FontAwesomeIcon icon={open?faCompressAlt:faExchangeAlt}/></button>
      </div>
      <ControlledEditor
       onBeforeChange={handleChange}
       value={value}
       className="code-mirror-wrapper"
       options={{
        lineWrapping:true,
        mode:language,
        theme: 'material',
        lineNumbers: true,
        lint:true
       }}
      />
    </div>
  );
};

export default Editor;
